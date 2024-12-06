
export const Download=({imageUrl})=>{
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'generated-image.png'; // Specify a default filename
        link.click();
      };
    return(<>
    <button onClick={handleDownload} className="mt-2 w-[30vw] bg-blue-500 text-white p-[1vw] rounded shadow-lg shadow-gray-500"> Download </button>
    </>);
}