import { useState } from 'react'

import './App.css'

function App() {
  const [selection1, setSelection1] = useState();
  const [selection2, setSelection2] = useState();

  const dummyData = [{name: "Pikachu"},{name: "Pikachu"},{name: "Pikachu"},{name: "Pikachu"},{name: "Pikachu"},{name: "Pikachu"},{name: "Pikachu"},{name: "Pikachu"},{name: "Pikachu"},{name: "Pikachu"}]

  const isSelected = (item) => {
    item.className
  }

  return (
    <div className={"container"}>
      {
        dummyData.map((pokemon, index)=>{
          return(
            <button onClick={isSelected}  index={index}>
              <div className={"item"}>
                {pokemon.name}
              </div>
            </button>
          )
        })
      }
      
    </div>
  )
}

export default App
