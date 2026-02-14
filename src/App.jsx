import React, { useState, useRef } from "react";
import Screen from "./components/Screen";
import Card from "./components/Card";
import Progress from "./components/Progress";
import FinalMessage from "./components/FinalMessage";
import BackgroundMusic from "./components/BackgroundMusic";
import Hearts from "./components/Hearts";

export default function App() {
  const [step, setStep] = useState(0);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const audioRef = useRef(null);

  const steps = [
    "Hey… I made something small for you.❤️",
    "You have a calm presence that feels peaceful.🥰",
    "That shy smile of yours is honestly beautiful.🫣",
    "There’s something I wanted to ask you…🙄🙄",
  ];

  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.6;
      audioRef.current.play().catch(() => {});
    }
  };

  const moveNoButton = () => {
    setNoPos({
      x: Math.random() * 140 - 70,
      y: Math.random() * 100 - 50,
    });
  };

  if (step === steps.length) {
    return (
      <>
        <BackgroundMusic ref={audioRef} />
        <Hearts />
        <FinalMessage />
      </>
    );
  }

  return (
    <>
      <BackgroundMusic ref={audioRef} />
      <Hearts />

      <Screen>
        <Progress current={step} total={steps.length} />

        <Card text={steps[step]}>
          {step < steps.length - 1 ? (
            <button
              className="primary"
              onClick={() => {
                startMusic();       // 🔥 MUSIC STARTS HERE
                setStep(step + 1);
              }}
            >
              Continue
            </button>
          ) : (
            <div className="buttons">
              <button
                className="primary"
                onClick={() => setStep(steps.length)}
              >
                Yes
              </button>

              <button
                className="secondary moving"
                onMouseEnter={moveNoButton}
                style={{
                  transform: `translate(${noPos.x}px, ${noPos.y}px)`,
                }}
              >
                No
              </button>
            </div>
          )}
        </Card>
      </Screen>
    </>
  );
}
