import React, { useState, useEffect } from 'react';
import "./index.css"

const Card = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
        const data = await response.json();
        setUser(data.results[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="cardContainer container mx-auto p-4">
      <div className="cardDetailsContainer max-w-md mx-auto bg-gradient-to-r rounded-lg shadow-md p-4">
        {user && (
          <div className="flex items-center justify-center mb-4">
            <img src={user.picture.large} alt={user.name.first} className="w-64 h-64 rounded-full" />
          </div>
        )}
        {user && (
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold">{user.name.first} {user.name.last}</h2>
            <p className="text-gray-300">{user.gender}</p>
            <p className="text-gray-300">{user.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card
