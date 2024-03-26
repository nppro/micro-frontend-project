import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string; // Date string in ISO format (e.g., "2024-04-01T00:00:00")
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: ('0' + Math.floor(difference / (1000 * 60 * 60 * 24))).slice(-2),
        hours: ('0' + Math.floor((difference / (1000 * 60 * 60)) % 24)).slice(
          -2
        ),
        minutes: ('0' + Math.floor((difference / 1000 / 60) % 60)).slice(-2),
        seconds: ('0' + Math.floor((difference / 1000) % 60)).slice(-2),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval, index: number) => {
    if (!timeLeft[interval as keyof typeof timeLeft]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval as keyof typeof timeLeft]}
        {index < Object.keys(timeLeft).length - 1 ? ':' : ''}
      </span>
    );
  });

  return (
    <div className=" text-yellow-300 text-5xl font-bold">
      {timerComponents.length ? timerComponents : ''}
    </div>
  );
};

export default Countdown;
