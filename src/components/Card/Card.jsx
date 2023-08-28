import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ id, name, description, url, imageURL }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="card">
        <div className="card-title">
          <img className="card-image" src={imageURL} alt="dang" key={id} />

          <h2 className="card-title-text">{name}</h2>
        </div>
        <a href={url}>🌐 Social Media Link</a>
        <div className="card-description">
          <p>{description}</p>
        </div>
        <div className="card-buttons">
          <button
            className="card-button-view"
            onClick={() => navigate(`view/${id}`)}
          >
            View
          </button>
          <button
            className="card-button-edit"
            onClick={() => navigate(`/edit/${id}`)}
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
