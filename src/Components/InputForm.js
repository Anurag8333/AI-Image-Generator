import React, { useState } from 'react';


const InputForm = ({ onSubmit }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    onSubmit(prompt);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 flex flex-col items-center gap-5">
      <input
        type="search"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your image prompt"
        className="border p-2 w-[80vw] rounded shadow-lg shadow-gray-500"
        required />
      <button
        type="submit"
        className="mt-2 w-[30vw] bg-[#28e825] text-[1.5rem] text-white font-bold p-1 rounded shadow-lg shadow-gray-500"
      >
        Generate
      </button>
    </form>
  );
};

export default InputForm;
