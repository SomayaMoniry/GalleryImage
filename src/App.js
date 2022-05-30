import React from "react";
import "./index.css";
import "./components/cardsImage";
import ImageCard from "./components/cardsImage";
import ImageSearch from "./components/ImageSearch";
function App() {
  const [images, setImages] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(true);
  const [term, setTerm] = React.useState("");

  React.useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=27666641-3b077b8c0e6f0e80b9df13d63&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsloading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto mt-5 px-8">
      <ImageSearch searchImage={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && (
        <h1 className="text-5xl mx-auto text-center mt-32 ">
          Images Not Found...
        </h1>
      )}
      {isLoading ? (
        <h1 className="text-6xl mx-auto text-center mt-32 ">Loading...</h1>
      ) : (
        <div className="grid gap-4 grid-cols-3">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
