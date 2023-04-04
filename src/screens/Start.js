import React, {useEffect} from 'react';
import useSound from 'use-sound';
import backgroundSound from '../Music/backgroundSound.mp3';


function StartPage() {
  const [play] = useSound(backgroundSound, { loop: true });

useEffect(() => {
play();
return () => {};
}, [play]);

    const handleEasy = () => {
        // use the MemoryRouter to navigate to a new URL
        window.location.href = '/easy';
      };

      const handleMedium = () => {
        // use the MemoryRouter to navigate to a new URL
        window.location.href = '/medium';
      };

      const handleHard = () => {
        // use the MemoryRouter to navigate to a new URL
        window.location.href = '/hard';
      };

  return (
    <div className='startpage'>
      <h1>Welcome GeoKnowlege!</h1>
      <div className='start-buttons'>
      <button onClick={handleEasy}>Easy Game</button>
      <button onClick={handleMedium}>Medium Game</button>
      <button onClick={handleHard}>Hard Game</button>
      </div>
    </div>
  );
}

export default StartPage;
