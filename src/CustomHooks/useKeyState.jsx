import { useEffect } from 'react'

//*! This is a custom hook, a state that can be reused accross multiple instances of the same component. it accepts the props of key(keycode on keyboard) and action(the callback function). Line 5 is the useEffect hook that is used to handle a side effect, it contains the the logical function and a dependency array at like 18 that will render every update of the DOM element. Line 15 is the cleanup function that is used to cleanup the DOM element after it has been removed or unmount.
export function useKeyState(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action()
        }
      }

      document.addEventListener('keydown', callback)
      return function () {
        document.removeEventListener('keydown', callback)
      }
    },
    [action, key]
  )
}
