import { useCallback, useState } from 'react';

import Navigation from './navigaton';

import { ThemeProvider } from './context';

const App = () => {

  const [id, setId] = useState(null);

  const [open, setOpen] = useState(false);

  const handleSubmit = (id) => {
    setOpen(true);
    setId(id)
  }

  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <ThemeProvider>
      <button type="button" onClick={() => handleSubmit(id)} className='button'>
        open modal
      </button>

      <Navigation open={open} handleClose={handleClose} />
    </ThemeProvider>
  )
};

export default App;
