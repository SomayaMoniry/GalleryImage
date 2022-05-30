import React from "react";
import "./index.css";
import "./components/cardsImage";
import ImageCard from "./components/cardsImage";
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
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

export default App;
