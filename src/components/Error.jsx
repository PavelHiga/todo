import React from 'react'

const Error = ({ setModalError }) => {
    
    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 w-[100%] flex items-center justify-center bg-black/50 z-10'>
            <div className='block bg-white fixed top-60 px-20 py-10 z-10 text-center'>
                <div className="block">
                    <p className='text-2xl mb-5'>Error: Add note</p>
                    <button onClick={() => setModalError(false)} className='px-10 py-4 rounded-xl bg-green1 hover:opacity-80 active:bg-green2 text-white text-xl'>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Error