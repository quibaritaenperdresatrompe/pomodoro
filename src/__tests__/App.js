import { act, fireEvent, render } from "@testing-library/react";
import React from "react";

import App from "../App";
jest.mock("../useTimer", () => () => 60);
jest.mock("../useAlarm", () => () => [jest.fn(), jest.fn(), jest.fn()]);

describe(App.name, () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      value: jest.fn(() => {
        return {
          matches: true,
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
        };
      }),
    });
  });

  it("renders correctly", () => {
    const { asFragment, getByText } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
    act(() => {
      fireEvent.click(getByText("🔔"));
    });
    expect(asFragment()).toMatchSnapshot();
    act(() => {
      fireEvent.click(getByText("🔕"));
    });
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly after emoji has been changed", () => {
    const { asFragment, getByText } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
    act(() => {
      fireEvent.click(getByText("work"));
    });
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly after session type has been changed", () => {
    const { asFragment, getByText } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
    act(() => {
      fireEvent.click(getByText("01:00"));
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
