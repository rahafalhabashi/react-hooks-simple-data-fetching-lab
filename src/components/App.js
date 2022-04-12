import { useEffect, useState } from "react";
import React from "react";

function App() {
    const [dogImages, setDogImages] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((randomDog) => {
                setDogImages(randomDog.message);
                console.log(dogImages.message)
                setIsLoaded(true);
            });
    }, [])

    if (!isLoaded) return <p>Loading</p>

    return (
            <img src={dogImages} alt="A Random Dog"/>
    )
}

export default App