import { useState } from 'react'

import './App.css'

function App() {
  const [selection1, setSelection1] = useState();
  const [selection2, setSelection2] = useState();

  const dummyData = [{name: "Pikachu"},{name: "Pikachu"},{name: "Squirtle"},{name: "Squirtle"},{name: "Charmander"},{name: "Charmander"},{name: "Bulbasaur"},{name: "Bulbasaur"},{name: "Clefairy"},{name: "Clefairy"}]

  const isSelected = (item) => {
    console.log(item);

    if (selection1 == null) {
      item.classList.add('selected');
      setSelection1(item);
      return;
    } else if (selection2 == null) {
      item.classList.add('selected');
      setSelection2(item);
      return;
    } else if (selection1 !== null && selection2 !== null) {
      const selected = document.querySelectorAll('.selected');
      selected.forEach(selectedItem => selectedItem.classList.remove('selected'));
      setSelection1(null);
      setSelection2(null);
      return;
    }
  }

  return (
    <div className={"container"}>
      {
        dummyData.map((pokemon, index)=>{
          return(
            <button onClick={(pokemon) => isSelected(pokemon)}  key={index}>
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
