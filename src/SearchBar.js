import React, {useState} from "react";

const SearchBar = ({search}) => {
  const [formData, setFormData] = useState("");

  const submitHandler = (evt) => {
    evt.preventDefault();
    search(formData);
  }

  const handleChangeSearchTerm = (evt) => {
    setFormData(evt.target.value);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type='text' value={formData} onChange={handleChangeSearchTerm} placeholder="Enter search term..."></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchBar;