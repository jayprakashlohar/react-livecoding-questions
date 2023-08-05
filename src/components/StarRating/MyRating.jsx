import StarRating from "./StarRating"


const MyRating = () => {

    const handleRatingChange = (rating) => {
        console.log(`new rating is ${rating}`)
    }
  return (
    <div>
      <StarRating maxStars={5} initialStars={3} callback={handleRatingChange} />
    </div>
  );
}

export default MyRating
