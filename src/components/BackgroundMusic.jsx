import { forwardRef } from "react";

const BackgroundMusic = forwardRef((props, ref) => {
  return (
    <audio ref={ref} loop>
      <source src="/music/unnakul-nanne.mp3" type="audio/mpeg" />
    </audio>
  );
});

export default BackgroundMusic;
