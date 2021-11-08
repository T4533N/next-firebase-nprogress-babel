import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default function Example() {
  const FaqSection = ({ ques, ans, marginTop }: any) => {
    return (
      <Disclosure as={marginTop && 'div'} className={`${marginTop && 'mt-2'}`}>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 font-medium text-left text-primary-black bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
              <span>{ques}</span>
              <ChevronUpIcon
                className={`${
                  open ? 'transform rotate-180' : ''
                } w-5 h-5 text-gray-700`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500">
              {ans}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    )
  }

  return (
    <div className="w-full px-4 pt-5">
      <div className="w-full max-w-md p-2 mx-auto bg-white rounded-2xl">
        <FaqSection
          ques="Is IBJ smart contract ERC721 compatible?"
          ans="No, the smart contracts of IBJ aren't ERC721 compatible or simply an
          NFT smart contract. Rather we have hardcoded the token and its ipfs
          metadata to make smart contract match the fame of IBJ. Despite of not
          being an ERC721 compatible contract, it will work almost identically."
        />
        <FaqSection
          marginTop
          ques="How to retain token data?"
          ans="Like every other standard ERC721 smart contract out there, token data 
          can be accessed via getNFT function and will be available to anyone on 
          the ethereum network. Since getNFT function is a view call, it won't 
          cost any gas fees at all."
        />
        <FaqSection
          marginTop
          ques="Where are the metadata stored?"
          ans="To make sure that IBJ is easily viewable on all other NFT 
          platforms, we also expose a standard ERC721-Metadata compliant `tokenURI`
           function. This tokenURI function returns a URL to our server, which 
           responds with metadata about the nft (including an SVG image)."
        />
      </div>
    </div>
  )
}
