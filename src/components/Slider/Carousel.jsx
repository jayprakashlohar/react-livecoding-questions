import { useState } from "react";

const dummyImages = [
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/400",
  "https://via.placeholder.com/500",
];

const Carosel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => prevIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <button onClick={handlePrevClick} disabled={currentImageIndex === 0}>
          Previous
        </button>
        <button
          onClick={handleNextClick}
          disabled={currentImageIndex === dummyImages.length - 1}
        >
          Next
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={dummyImages[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          style={{ maxWidth: "300px" }}
        />
      </div>
    </div>
  );
};

export default Carosel;
