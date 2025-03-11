import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getAllGenres } from '../api/genreApi';

const Genres = () => {

    let [genres, setGenres] = useState([])
    const { genreName } = useParams();
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate(); 

    const handleBoxClick = (genre) => {
        navigate(`/${genre.genre_name}/${genre._id}`); // Navigate to the new page when a box is clicked
    };

    const handleTextClick = () => {
        setIsClicked(true);
    };
    const getBoxColor = (genre) => {
        const colors = {
            "Fiction": "#FF5733",
            "Mystery": "#6A0572",
            "Fantasy": "#8E44AD",
            "Sci-Fi": "#3498DB",
            "Romance": "#E91E63",
            "Horror": "#2C3E50",
            "Historical Fiction": "#D4AC0D",
            "Thriller": "#C0392B",
            "Self-Help": "#27AE60",
            "Biography": "#F39C12",
        };
        return colors[genre] || "#808080"; // Default gray if genre is missing
    };

    useEffect(() => {
        getAllGenres()
            .then(data => {
                setGenres(data)
            })
            .catch(error => console.log(error))
    }, [genreName])
    return (
        <>
        <div className="flex flex-col items-center justify-center h-screen"  style={{ backgroundImage: "url('/Genre.jpeg')", width:'100vw', height:'100vh' }}>
            {/* Hover Text */}
            <h1
                className="text-2xl text-white font-bold cursor-pointer mb-36 hover:text-slate-200 transition"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => !isClicked && setIsHovered(false)}
                onClick={handleTextClick}
            >
                
                <img src="/Bell.png" alt="" className="m-24% w-40 h-40"/>
            </h1>
            <div
                className={`w-fit h-fit flex gap-1 bg-slate-900 border-8 pt-3 pr-1 pl-1 border-yellow-900 transition-all 
                    ${isHovered || isClicked ? "opacity-100 translate-y-4" : "opacity-0 translate-y-0"}`}
            >
                {genres.map((genre) => (
                    <div
                        key={genre.genre_name}
                        className="relative w-12 h-44 flex justify-center items-center rounded-lg cursor-pointer text-white 
                        hover:scale-110 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 ease-in-out"
                        style={{
                            backgroundColor: getBoxColor(genre.genre_name),
                            // animation: getHoverEffects(box.genre)
                        }}
                        onClick={() => handleBoxClick(genre)}
                    >
                        <span
                            className="absolute font-bold text-white text-lg text-center"
                            style={{
                                writingMode: "sideways-lr",
                                textOrientation: "mixed",
                                textAlign: "center",
                            }}
                        >
                            {genre.genre_name}
                        </span>
                    </div>
                ))}
            </div>
            </div>
        </>
    )
}

export default Genres