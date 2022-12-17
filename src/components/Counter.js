import {useState} from "react"
import Button from "./Button"

function Counter (props){
      // let count = 0
  const [count, setCount] = useState(0)
  console.log(count)


  function countUp(){
    setCount(count+1)
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={countUp}>Add One</button>
      <Button label="+1" click={countUp}/>
    </div>
  );
}

export default Counter