import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const InfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currPage, setCurrPage] = useState(1);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      let responce = await axios.get(
        `https://randomuser.me/api/?results=5&page=${currPage}`
      );
      const newItem = responce.data.results.map(
        (user) => `${user.name.first} ${user.name.last}`
      );
      setItems((perItems) => [...perItems, ...newItem]);
      setCurrPage((perPage) => perPage + 1);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) 
    
  };
  useEffect(() => {
    fetchData();
  }, [currPage]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        {items?.map((item, i) => {
          return (
            <div key={i}>
              <p>{item}</p>
            </div>
          );
        })}
        {isLoading && <div>Loading...</div>}
      </div>
    </>
  );
};

export default InfiniteScroll;
