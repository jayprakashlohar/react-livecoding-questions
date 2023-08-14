import { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      fetch("https://fakestoreapi.com/products/")
        .then((res) => res.json())
        .then((data) => setData(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleDelete = (id) => {
    let updateData = data.filter((el) => el.id !== id);
    setData(updateData);
  };

  return (
    <>
      <div>
        <h2 style={{ textAlign: "center", padding: "20px" }}>
          All Products Title
        </h2>
        {data?.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: "20px",
                border: "1px solid teal",
                marginBottom: "10px",
                padding: "10px",
              }}
            >
              <p>Title : {item.title}</p>
              <button onClick={() => handleDelete(item.id)}>remove</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FetchData;
