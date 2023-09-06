import { Fragment } from 'react';
import Counter from './Counter';


function App() {

  return (
    <Fragment>
      <div className='w-screen h-screen bg-black flex flex-row justify-center' >
          <Counter count={0} />
      </div>
    </Fragment>
  );
}

export default App;
