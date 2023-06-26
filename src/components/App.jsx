import { useState } from "react"
import "../index.scss"
import Item from '../components/Item'
import Time from "../components/Time"
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../redux/todoSlice'
import Error from "../components/Error"
import { remove, complete, removeAll } from '../redux/todoSlice'

const App = () => {

    const dispatch = useDispatch()
    const todoItem = useSelector((state) => state.todo)
    const [modalError, setModalError] = useState(false)
    const [modal, setModal] = useState(false)
    const [text, setText] = useState('')

    return (
        <>
            {modalError && <Error setModalError={setModalError} />}
            <div className='w-[430px] xl:w-[390px] min-h-[630px]  mx-auto mt-20 border-2 border-cyan-600 bg-white rounded-xl'>
                <div className="relative text-white ">
                    <Time />
                    <img src="./assets/img.svg" alt="img" />
                </div>
                <div className="w-[370px] mx-auto">
                    <div className="flex justify-between items-center mt-6 mb-9">
                        <input
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            maxLength="20"
                            className=' w-[260px] h-[55px] bg-gray-200 py-4 pl-5 rounded-lg text-xl focus:ring-gray-400 focus:outline-none focus:ring-2'
                            placeholder='Note'
                            type="text"
                        />
                        <div className="flex relative gap-x-0.5">
                            <button
                                onClick={() => (text == '') ? setModalError(!modalError) : dispatch(add({ text })) & setText('')}
                                className='px-6 py-5 rounded-l-lg bg-green1 hover:opacity-80 active:bg-green2'
                            >
                                <img className='w-4 h-4' src="./assets/Vector.svg" alt="" />
                            </button>
                            <button
                                onClick={() => setModal(!modal)}
                                className=' px-2 py-5 rounded-r-lg bg-green1 hover:opacity-80 active:bg-green2'>
                                <img className='w-3 h-3' src="./assets/arrow.svg" alt="" />
                            </button>
                            {modal && <button
                                onClick={() => dispatch(removeAll()) & setModal(false)}
                                className='absolute w-28 z-1 right-0 top-14 rounded-lg text-center py-2 bg-red-400 text-white'
                            >
                                Remove all
                            </button>}
                        </div>
                    </div>
                    {todoItem && todoItem.map((value, index) => (
                        <Item
                            complete={complete}
                            remove={remove}
                            text={text}
                            dispatch={dispatch}
                            index={index}
                            key={index}
                            value={value}
                        />))}
                </div>
            </div>
        </>
    )
}

export default App