import { useState } from 'react';

import Navigation from './navigaton';

const App = () => {

  const [open, setOpen] = useState(false);

  const handleSubmit = () => setOpen(true);

  const handleClose = () => setOpen(false);


  return (
    <>
      <button type="button" onClick={handleSubmit} className='button'>
        open modal
      </button>

      <Navigation open={open} handleClose={handleClose}/>
    </>
  )
};

export default App;
