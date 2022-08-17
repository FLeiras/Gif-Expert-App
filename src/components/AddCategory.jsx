import { useState } from "react";
import PropTypes from "prop-types";

function AddCategory({ onNewCategory, subsCategory }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
  };

  const onSubs = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    subsCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={handleInputChange}
      />
      {
        <div className="btns">
          <button onClick={onSubmit} aria-label="form">
            Buscar
          </button>
          <button onClick={onSubs}>Quitar</button>
        </div>
      }
    </form>
  );
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};

export default AddCategory;
