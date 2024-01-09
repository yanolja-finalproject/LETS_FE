"use client";

import useSignupStateStore from "@/store/useSignupStateStore";
import { useEffect, useState } from "react";

const CertificationCount = () => {
  const signupState = useSignupStateStore();

  const [time, setTime] = useState(5);
  const [fontColor, setFontColor] = useState("");

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (signupState.isCertification) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    if (time === 0) {
      setFontColor("red");
      setTime(5);
      signupState.setIsCertification(false);
    }

    return () => {
      clearInterval(interval);
    };
  }, [time, signupState]);

  const formatTime = (timer: number): string => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes.toString().padStart(2, "0")} : ${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return <div className={`text-${fontColor}`}>{formatTime(time)}</div>;
};

export default CertificationCount;
