import Head from "next/head"
import Particles from "components/Particles/Particles"
import SupernovaLogo from "components/SupernovaLogo/SupernovaLogo"

export default function Web() {
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
        <title>Next.js Enterprise Boilerplate</title>
      </Head>
      <section className="bg-traidmark-black dark:bg-gray-900 w-screen h-screen flex items-center justify-center">
        <Particles />
        <SupernovaLogo />
      </section>
    </>
  )
}
