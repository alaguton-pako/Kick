"use client";
import { useEffect, useState } from "react";
import AutoDetection from "@/components/AutoDetection";
import WelcomeScreen from "@/components/WelcomeScreen";

export default function Home() {
  const [stage, setStage] = useState("splash");

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setStage("detect");

      const detectTimer = setTimeout(() => {
        setStage("welcome");
      }, 3000);

      return () => clearTimeout(detectTimer);
    }, 3000);

    return () => clearTimeout(splashTimer);
  }, []);

  if (stage === "splash") {
    return (
      <div className="h-screen w-screen bg-cover bg-center bg-[url('/splashMobile.png')] md:bg-[url('/splashDesktop.png')]" />
    );
  }

  if (stage === "detect") {
    return <AutoDetection />;
  }

  return <WelcomeScreen />;
}
