import Layout from '@components/layout'
import { FC } from 'react'
// import Accordion from '@components/disclosure'
// import MyModal from '@components/headless-modal'
import Image from 'next/image'

const Home: FC = () => {
  return (
    <Layout
      title="Tailwindcss | Typescript"
      className="bg-gray-50 h-screen relative"
    >
      {/* <MyModal />
      <div className="h-screen" />
      sdlfjasfd
      <div className="h-screen" /> */}
      {/* <div className="relative max-w-max h-full"> */}
      <div className="absolute bottom-0 left-0">
        <Image src="/images/smile-without-cloud.png" width={299} height={245} />

        <div className="absolute -top-56 -right-56">
          <Image src="/images/upper-cloud.png" width={332} height={254} />
        </div>
      </div>

      {/* 
      <div className="h-screen">bhai re bhai</div>

      <div className="flex flex-col justify-center items-center">
        <div className="ml-96">
          <Image src="/images/upper-cloud.png" width={332} height={254} />
        </div>
        <Image src="/images/smile-without-cloud.png" width={299} height={245} />
      </div> */}

      {/* <div className="absolute text-over-image">Imagine buying JPEG lol</div> */}
      {/* <div className="bg-center bg-no-repeat bg-contain object-fill block w-30-rem h-30-rem bg-wojack-think -bottom-6 absolute">
      </div> */}
    </Layout>
  )
}

export default Home
