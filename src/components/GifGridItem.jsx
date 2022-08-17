import PropTypes from "prop-types";

function GifGridItem({ title, url, id }) {
  return (
    <div className="card">
      <img src={url} alt={title} />
      {<p>{title}</p>}
    </div>
  );
}

GifGridItem.PropTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default GifGridItem;
