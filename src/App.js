import React, { useState } from "react";
import Stories from "./components/Stories";
import "./App.css";
import Header from "./components/Header";
import MarketPlace from "./components/MarketPlace";
import Home from "./components/Home";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedFile, setselectedFile] = useState();
  const [img, setImgFile] = useState(null);
  const [value, setValue] = React.useState("");
  const [story, setStories] = React.useState("");
  const [location, setSLocation] = React.useState("");
  const [allStory, setAllStories] = React.useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleStoryChange = (e) => {
    setStories(e.target.value);
  };  const handleLocationChange = (e) => {
    setSLocation(e.target.value);
  };

  console.log(allStory);

  console.log(value);
  const onChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImgFile(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
      setselectedFile(e.target.files[0].name);
      console.log(selectedFile);
    }
  };
  return (
    <div className="font-[poppins]">
      <Header />
      <MarketPlace />
      <Home
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        onChange={onChange}
        setImgFile={img}
        setselectedFile={setselectedFile}
        selectedFile={selectedFile}
        img={img}
        handleChange={handleChange}
        value={value}
        handleStoryChange={handleStoryChange}
        story={story}
        setAllStories={setAllStories}
        allStory={allStory}
        location={location}
        handleLocationChange={handleLocationChange}
      />
      <Stories allStory={allStory} />
    </div>
  );
}

export default App;
