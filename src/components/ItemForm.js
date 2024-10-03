import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [newItem, setNewItem] = useState({
    name: "",
    category: "Produce"
  })

  function handleChange(event){
    const name = event.target.name
    const value = event.target.value

    setNewItem({
      ...newItem,
      [name]: value
    })
  }

  return (
    <form className="NewItem" onSubmit={event => {
      event.preventDefault()

      const myNewItem = {
        id: uuid(),
        ...newItem
      }
      onItemFormSubmit(myNewItem)
      }}>
      <label>
        Name:
        <input type="text" name="name" value={newItem.name} onChange={handleChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={newItem.category} onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
