import { useEffect, useState } from 'react';
import Cursor from '../components/Cursor';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [cursorIsVisible, setIsVisible] = useState(false)

  const showCursor = () => {
      setIsVisible(true)
  };

  const hidenCursor = (e) => {
      setIsVisible(false)
      e.stopPropagation()
  };

  useEffect(() => {
    document.body.addEventListener("mousemove", showCursor)
    document.body.addEventListener("mouseleave", hidenCursor)
  })

  return (
    <>
      <Component {...pageProps} />
      <Cursor visible={cursorIsVisible}/>
    </>
  )
}

export default MyApp
