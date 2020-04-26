import { func, number, string } from "prop-types";
import { makeStyles } from "@material-ui/styles";
import React from "react";

import pad2Digits from "./pad2Digits";

const useStyles = makeStyles(() => ({
  time: {
    color: ({ color }) => color,
    cursor: "pointer",
    fontWeight: 700,
    fontSize: () => {
      if (window.matchMedia("(min-width: 600px)").matches) {
        return 220;
      } else {
        return 100;
      }
    },
  },
}));

function formatDigitHorloge(seconds) {
  return `${pad2Digits(Math.floor(seconds / 60))}:${pad2Digits(seconds % 60)}`;
}

export default function Horloge({ color, onClick, time }) {
  const classes = useStyles({ color: !time ? "tomato" : color });
  return (
    <code className={classes.time} onClick={onClick}>
      {formatDigitHorloge(time)}
    </code>
  );
}

Horloge.propTypes = {
  color: string,
  onClick: func,
  time: number,
};

Horloge.defaultProps = {
  color: "#000",
  onClick: Function.prototype,
  time: 0,
};
