import React, { Component, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CountSeven = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      {counterOn && <CountUp start={0} end={93} duration={5} delay={0} />} %
    </ScrollTrigger>
  );
};

export default CountSeven;
