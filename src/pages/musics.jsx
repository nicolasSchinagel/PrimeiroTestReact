import React, { useState, useRef, useEffect } from "react";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import asIfYourLast from "/assets/asIfYourLast.png";
import dduddu from "/assets/dduddu.png";
import jump from "/assets/jump.png";
import killThisLove from "/assets/killThisLove.png";
import pinkVenom from "/assets/pinkVenom.jpg";
import prettySavage from "/assets/prettySavage.jpg";
import playIcon from "/assets/playIcon.png";
import pauseIcon from "/assets/pauseIcon.png";

// músicas (adicione os src corretos para os outros mp3)
import musicps from "/music/prettySavage.mp3";
import musicktl from "/music/killThisLove.mp3";

function Musics() {
  // lista de músicas
  const tracks = [
    { title: "As if it’s your last", image: asIfYourLast, src: "/assets/music/asIfYourLast.mp3" },
    { title: "Ddu-du ddu-du", image: dduddu, src: "/assets/music/dduddu.mp3" },
    { title: "Jump", image: jump, src: "/assets/music/jump.mp3" },
    { title: "Kill this love", image: killThisLove, src: musicktl },
    { title: "Pink Venom", image: pinkVenom, src: "/assets/music/pinkVenom.mp3" },
    { title: "Pretty Savage", image: prettySavage, src: musicps }
  ];

  // estados
  const [currentTrack, setCurrentTrack] = useState(null); // índice da música atual
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);

  // efeito para atualizar tempo e duração
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setAudioCurrentTime(audio.currentTime);
    const handleLoaded = () => setDuration(audio.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      setAudioCurrentTime(0);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoaded);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoaded);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  // trocar faixa
  const handleSelectTrack = (index) => {
    const audio = audioRef.current;

    if (currentTrack === index) {
      // clicou na mesma música → só dar play/pause
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play();
        setIsPlaying(true);
      }
    } else {
      // trocou de música
      setCurrentTrack(index);
      audio.src = tracks[index].src;
      audio.play();
      setIsPlaying(true);
    }
  };

  // clicar na barra de progresso
  const handleSeek = (e) => {
    const audio = audioRef.current;
    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left; // posição do clique
    const width = rect.width;
    const percent = clickX / width;
    audio.currentTime = percent * duration;
  };

  // formatar tempo em mm:ss
  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  };

  return (
    <section>
      <Header />
      <section className="flex flex-col bg-black text-black w-full min-h-[800px] p-8 items-center gap-[70px]">
        <h1 className="text-[40px] text-pink-300 uppercase font-extrabold tracking-wider">Playlist de Músicas</h1>
        <ol className="flex flex-col gap-[35px] w-full items-center">
          {tracks.map((track, index) => {
            const isActive = currentTrack === index;
            const progressPercent = isActive && duration ? (audioCurrentTime / duration) * 100 : 0;

            return (
              <li key={index} className="bg-pink-300 w-[80%] rounded-[15px] p-5 h-[130px] flex gap-[20px]">
                <img src={track.image} className="w-[90px] h-full rounded-[4px]" />
                <div className="flex flex-col gap-[5px] w-[85%]">
                  <div className="flex flex-row justify-between">
                    <h2 className="font-wide font-bold text-[25px]">{track.title}</h2>
                    {isActive && (
                      <h2 className="text-[20px] font-bold">
                        {formatTime(audioCurrentTime)} / {formatTime(duration)}
                      </h2>
                    )}
                  </div>
                  <div className="flex flex-row gap-[10px] items-center">
                    <div
                      className="bg-black w-[900px] h-[5px] rounded-[5px] overflow-hidden flex items-center justify-left cursor-pointer"
                      onClick={isActive ? handleSeek : undefined}
                    >
                      <div
                        className="bg-white h-[5px]"
                        style={{ width: `${progressPercent}%` }}
                      ></div>
                    </div>
                    <img
                      src={isActive && isPlaying ? pauseIcon : playIcon}
                      className="w-[50px] h-[50px] cursor-pointer"
                      onClick={() => handleSelectTrack(index)}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
      <audio ref={audioRef}></audio>
      <Footer/>
    </section>
  );
}

export default Musics;