import React from "react";
import "./index.css";
function App() {
  const [images, setImages] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(true);
  const [term, setTerm] = React.useState("");

  React.useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=27666641-3b077b8c0e6f0e80b9df13d63&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full shadow-md"
        src="https://source.unsplash.com/random"
        alt="random"
      />

      <div className="px-6 py-6">
        <div className="text-xl text-purple-500 font-bold mb-2">
          Photo by Somaya
        </div>
        <ul>
          <li>
            <strong>Views: </strong>4000
          </li>
          <li>
            <strong>Downloads: </strong>300
          </li>
          <li>
            <strong>Likes: </strong> 200
          </li>
        </ul>
      </div>

      <div className="px-6 py-4 ">
        <span className="bg-gray-200 rounded-full px-2 py-1 font-semibold inline-block text-gray-700 text-sm mr-2">
          #tag1
        </span>
        <span className="bg-gray-200 rounded-full px-2 py-1 font-semibold inline-block text-gray-700 text-sm mr-2">
          #tag2
        </span>
        <span className="bg-gray-200 rounded-full px-2 py-1 font-semibold inline-block text-gray-700 text-sm mr-2">
          #tag3
        </span>
      </div>
    </div>
  );
}

export default App;
