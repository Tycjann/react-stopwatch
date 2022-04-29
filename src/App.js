import Container from './components/Container/Container';
import Display from './components/Display/Display';
import Buttons from './components/Buttons/Buttons';
import { useState, useEffect } from 'react';


function App() {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const start = () => {
    setTimer(
      setInterval(() => {
        setTime(prevValue => prevValue + 1);
      }, 1)
    );
    // ? why do we do clearInterval (timer) now?
    clearInterval(timer);
  };

  const stop = () => {
    clearInterval(timer);
    setTimer(null);
  };

  const reset = () => {
    setTime(0);
  };

  // activates when a component is removed - change page
  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <Container>
      <Display time={time} />
      <Buttons start={start} stop={stop} reset={reset} />
      </Container>
  );
}

export default App;