import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../../client";
import "../AddCreator/AddCreator.css";

const EditCreator = ({ setData }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    async function fetch() {
      try {
        const res = await supabase.from("creators").select().eq("id", id);
        setName(res.data[0].name);
        setImageURL(res.data[0].imageURL);
        setDescription(res.data[0].description);
        setUrl(res.data[0].url);
      } catch (err) {
        console.error(err);
      }
    }

    fetch();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const newItem = {
        id: id,
        name: name,
        imageURL: imageURL,
        url: url,
        description: description,
      };
      await supabase.from("creators").update(newItem).eq("id", id);
      setData((prev) => prev.map((item) => (item.id === id ? newItem : item)));
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
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

  return (
    <>
      <div className="add-container">
        <form onSubmit={handleUpdate}>
          <div className="input-container">
            <label>Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>Image</label>
            <input
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>URL</label>
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
          </div>
          <div className="edit-buttons">
            <button className="edit-button delete-btn" onClick={handleDelete}>
              Delete
            </button>
            <button className="edit-button" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditCreator;
