import React from "react";

const ImageCard = (props) => {
  const tags = props.image.tags.split(",");

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full shadow-md"
        src={props.image.webformatURL}
        alt="random"
      />

      <div className="px-6 py-6">
        <div className="text-xl text-purple-500 font-bold mb-2">
          Photo by {props.image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {props.image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {props.image.downloads}
          </li>
          <li>
            <strong>Likes: </strong> {props.image.likes}
          </li>
        </ul>
      </div>

      <div className="px-6 py-4 ">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-200 rounded-full px-2 py-1 font-semibold inline-block text-gray-700 text-sm mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
