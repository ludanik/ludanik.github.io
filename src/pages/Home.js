import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const hobbies = [
  "playing my ukulele",
  "writing poetry on my substack",
  "brewing coffee with my v60",
  "cafe hopping around the city",
  "pretending to be busy",
  "walking through cities",
  "smashing birdies on the court",
  "shredding a mountain on my snowboard",
  "playing pump it up",
  "cooking mapo tofu",
  "walking through art galleries",
  "drafting up new songs",
  "bar hopping through neighbourhoods",
  "watching super smash bros melee",
  "trying to get on top of another mountain",
  "crafting a new spotify playlist",
  "missing dynos at my local climbing gym",
  "still breaking code lol",
];

const space = [
  "corner",
  "fragment",
  "sliver",
  "pocket",
  "section",
  "node",
  "slice",
  "shard",
  "bit",
  "piece",
  "string",
];

function useWordCycle(words) {
  const [currentWord, setCurrentWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );

  const handleClick = () => {
    const currentIndex = words.indexOf(currentWord);
    const nextIndex = (currentIndex + 1) % words.length;
    setCurrentWord(words[nextIndex]);
  };

  return [currentWord, handleClick];
}

function Home() {
  useEffect(() => {
    document.title = "ian's home";
  }, []);

  const [currentHobby, handleHobbyClick] = useWordCycle(hobbies);
  const [currentSpace, handleSpaceClick] = useWordCycle(space);

  return (
    <div>
      <h2>Ian Ludanik</h2>
      <p>
        hey! i'm Ian and i'm currently studying Computer Science at York University. 
        i love a challenge and i'm open to new opportunities.
      </p>
      <p>
        reach out to me anytime at{" "}
        <a href="mailto:ludanik@my.yorku.ca" class="clickable">
          ludanik@my.yorku.ca
        </a>
        !
      </p>
      <div class="box">
        i'm looking for summer 2025 internships! shoot me an{" "}
        <a href="mailto:ludanik@my.yorku.ca" class="clickable">
          email
        </a>{" "}
        if you (or your friends) are hiring &lt;3{" "}
      </div>
    </div>
  );
}

export default Home;
