import { Link, useLoaderData } from 'react-router-dom';
import './style.css';

export default function Items() {
    const { items } = [{ id: 1, name: "Target"}] //useLoaderData();
  
    return (
      <>
            <h1>{"Target"} Items</h1>
        <div className='card'>
          { [{_id: 1, name: "Soap"}].map((item) => (
            <Link to={`items/${item._id}`}><h1 className="label-font">{item.name}</h1></Link>
          ))}
            </div>
            <Link to={'items/new'}>Add Item</Link>

      </>
    );
  }
  
  async function fetchItems() {
    /*const response = await fetch("http://localhost:3000/stores/${params.store_id}/items");
    return await response.json();*/
    return null
  }
  
  export { fetchItems };