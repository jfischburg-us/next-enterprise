import React, { useState, useEffect } from 'react';
import Head from "next/head"
import Particles from "components/Particles/Particles"
import SupernovaLogo from "components/SupernovaLogo/SupernovaLogo"
import HamburgerMenu from "components/HamburgerMenu/HamburgerMenu"
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';

export default function Web() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audioElement = document.getElementById('background-audio') as HTMLAudioElement;
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audioElement = document.getElementById('background-audio') as HTMLAudioElement;
    const playAudio = () => {
      audioElement.play();
      setIsPlaying(true);
      document.removeEventListener('click', playAudio);
    };

    document.addEventListener('click', playAudio);
    return () => {
      document.removeEventListener('click', playAudio);
    };
  }, []);

  return (
    <>
      <Head>
        <meta property="og:url" content="https://next-enterprise.vercel.app/" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>trAIdemark: AI Value Creation Agency</title>
      </Head>
      <section className="bg-oscillate w-screen h-screen flex items-center justify-center relative overflow-hidden">
        <Particles />
        {!isMenuOpen && <SupernovaLogo />}
        <HamburgerMenu onMenuToggle={setIsMenuOpen} />
      </section>
      <audio id="background-audio" src="/theme1.mp3" controls preload="auto" controlsList="nodownload">
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <button onClick={togglePlay} className="fixed bottom-4 right-4 z-50">
        {isPlaying ? <FaPauseCircle size={48} color="white" /> : <FaPlayCircle size={48} color="white" />}
      </button>
    </>
  )
}
