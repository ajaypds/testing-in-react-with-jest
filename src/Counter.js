import { Fragment, useState } from 'react';


function Counter() {
    const [counter, setCounter] = useState(0)

    const incrementCounter = () => {
        setCounter((x) => x + 1)
    }

    const decrementCounter = () => {
        setCounter((x) => x - 1)
    }

    const resetCounter = () => {
        setCounter((x) => 0)
    }

    const changeSign = () => {
        setCounter((x) => x * -1)
    }

    return (
        <Fragment>
            <div className='w-full max-w-2xl mx-auto px-4 py-4 my-auto bg-gray-800 rounded-lg flex flex-col items-center ' >
                <div className='w-1/4 text-center text-3xl text-white my-10 px-5 py-5 bg-slate-700 rounded-lg' >{counter}</div>
                <div className='flex flex-row justify-center gap-10'>
                    <button className='px-5 py-2 bg-sky-600 hover:bg-sky-500 text-blue-100 rounded-lg' onClick={incrementCounter} >Increment</button>
                    <button className='px-5 py-2 bg-sky-600 hover:bg-sky-500 text-blue-100 rounded-lg' onClick={decrementCounter} >Decrement</button>
                    <button className='px-5 py-2 bg-sky-600 hover:bg-sky-500 text-blue-100 rounded-lg' onClick={resetCounter} >Reset</button>
                    <button className='px-5 py-2 bg-sky-600 hover:bg-sky-500 text-blue-100 rounded-lg' onClick={changeSign} >Invert Sign</button>
                </div>
            </div>
        </Fragment>
    );
}

export default Counter;
