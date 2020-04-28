import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";

import EmojiButton from "./EmojiButton";
import Horloge from "./Horloge";
import nextItem from "./nextItem";
import ThemeButton from "./ThemeButton";
import ThemeProvider from "./ThemeProvider";
import sessions from "./sessions";
import useTimer from "./useTimer";
import useAlarm from "./useAlarm";

const useStyles = makeStyles(() => ({
  root: {
    alignItems: "center",
    backgroundColor: ({ theme }) => (theme === "light" ? "white" : "black"),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "100vh",
    width: "100%",
  },
  header: {
    marginBottom: 16,
    minHeight: 36,
    width: "100%",
    color: "inherit",
  },
  toolbar: {
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-end",
    padding: 16,
  },
  content: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "center",
    width: "100%",
  },
}));

const initType = "work";

export default function App() {
  const [theme, setTheme] = useState("light");
  const classes = useStyles({ theme });
  const [muted, setMuted] = useState(false);
  const [type, setType] = useState(initType);
  const [emoji, setEmoji] = useState(initType);
  const [setVolume, play, stop] = useAlarm();
  const timer = useTimer(sessions[type].duration, play);

  function onToggleSound() {
    const nextMuted = !muted;
    setMuted(nextMuted);
    setVolume(nextMuted ? 0 : 1);
  }

  function onChangeEmoji() {
    setEmoji(nextItem(emoji, sessions[type].emojis));
  }

  function onNewSession() {
    stop();
    const nextType = nextItem(type, Object.keys(sessions));
    setEmoji(nextType);
    setMuted(false);
    setType(nextType);
  }

  function onToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeProvider value={theme}>
      <div className={classes.root}>
        <header className={classes.header}>
          <div className={classes.toolbar}>
            <ThemeButton onClick={onToggleTheme} />
            <EmojiButton
              emoji={muted ? "🔕" : "🔔"}
              label="Toggle sound"
              onClick={onToggleSound}
            />
          </div>
        </header>
        <main className={classes.content}>
          <Horloge
            time={timer}
            onClick={onNewSession}
            color={sessions[type].color}
          />
          <EmojiButton emoji={emoji} onClick={onChangeEmoji} size="large" />
        </main>
      </div>
    </ThemeProvider>
  );
}
