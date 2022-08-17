import useFetchGifs from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";
import PropTypes from "prop-types";

function GifGrid({ category }) {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
