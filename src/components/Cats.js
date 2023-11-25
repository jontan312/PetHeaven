import React,{useEffect,useState} from 'react'
import axios from 'axios';
import './Pets.scss';
import FlipCard from "./FlipCard";
import "bootstrap/dist/css/bootstrap.min.css";

// https://api.thecatapi.com/v1/images/search?limit=12&api_key=live_AlqnUUrTCxpyK6kicXOMNwSKjeNFhx2SLpxP0wbdA6lJnof1kSaMYGHMG8sgMTRv

const Cats = () => {
    const [imageUrl, setImageUrl] = useState([]);

    useEffect(() => {
        const getCatData = async () => {
            try {
                const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=12&api_key=live_AlqnUUrTCxpyK6kicXOMNwSKjeNFhx2SLpxP0wbdA6lJnof1kSaMYGHMG8sgMTRv');
                setImageUrl(response.data);
            } catch (error) {
                console.error('Error fetching data >', error);
            }
        };
        getCatData();
    }, []);

    const generateRandomNotes = () => {
        const notesOptions = ["Neutered", "Spayed", "Potty trained", "Playful", "Loves cuddles"];
        const randomNotes = [];
        let check = 0;
        for (let i = 0; i < 2; i++) {
            let newVal = Math.floor(Math.random() * notesOptions.length);
            while (newVal === check) {
                newVal = Math.floor(Math.random() * notesOptions.length);
            }
            randomNotes.push(notesOptions[newVal]);
            check = newVal;
        }
        return randomNotes.join(", ");
    };
  

    const generateCards = () => {
        return imageUrl.map((url, index) => ({
        id: (index + 1).toString(),
        variant: "click",
        front: <img key={index} src={url.url} alt={`Cat ${index + 1}`} className='petImage' />,
        back: [
        `Name: Cat${index + 1}`,
        <br key={`br1-${index}`} />,
        `Age: ${Math.floor(Math.random() * 5) + 1} Years old`,
        <br key={`br2-${index}`} />,
        `Breed: ${getRandomBreed()}`,
        <br key={`br3-${index}`} />,
        `Notes: ${generateRandomNotes()}`,
        ],
        }));
    };

    // Helper function to get a random breed
    const getRandomBreed = () => {
        const breeds = ["Siamese", "Persian", "Maine Coon", "Bengal", "Sphynx"];
        return breeds[Math.floor(Math.random() * breeds.length)];
    };

    const cards = generateCards();
   
    return (
        <div>
            <div class="textContainer">
                <h2>Explore the cats we have available</h2>
            </div>
         
            <div className="petsContainer">
                {cards.map((card)=>(
                <FlipCard key={cards.id} card={card} />
                ))}
            </div>
        </div>
    );
}

export default Cats