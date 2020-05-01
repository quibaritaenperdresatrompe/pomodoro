import { func, oneOf, string } from "prop-types";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useTheme } from "./ThemeProvider";

const useStyles = makeStyles(() => ({
  button: {
    border: "none",
    background: "none",
    cursor: "pointer",
    outline: "none",
  },
  emoji: {
    color: ({ theme }) => (theme === "light" ? "black" : "white"),
    fontSize: ({ size }) => ({ small: 16, medium: 32, large: 64 }[size] || 32),
    userSelect: "none",
  },
}));

export default function EmojiButton({ emoji, label, onClick, size }) {
  const theme = useTheme();
  const classes = useStyles({ size, theme });
  return (
    <button onClick={onClick} className={classes.button}>
      <span
        aria-hidden={label ? "false" : "true"}
        aria-label={label ? label : ""}
        className={classes.emoji}
        role="img"
      >
        {emoji}
      </span>
    </button>
  );
}

EmojiButton.propTypes = {
  emoji: string,
  label: string,
  onClick: func,
  size: oneOf(["small", "medium", "large"]),
};

EmojiButton.defaultProps = {
  emoji: null,
  label: null,
  onClick: Function.prototype,
  size: "medium",
};
