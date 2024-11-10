import Head from 'next/head'
import Body from '@components/Home'
// import ogImage from '@public/assets/images/og_image.png'

export default function Home() {
  return (
    <>
      {/** META */}
      <Head>
        <title>SCR1M - 스크림, 내전, 밴픽은 스크림</title>
        {/* <meta property="og:title" content="써밋 - 올인원 AI 폼 서비스" />
        <meta property="og:description" content="써밋은 언제 어디서나 응답 폼을 만들고, 데이터를 수집하고 분석하여 리포트를 만들어주는 가장 좋은 고객조사 툴입니다." />
        <meta property="og:image" content={ogImage.src} alt='써밋 - 올인원 AI 폼 서비스' />
        <meta property="og:url" content="https://submit.studio" /> */}
      </Head>
      <Body />
    </>
  )
}
