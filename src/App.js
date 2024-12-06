import React, { useState } from 'react';
import InputForm from './Components/InputForm';
import ImageDisplay from './Components/ImageDisplay';
import './App.css';
import {Footer} from './Components/Footer';

const App = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading,setLoading]=useState(false);

  const generateImage = async (prompt) => {
    const apiKey = 'Api key';
    const endpoint = "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image";

    try {
        setImageUrl(null);
        setLoading(true);
      async function query(data) {
        const response = await fetch(
          endpoint,
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(data),
          }
        );
        const result = await response.blob();
        setLoading(false);
        return result;
      }
      query({"inputs": prompt}).then((response) => {
        console.log(response);
        const imageBlob = response;
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImageUrl(imageObjectURL);
      });    
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  return (
    <div className="App flex flex-col justify-between items-center">
     <main className='h-[90vh] flex flex-col items-center'>
     <h1 className="text-center text-[#25c8e8] text-[5vw] font-bold p-4 drop-shadow-lg drop-shadow-grey-600">Text-to-Image Ai Generator</h1>
      <InputForm onSubmit={generateImage} />
      <div className={`${loading?"loading":"hide"} `}>Loading ...</div>
      <ImageDisplay imageUrl={imageUrl} />
     </main>
      <Footer/>
    </div>
  );
};

export default App;
