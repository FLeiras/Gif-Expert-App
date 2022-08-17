import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

function GifExpertApp() {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  const subsCategory = (deleteCategory) => {
    if (categories.includes(deleteCategory)) {
      setCategories([]);
    }
  };

  return (
    <div className="container">
      <h1 className="title_principal">GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} subsCategory={subsCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
}

export default GifExpertApp;
