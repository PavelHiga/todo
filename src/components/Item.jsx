import React from 'react'

const Item = ({ value, index, remove, dispatch, complete }) => {
    
    return (
        <div className="flex justify-between items-center w-[350px] m-auto mt-6 mb-8">
            <div>
                <div className={`text-xl ${value.comp ? '' : 'line-through'}`}>
                    <div className="mb-0.5">{value.text}</div>
                </div>
                <div className="flex gap-x-1 text-xs text-gray-500 ">
                    <div>{value.date.dateDay}</div>
                    at
                    <div>{value.date.dateTime}</div>
                </div>
            </div>
            <div className="flex gap-x-3.5 ">
                <img
                    onClick={() => dispatch(complete(index))}
                    className='h-7 w-7'
                    src={value.comp ? '/src/assets/circle.svg' : '/src/assets/check.svg'} alt=""
                />
                <img
                    onClick={() => dispatch(remove(index))}
                    className='w-7 h-7 cursor-pointer'
                    src="/src/assets/trash.svg" alt=""
                />
            </div>
        </div>
    )
}

export default Item