import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../client";
import "./AddCreator.css";

const AddCreator = ({ setData }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await supabase
      .from("creators")
      .insert([
        {
          name: name,
          imageURL: imageURL,
          description: description,
          url: url,
        },
      ])
      .select("*");

    setData((prev) => [...prev, data[0]]);
    navigate("/");
  };

  return (
    <>
      <div className="add-container">
        <form onSubmit={handleSubmit}>
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
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCreator;
