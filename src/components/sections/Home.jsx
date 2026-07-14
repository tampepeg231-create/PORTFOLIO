import { useRef, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import profilePic from "../../assets/profile.png";
import songFile from "../../assets/song.mp3.wav";

export const Home = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePhotoClick = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 z-10 px-4">
          <img
            src={profilePic}
            alt="Gilbert"
            onClick={handlePhotoClick}
            className={`w-48 h-48 md:w-72 md:h-72 rounded-full object-cover border-2 border-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.4)] flex-shrink-0 cursor-pointer transition-transform hover:scale-105 ${
              isPlaying ? "animate-pulse" : ""
            }`}
          />

          {/* onEnded resets isPlaying so a second tap restarts it correctly */}
          <audio ref={audioRef} src={songFile} onEnded={() => setIsPlaying(false)} />

          <div className="text-center md:text-left max-w-lg">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
              Hi, I'm Gilbert
            </h1>
            <p className="tex-gray-400 text-lg mb-8">
              I'm a Student who loves learning new knowledge. My goal is to build solutions that offer both
              exceptional performance and a delightful user experience.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
