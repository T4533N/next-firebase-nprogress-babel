import Layout from '@components/layout'
import { FC } from 'react'

const Home: FC = () => {
  return (
    <Layout
      title="Tailwindcss | Typescript"
      className="flex h-screen justify-center items-center bg-gray-50 flex-col overflow-hidden"
    >
      <h1 className="text-5xl font-bold pb-10">Template includes:</h1>
      <div className="text-4xl flex flex-col">
        <ul className="list-disc">
          <li className="text-gray-700">NextJS</li>
          <li className="text-blue-500">Typescript</li>
          <li className="text-purple-500"> TailwindCSS</li>
          <li className="text-yellow-500"> Next Seo</li>
          <li className="text-green-500"> Eslint </li>
          <li className="text-pink-500"> Prettier </li>
          <li className="text-red-500"> Custom Babel & Next config </li>
        </ul>
      </div>
    </Layout>
  )
}

export default Home
