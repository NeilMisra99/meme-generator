import React from "react";

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
    console.log("Effect ran");
  }, []);

  function handleClick() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: allMemes[randomNumber].url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <div className="form-section">
        <div className="flex flex-wrap mb-6 justify-center">
          <div className="md:w-1/2 px-3 mb-2">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-upper-text"
            >
              Enter Upper Text
            </label>
            <input
              className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-upper-text"
              type="text"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
              required
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-lower-text"
              type="text"
              required
            >
              Enter Bottom Text
            </label>
            <input
              className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-lower-text"
              type="text"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="form-submit">
        <button
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded form-submit-btn"
          type="submit"
          onClick={handleClick}
        >
          Generate New Meme Image 🖼
        </button>
      </div>
      <div className="flex flex-wrap mt-6 p-5 justify-center meme">
        <img src={meme.randomImage} />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}

export default Meme;
