import { cleanup, render } from "@testing-library/react";
import React from "react";

import Horloge from "../Horloge";

describe(Horloge.name, () => {
  describe("on large screen, i.e. >= 600px", () => {
    beforeAll(() => {
      Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: jest.fn(() => {
          return {
            matches: true,
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
          };
        }),
      });
    });

    afterAll(cleanup);

    it("renders correctly", () => {
      const { asFragment } = render(<Horloge />);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("on small screen, i.e. < 600px", () => {
    beforeAll(() => {
      Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: jest.fn(() => {
          return {
            matches: false,
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
          };
        }),
      });
    });

    afterAll(cleanup);

    it("renders correctly", () => {
      const { asFragment } = render(<Horloge />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
