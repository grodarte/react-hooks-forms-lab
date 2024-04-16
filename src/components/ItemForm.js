import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("Produce")

  function handleNameChange(e){
    const value = e.target.value

    setName(value)
  }

  function handleCategoryChange(e){
    const value = e.target.value

    setCategory(value)
  }

  function handleSubmit(event){
    event.preventDefault()
    const newItem = {
      id: uuid(),
      name: name,
      category: category
    }
    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={handleCategoryChange}>
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
