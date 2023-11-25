import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pets.scss';
import FlipCard from "./FlipCard";

const Dogs = () => {
  const [imageUrl, setImageUrl] = useState([]);

  useEffect(() => {
    const getDogData = async () => {
      try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random/12');
        setImageUrl(response.data.message);
      } catch (error) {
        console.error('Error fetching data >', error);
      }
    };
    getDogData();
  }, []);

  const generateRandomNotes = () => {
    const notesOptions = ["Friendly", "Energetic", "Good with kids", "Intelligent", "Loves walks"];
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
      front: <img key={index} src={url} alt={`Dog ${index + 1}`} className='petImage' />,
      back: [
        `Name: Dog${index + 1}`,
        <br key={`br1-${index}`} />,
        `Age: ${Math.floor(Math.random() * 5) + 1} Years old`,
        <br key={`br2-${index}`} />,
        `Breed: ${getRandomBreed()}`,
        <br key={`br3-${index}`} />,
        `Notes: ${generateRandomNotes()}`,
      ],
    }));
  };

  const getRandomBreed = () => {
    const breeds = ["Labrador Retriever", "German Shepherd", "Beagle", "Poodle", "Bulldog"];
    return breeds[Math.floor(Math.random() * breeds.length)];
  };

  const cards = generateCards();

  return (
    <div>
       <div class="textContainer">
          <h2>Explore the dogs we have available</h2>
        </div>
      <div className="petsContainer">
      {cards.map((card)=>(
          <FlipCard key={card.id} card={card} />
         ))}  
      </div>
    </div>
  );
};

export default Dogs;
