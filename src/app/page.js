"use client";
import { useEffect, useState } from "react";
import AutoDetection from "@/components/AutoDetection";
import WelcomeScreen from "@/components/WelcomeScreen";

export default function Home() {
  const [stage, setStage] = useState("splash");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkDevice();

    const splashTimer = setTimeout(() => {
      setStage("detect");

      // Set welcome timer only after entering detect stage
      const detectTimer = setTimeout(() => setStage("welcome"), 3000);
      return () => clearTimeout(detectTimer);
    }, 3000);

    window.addEventListener("resize", checkDevice);
    return () => {
      clearTimeout(splashTimer);
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  if (stage === "splash") {
    return (
      <div
        className="h-screen w-screen bg-cover bg-center"
        style={{
          backgroundImage: isMobile
            ? "url('/splashMobile.png')"
            : "url('/splashDesktop.png')",
        }}
      />
    );
  }

  if (stage === "detect") {
    return <AutoDetection />;
  }
  return <WelcomeScreen />;
}
