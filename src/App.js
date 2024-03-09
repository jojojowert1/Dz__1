import React, {useEffect, useState} from "react";
import './index.css'

const Title = ({ text }) =>{
    return <h1>{text}</h1>;
}
const Header = () => {
    return (
        <div>
            <Title text="Header text"/>
        </div>
    )
}

const Content = ()=>{
    return(
        <div>
            <Title text="Content text" />
        </div>
    )
}
const Footer = ()=>{
    return(
        <div>
            <Title text="Footer text" />
        </div>
    )
}


function App() {
    const [value, setValue] = useState(0)
    const [run, setRun] = useState(false)

    useEffect(() => {
        // let intervalId
        if (run) {
             setInterval(() => {
                setValue((count) => count +1)
            },1000)
        }
        // return() => clearInterval(intervalId)
    }, [run])
    const start = () => {
        setRun(true)
    }
    const stop = () => {
        setRun(false)
    }
    const reset = () => {
        setValue(0)
        setRun(false)
    }
  return (
      <div>
          <h1>{value}</h1>
          <button onClick={start}>start</button>
          <button onClick={stop}>stop</button>
          <button onClick={reset}>reset</button>
          <Header/>
          <Content/>
          <Footer/>
      </div>
      )

}
export default App



