import React from "react";

function MyTimer(props) {
  const myTimer = time => {
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((time / 60) % 60)
      .toString()
      .padStart(2, "0");
    const hours = Math.floor((time / (60 * 60)) % 60)
      .toString()
      .padStart(2, "0");
    // console.log(`${hours}:${minutes}:${seconds} `);
    return `${hours}:${minutes}:${seconds} `;
  };
  return (
    <div className="container">
      <p className="timer-container">{myTimer(props.time)}</p>
      <p className="timer-label">Hours Minutes Seconds</p>
    </div>
  );
}

export default MyTimer;
