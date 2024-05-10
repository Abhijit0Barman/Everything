import { useRef } from 'react'

export const useDebounce = () => {
  let { current: id } = useRef();

  const debounce = (fun) => {
    if (id) {
      clearTimeout(id);
    }

    id = setTimeout(() => {
      fun();
    }, 2000);
  };

  return debounce 
}
