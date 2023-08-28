import Card from "../../components/Card/Card";
import "./ShowCreators.css";
const ShowCreators = ({ data }) => {
  return (
    <>
      <div className="show-container">
        {data &&
          data.map((item) => (
            <Card
              id={item.id}
              name={item.name}
              description={item.description}
              imageURL={item.imageURL}
              url={item.url}
            />
          ))}
      </div>
    </>
  );
};

export default ShowCreators;
