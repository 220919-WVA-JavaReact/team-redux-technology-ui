import { useEffect, useState } from 'react'
import { Item } from './models/item';


function App() {
  const [items, setItems] = useState<Item[]>()

  useEffect(() => {
    fetchItems();
  }, [])

  async function fetchItems() {
    try {
        let res = await fetch('http://localhost:8080/items', {
            method: 'GET',
            // credentials: 'include'
        }); // returns a promise of the response, await lets the promise resolve before we try to use it

        if (res.status != 200) {
            console.log('could not connect')
        } else {
            setItems(await res.json());
        }
    } catch (err) {
        console.log('There was an error communicating with the API.');
    }

}

  return (
    <div>
      {items?.map(item => 
      <>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <p>{item.material}</p>
        <p>{item.item_id}</p>
        <hr></hr>
      </>
      )}
    </div>
  )
}

export default App
