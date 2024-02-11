import React, { useState, useEffect } from 'react';

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
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-4">
      {user && (
        <div className="flex items-center justify-center mb-4">
          <img src={user.picture.large} alt={user.name.first} className="w-64 h-64 rounded-full" />
        </div>
      )}
      {user && (
        <div className="text-center">
          <h2 className="text-2xl font-bold">{user.name.first} {user.name.last}</h2>
          <p className="text-gray-600">{user.gender}</p>
          <p className="text-gray-600">{user.phone}</p>
        </div>
      )}
    </div>
  );
};

export default Card
