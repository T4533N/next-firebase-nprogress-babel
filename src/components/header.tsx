import React from 'react'

function header() {
  return (
    <div>
      <div className="flex">
        <div className="flex-60 bg-primary-white">
          <h3 className="mt-5 ml-5 z-0 text-2xl font-extrabold">ibj</h3>
        </div>
        <div className="flex-40 flex justify-end bg-primary-black">
          <button
            type="button"
            className="text-black font-semibold bg-white p-3 rounded-lg z-0 mt-5 mr-5"
          >
            0x423234
          </button>
        </div>
      </div>
    </div>
  )
}

export default header
