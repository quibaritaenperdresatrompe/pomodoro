import { func } from "prop-types";
import React from "react";

import { useTheme } from "./ThemeProvider";
import EmojiButton from "./EmojiButton";

export default function ThemeButton({ onClick }) {
  const theme = useTheme();
  return (
    <EmojiButton
      emoji={theme === "light" ? "☀️" : "🌘"}
      label="Toggle theme"
      onClick={onClick}
    />
  );
}

ThemeButton.propTypes = {
  onClick: func,
};

ThemeButton.defaultProps = {
  onClick: Function.prototype,
};
