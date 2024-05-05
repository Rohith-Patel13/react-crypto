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
    
    <div className="mx-auto flex flex-col justify-center items-center h-screen main-bg">

      <div className="rounded-sm shadow-md p-4 cardContainer"  >
        {user && (
          <div className="mb-4 p-5 flex justify-center items-center">
            <img src={user.picture.large} alt={user.name.first} className="w-50 h-80 image" />
          </div>
        )}
        {user && ( 
         <div className="main-container">
            <div className="text-center text-black p-5">
            <div className="flex">
            <h1 className="font-bold p-3 heading">{user.name.first} </h1>
            <h1 className="font-bold p-3 heading"> {user.name.last}</h1>
            </div>

            <h4 className="para">{user.gender}</h4>
            <h4 className="para">{user.phone}</h4>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card

