/* eslint-disable jsx-a11y/alt-text */
import { FaTwitter, FaDiscord } from 'react-icons/fa'
import TextScrambler from 'react-scramble-text'
import NextImage from 'next/image'
import Tilt from 'react-parallax-tilt'
import CountUp from 'react-countup'
import Accordion from '@components/disclosure'
import Example from '@components/test'
import { useState } from 'react'
import MyModal from '@components/headless-modal'

/* eslint-disable react/button-has-type */
const Redesign = () => {
  const [showBidInput, setShowBidInput] = useState(false)

  const NftCard = ({ title, color, styles }: any) => {
    return (
      <div
        style={{ width: '40%' }}
        className={`flex flex-row items-center px-5 py-4 border border-gray-300 shadow rounded-lg ${styles}`}
      >
        <div className={`${color} rounded-full w-8 h-8`} />

        <p className="ml-4 font-semibold text-primary-black">{title}</p>
      </div>
    )
  }

  const phrases = [`JPEGs`, 'PNGs']

  return (
    <>
      <div className="relative w-full h-full z-50">
        <h3 className="absolute top-8 left-10 text-4xl text-primary-black font-extrabold">
          ibj
        </h3>
        <button
          type="button"
          className="text-primary-black font-semibold bg-white p-3 rounded-lg z-0 absolute top-8 right-8"
        >
          0x423234
        </button>
      </div>

      <div className="flex flex-row w-full">
        <div className="flex-60 bg-primary-white relative">
          {/* <div className="bg-center bg-no-repeat bg-contain object-fill block w-30-rem h-30-rem bg-wojack-think -bottom-6 absolute">
            <div className="absolute text-over-image">
              Imagine buying JPEG lol
            </div>
          </div> */}

          <div className="flex flex-col ml-10 h-full mt-28 space-y-4">
            <h1 className="text-7xl text-primary-black font-extrabold">
              I Buy JPEGS. <br /> I'm not dumb.
            </h1>
            <p className="text-gray-700 text-lg">
              A not so special, ordinary, regular & too simple 100x100 pixel
              onchain nft on <br /> ethereum blockchain which is undoubtedly
              meant to be going to the moon.
            </p>
            <div className="absolute bottom-0 left-0">
              <div className="relative max-w-max">
                <NextImage
                  src="/images/wojack-think (2).png"
                  width={524}
                  height={464}
                />
                <div className="absolute text-over-image">
                  Imagine buying JPEG lol
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-40 flex flex-col items-center justify-center space-y-14 relative bg-primary-black">
          <Tilt
            className="parallax-effect-glare-scale mt-28"
            perspective={800}
            trackOnWindow
            glareEnable
            glareMaxOpacity={0.4}
            scale={1.02}
          >
            <div className="p-8 py-10 w-96 border-solid border-2 border-gray-200 text-white z-0 rounded-lg text-6xl font-extrabold">
              I <br /> Buy <br />
              JPEGs
            </div>
          </Tilt>

          <div className="p-8 w-96 border-solid border-2 border-gray-200 text-white rounded-lg relative force-margin-bottom space-y-7">
            <div className="text-primary-black font-semibold bg-white max-w-max p-3 rounded-full absolute -top-6 left-0 right-0 ml-auto mr-auto">
              @taseen
            </div>
            <div>
              <p className="text-gray-400 text-sm text-center">Highest Bid</p>
              <div className="font-bold text-3xl flex flex-col justify-between items-center mt-3">
                <CountUp
                  start={-175.039}
                  end={5000}
                  duration={4.75}
                  suffix="ETH"
                />{' '}
                <CountUp
                  className="text-lg text-gray-400"
                  start={-175.039}
                  end={600}
                  duration={4.75}
                  prefix="$"
                />
              </div>
            </div>
            <hr className="border border-gray-600 border-solid w-full" />
            {showBidInput ? (
              <div className="text-gray-400">
                <div className="bg-black flex flex-row rounded-2xl">
                  <input className="w-full rounded-2xl" />
                  <button className="p-4">Bid</button>
                </div>
                <p className="mt-2">Not Enough Balance</p>
                <hr className="border border-gray-600 border-solid w-full my-4" />
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-row justify-between items-center w-full">
                    <p>Weth Balance</p>
                    <p className="text-white">0.85 ETH</p>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full">
                    <p>Eth Balance</p>
                    <p className="text-white">1.60 ETH</p>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full">
                    <p>Bid Value</p>
                    <p className="text-white">$5345</p>
                  </div>
                  <button
                    onClick={() => {
                      setShowBidInput(false)
                    }}
                    type="button"
                    className="text-center mt-5"
                  >
                    cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-row justify-between">
                <button
                  onClick={() => {
                    setShowBidInput(true)
                  }}
                  className="text-primary-black font-semibold bg-white p-3 rounded-lg"
                >
                  Place Bid
                </button>
                {/* <MyModal /> */}

                <button className="font-semibold">View Artwork</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-primary-black">
        <h1 className="text-4xl font-extrabold mb-16 pt-20 text-center text-white flex flex-row justify-center items-center">
          <p className="pr-4">Most Expensive</p>
          <TextScrambler phrases={phrases} speed={100} pauseTime={800} />
          <p className="pl-4">soo far </p>
        </h1>
        <div className="space-y-7 flex flex-col justify-center items-center w-full pb-20">
          <NftCard
            color="bg-gray-400"
            title="IBJ - I Buy JPEGs > ($69.3 Million)"
            styles="bg-gray-200"
          />
          <NftCard
            styles="bg-red-200 border-red-500 "
            title="CryptoPunk #9998 - ($500,000,000)"
            color="bg-red-500"
          />
          <NftCard
            styles="bg-white"
            title="Everydays - The First 5000 Days - ($69.3 Million)"
            color="bg-blue-300"
          />
        </div>
      </div>

      <div className="bg-primary-white text-primary-black">
        <h1 className="text-4xl font-extrabold mb-6 pt-20 text-center">
          Passing Along the good vibes
        </h1>

        <div className="flex justify-center items-center w-full">
          <div className="z-50 relative ">
            <NextImage src="/images/frame.png" width={849} height={573} />
            <p className="w-96 text-center absolute top-1/2 left-1/2 center-translate text-gray-600">
              More than half of what we will get from the first bid will be
              donated to fight global climate change and to save our beloved
              mother earth. Moreover, If first bid crosses $100M, we will spend
              $50M to solve 50 different problems in 50 poorest countries around
              the world. Starting from the next bids, the owner wil be able to
              donate directly via our site also mentioning the cause. It’s not
              the jpegs, its about making the world a better place.
            </p>
          </div>
          {/* <div className="bg-center bg-no-repeat bg-contain object-fill block z-50 relative bg-flower-frame w-39-rem h-32-rem">
            <p className="w-96 text-center absolute top-1/2 left-1/2 center-translate text-gray-600">
              More than half of what we will get from the first bid will be
              donated to fight global climate change and to save our beloved
              mother earth. Moreover, If first bid crosses $100M, we will spend
              $50M to solve 50 different problems in 50 poorest countries around
              the world. Starting from the next bids, the owner wil be able to
              donate directly via our site also mentioning the cause. It’s not
              the jpegs, its about making the world a better place.
            </p>
          </div> */}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-primary-black text-white">
        <h1 className="text-4xl font-extrabold mb-6 pt-20 text-center">FAQ</h1>
        <Example />
      </div>
      <div className="bg-primary-black flex flex-col justify-center items-center py-12 text-white space-y-3">
        <div className="flex flex-row">
          <FaTwitter className="h-6 w-6 mr-3" />
          <FaDiscord className="h-6 w-6" />
        </div>
        <div className="flex flex-row justify-between items-center w-1/6 text-gray-500">
          <div className="text-white">About</div>•
          <div className="text-white">Contact</div>•
          <div className="text-white">FAQ</div>
        </div>
        <p className="text-gray-500 text-sm">IBJ 2021 © ALL RIGHTS RESERVED.</p>
      </div>
    </>
  )
}

export default Redesign
