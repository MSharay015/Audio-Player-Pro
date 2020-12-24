import {useState, useEffect} from 'react';
import Player from './components/Player/Player';

function App() {
  const [songs] = useState([
    {
      title: "Ya Ilaha",
      artist: "Alafasy",
      img_src: "./images/fadaituka.png",
      src: "./music/fadaituka.mp3"
    },
    {
      title: "Bal Naltajae",
      artist: "Alafasy",
      img_src: "./images/bal.png",
      src: "./music/bal.mp3"
    },
    {
      title: "Lil Harf",
      artist: "Alafasy",
      img_src: "./images/lil harf.jpg",
      src: "./music/lil harf.mp3"
    },
    {
      title: "Mustafa",
      artist: "Alafasy",
      img_src: "./images/mustafa.jpg",
      src: "./music/mustafa.mp3"
    },
    {
      title: "Thakayut",
      artist: "Alafasy",
      img_src: "./images/m2.jpg",
      src: "./music/thakayut.mp3"
    },
    {
      title: "Fadaituka",
      artist: "Alafasy",
      img_src: "./images/fadaiktuka1.jpg",
      src: "./music/fadaituka1.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="app">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;
