import React from 'react'
import { useEffect, useState } from 'react'

const Time = () => {

    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 10000);
    }, []);
    
    return (
        <div className='clock text-5xl absolute bottom-0 right-0 mb-4 mr-6'>
            <p className='text-2xl text-right'>
                {' '}
                {dateState.toLocaleDateString('en-GB', {
                    day: 'numeric',
                    weekday: 'short',
                })}
            </p>
            <p>
                {dateState.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                })}
            </p>
        </div>
    )
}

export default Time