import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = '9ed87961dbb9b8beebb5f02b4b9b3eb3';

const Reviews = () => {
    const { movieId } = useParams();
    const [currentReviews, setCurrentReviews] = useState([]);
    useEffect(() => {
        const fetchReviews = async (id) => {
            const findReviews = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
            return findReviews.json();
        }
        fetchReviews(movieId).then(res => {
            setCurrentReviews([...res.results])
        })
    }, [movieId])
    return <>
        <ul>
            {currentReviews.length? currentReviews.map((review) => {
                return <li key={review.id}>
                    <h3>Author: {review.author}</h3>
                    <p>{review.content }</p>
                </li>
            }): 'Sorry, no one has left a review yet :('}
        </ul>
    </>
}

export default Reviews;