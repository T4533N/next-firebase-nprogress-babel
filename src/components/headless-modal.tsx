import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
    // document.body.style.overflow = 'unset'
  }

  function openModal() {
    setIsOpen(true)
    // document.body.style.overflow = 'hidden'
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="text-black font-semibold bg-white p-3 rounded-lg"
        >
          Place Bid
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-700 bg-opacity-50 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle overflow-hidden"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="text-gray-700 border-2 border-gray-800 inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h2"
                  className="text-4xl font-bold leading-6 text-primary-black"
                >
                  Place a bid
                </Dialog.Title>
                <div className="mt-4 text-gray-700">
                  You must bid at least <b>3.634 ETH</b>
                </div>
                <div className="mt-6">
                  <input
                    className="border-2 border-gray-300 bg-gray-200 focus:bg-gray-50 focus:border-gray-800 transition h-12 p-4 rounded-xl focus:outline-none w-full"
                    placeholder="Amount"
                  />
                  <p className="mt-2 font-bold text-gray-500">$0.00</p>
                </div>

                <hr className="border border-gray-100 border-solid w-full my-4" />

                <div>
                  <div className="flex flex-row justify-between items-center text-gray-700">
                    <p>Eth Balance</p>
                    <p className="font-bold">0.23423 ETH</p>
                  </div>
                  <div className="flex flex-row justify-between items-center text-gray-700">
                    <p>Weth Balance</p>
                    <p className="font-bold">0.923 ETH</p>
                  </div>
                </div>

                <div className="mt-4 space-y-4">
                  <button
                    type="button"
                    className="inline-flex w-full bg-gray-800 justify-center px-4 py-2 font-medium text-white rounded-md"
                    onClick={closeModal}
                  >
                    Bid
                  </button>
                  <p className="text-center text-gray-500">Not Enough Funds</p>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
