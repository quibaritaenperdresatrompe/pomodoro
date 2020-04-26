import { useCallback, useEffect, useState } from "react";

function createOscillator(audioContext, volume = 1) {
  const gainNode = audioContext.createGain();
  gainNode.gain.value = volume;

  const oscillator = audioContext.createOscillator();
  oscillator.type = "sine";
  oscillator.frequency.value = 261.6;
  oscillator.detune.value = 0;
  oscillator.connect(gainNode);

  gainNode.connect(audioContext.destination);

  return [oscillator, gainNode];
}

export default function useAlarm() {
  const [audioContext, setAudioContext] = useState(null);
  const [gainNode, setGainNode] = useState(null);
  const [oscillator, setOscillator] = useState(null);

  useEffect(() => {
    const AudioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    setAudioContext(AudioContext);
  }, []);

  const setVolume = useCallback(
    (volume) => {
      if (gainNode) gainNode.gain.value = volume;
    },
    [gainNode]
  );

  const stop = useCallback(() => {
    if (oscillator) {
      oscillator.stop();
      setOscillator();
    }
  }, [oscillator]);

  const play = useCallback(
    (volume) => {
      const [Oscillator, GainNode] = createOscillator(audioContext, volume);
      Oscillator.start();
      setGainNode(GainNode);
      setOscillator(Oscillator);
    },
    [audioContext]
  );

  return [setVolume, play, stop];
}
