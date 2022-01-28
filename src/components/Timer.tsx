import React, { useEffect, useRef, useState } from 'react';
import { TTimerArgs } from '../types/TTimerArgs';

const Timer = ({ milliseconds }: TTimerArgs) => {
  const [seconds, setSeconds] = useState(0);
  const ref = useRef<NodeJS.Timer>();

  useEffect(() => {
    ref.current && clearInterval(ref.current);
    ref.current = setInterval(() => setSeconds((s) => s + 1), milliseconds);
  }, [milliseconds]);

  return (
    <div>
      <h4>
        Timer: <small> {seconds} </small>
      </h4>
    </div>
  );
};

export default Timer;
