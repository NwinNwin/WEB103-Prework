import { useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { supabase } from "./client";
import { useNavigate } from "react-router-dom";

import "@picocss/pico";

import AddCreator from "./pages/AddCreator/AddCreator";
import EditCreator from "./pages/EditCreator/EditCreator";
import ViewCreator from "./pages/ViewCreator/ViewCreator";
import ShowCreators from "./pages/ShowCreators/ShowCreators";

import "./App.css";

function App() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  useEffect(() => {
    async function fetch() {
      try {
        const res = await supabase.from("creators").select();
        setData(res.data);
      } catch (err) {
        console.error(err);
      }
    }

    fetch();
  }, []);

  let element = useRoutes([
    {
      path: "/",
      element: <ShowCreators data={data} />,
    },
    { path: "/view/:id", element: <ViewCreator setData={setData} /> },
    { path: "/add", element: <AddCreator setData={setData} /> },
    { path: "/edit/:id", element: <EditCreator setData={setData} /> },
  ]);

  return (
    <>
      <div className="main">
        <h1 className="title">CREATORVERSE</h1>
        <div className="main-buttons">
          <button className="main-btn" onClick={() => navigate("/")}>
            Show All Creators
          </button>
          <button className="main-btn" onClick={() => navigate("/add")}>
            Add Creator
          </button>
        </div>
      </div>
      {element}
    </>
  );
}

export default App;
