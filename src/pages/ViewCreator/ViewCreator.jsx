import { supabase } from "../../client";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ViewCreator.css";

const ViewCreator = ({ setData }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState();

  const handleDelete = async () => {
    try {
      await supabase.from("creators").delete().eq("id", id);
      setData((prev) =>
        prev.filter((item) => {
          return item.id != id;
        })
      );
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    async function fetch() {
      try {
        const res = await supabase.from("creators").select().eq("id", id);
        setItem(res.data[0]);
      } catch (err) {
        console.error(err);
      }
    }
    fetch();
  }, []);
  return (
    <>
      <div className="view-container">
        <div className="view-info-container">
          <h1>{item?.name}</h1>
          <p>description: {item?.description}</p>
          <a href={item?.url}>
            <button className="social-media-btn"> 🌐 Social Media Link</button>
          </a>

          <div className="view-buttons">
            <button className="edit-button delete-btn" onClick={handleDelete}>
              Delete
            </button>
            <button
              className="edit-button"
              onClick={() => navigate(`/edit/${id}`)}
            >
              Edit
            </button>
          </div>
        </div>

        <img className="view-img" src={item?.imageURL} alt="" />
      </div>
    </>
  );
};

export default ViewCreator;
