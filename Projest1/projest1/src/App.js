import React, { useEffect, useState } from 'react';
import Background from './Component/Backgrounds/Background';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';

const App = () => {
  const heroData = [
    { text1: "Dive into", text2: "What do love" },
    { text1: "Indulge", text2: "your passion" },
    { text1: "Give in to", text2: "your passion" },
    { text1: "Long drive", text2: "what do love" },
  ];

  const [heroCount, setHeroCount] = useState(2);  // Starts with the third item
  const [playStatus, setPlayStatus] = useState(false);
  useEffect(() =>{
    setInterval(() =>{
      setHeroCount((count) =>{return count===2?0:count+1})
    },3000);
  },[])
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        herodata={heroData[heroCount]}  // Passes the current hero data based on heroCount
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
};

export default App;
