import { func, number, string } from "prop-types";
import { makeStyles } from "@material-ui/styles";
import React from "react";

import pad2Digits from "./pad2Digits";

const useStyles = makeStyles(() => ({
  time: {
    color: ({ color }) => color,
    cursor: "pointer",
    fontSize: () => {
      if (window.matchMedia("(min-width: 600px)").matches) {
        return 220;
      } else {
        return 100;
      }
    },
  },
  hours: {
    fontWeight: 700,
  },
}));

export default function Horloge({ color, onClick, time }) {
  const classes = useStyles({ color: !time ? "#d50c42" : color });
  return (
    <code className={classes.time} onClick={onClick}>
      <span className={classes.hours}>{pad2Digits(Math.floor(time / 60))}</span>
      :{pad2Digits(time % 60)}
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
