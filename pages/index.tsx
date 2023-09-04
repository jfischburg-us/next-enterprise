import React, { useState } from 'react';
import Head from "next/head"
import Particles from "components/Particles/Particles"
import SupernovaLogo from "components/SupernovaLogo/SupernovaLogo"
import HamburgerMenu from "components/HamburgerMenu/HamburgerMenu"

export default function Web() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    </>
  )
}
