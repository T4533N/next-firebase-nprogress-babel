import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default function Accordion({ btnText, ans }) {
  return (
    <div className="px-4 pt-16">
      <Disclosure>
        {({ open }) => (
          <div
            style={{ background: '#272C36' }}
            className="border border-white rounded-lg transition-accordion duration-300 w-96"
          >
            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-medium text-left text-white rounded-lg">
              <span>{btnText}</span>
              <ChevronUpIcon
                className={`${
                  open ? 'transform rotate-180' : ''
                } w-5 h-5 text-purple-500`}
              />
            </Disclosure.Button>{' '}
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-400 bg-primary-black">
                {ans}
              </Disclosure.Panel>
            </Transition>
          </div>
        )}
      </Disclosure>
    </div>
  )
}
