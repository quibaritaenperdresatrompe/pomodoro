import { render } from "@testing-library/react";
import React from "react";

import EmojiButton from "../EmojiButton";

describe(EmojiButton.name, () => {
  it("renders correctly", () => {
    const { asFragment } = render(<EmojiButton />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly with an unkonwn size", () => {
    const { asFragment } = render(<EmojiButton size="xs" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
