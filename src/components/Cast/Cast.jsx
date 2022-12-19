import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = '9ed87961dbb9b8beebb5f02b4b9b3eb3';

const Cast = () => {
    const { movieId } = useParams();
    const [currentCast, setCurrentCast] = useState([]);
    useEffect(() => {
        const fetchCurrentCast = async (id) => {
            const findCurrentCast = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
            return findCurrentCast.json();
        }
        fetchCurrentCast(movieId).then(res => {
            setCurrentCast([...res.cast]);
        })
    }, [movieId])

    return <>
        <ul>
            {currentCast.map(character => {
                return <li key={character.cast_id}>
                    <img src={character.profile_path? `https://image.tmdb.org/t/p/w500${character.profile_path}` : '//i.work.ua/career_guide/59_b.png'} alt={character.name} width='200' />
                    <p>Character: {character.character}</p>
                    <p>Name: {character.name}</p>
                </li>
            })}
    </ul>
    </>
}

export default Cast;