import { useEffect, useRef } from 'react';

export const useKeyUpEnter = (callback) => {
  const inputEl = useRef();

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  useEffect(() => {
    const handleKeyUpEnter = async (e) => {
      try {
        if (e.key === 'Enter') {
          await callback();
          inputEl.current.value = '';
        }
        if (e.key === 'Escape') {
          inputEl.current.value = '';
        }
      } catch (err) {
        console.log(err);
      }
    };

    // inputEl.current.addEventListener('keyup', handleKeyUpEnter);
    // return () => inputEl.current.removeEventListener('keyup', handleKeyUpEnter);
    // The ref value 'inputEl.current' will likely have changed by the time this effect cleanup function runs. If this ref points to a node rendered by React, copy 'inputEl.current' to a variable inside the effect, and use that variable in the cleanup function

    const inputElCurrent = inputEl.current;
    if (inputElCurrent) {
      inputElCurrent.addEventListener('keyup', handleKeyUpEnter);
    }

    return () => {
      if (inputElCurrent) {
        inputElCurrent.removeEventListener('keyup', handleKeyUpEnter);
      }
    };
  }, [callback]);

  return inputEl;
};
