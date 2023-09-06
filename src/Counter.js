import { Fragment, useState } from 'react';


function Counter({count}) {
    const [counter, setCounter] = useState(count)

    const incrementCounter = () => {
        setCounter((x) => x + 1)
    }

    const decrementCounter = () => {
        setCounter((x) => x - 1)
    }

    const resetCounter = () => {
        setCounter((x) => count)
    }

    const changeSign = () => {
        setCounter((x) => x * -1)
    }

    return (
        <Fragment>
            <div className='w-full max-w-2xl mx-auto px-4 py-4 my-auto bg-gray-800 rounded-lg flex flex-col items-center ' >
                <div className='w-1/6 text-center text-3xl text-white my-10 px-5 py-5 bg-slate-700 rounded-lg' >
                    <h3 data-testid="count" >{counter}</h3>
                    </div>
                <div className='flex flex-row justify-center gap-10'>
                    <button className='px-5 py-2 bg-sky-600 hover:bg-sky-500 text-blue-100 rounded-lg' onClick={incrementCounter} >Increment</button>
                    <button className='px-5 py-2 bg-sky-600 hover:bg-sky-500 text-blue-100 rounded-lg' onClick={decrementCounter} >Decrement</button>
                    <button className='px-5 py-2 bg-sky-600 hover:bg-sky-500 text-blue-100 rounded-lg' onClick={resetCounter} >Reset</button>
                    <button className='px-5 py-2 bg-sky-600 hover:bg-sky-500 text-blue-100 rounded-lg' onClick={changeSign} >Switch Sign</button>
                </div>
            </div>
        </Fragment>
    );
}

export default Counter;
