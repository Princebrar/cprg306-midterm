import React, { useState } from "react";

  // Define the URL and passcode

  async function fetchData() {
    try {
      const response = await fetch(`https://webdev2-class-demo.vercel.app/api/sampleReqs/ehen2rfow`);
      const data = await response.json();
      return data.secretCode;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }

const APICallExam = () => {
  const [secretCode, setSecretCode] = useState(null);

  const handleClick = async () => {
    const data = await fetchData();
    setSecretCode(data);
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <button onClick={handleClick} className="bg-red-100 p-2 rounded-md border border-red-500">
          Submit
        </button>
      </div>
      {secretCode && (
        <div className="mt-4">
          <p>Secret Code: {secretCode}</p>
        </div>
      )}
    </div>
  );
};

export default APICallExam;
