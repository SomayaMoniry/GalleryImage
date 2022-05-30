import React from "react";

const ImageSearch = ({ searchImage }) => {
  const [text, setText] = React.useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    searchImage(text);
  };
  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto ">
      <form className="max-w-sm w-full" onSubmit={onSubmit}>
        <div className="flex items-center border-b-2 py-2 border-b-teal-500">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none leading-tight "
            type="text"
            onChange={(e) => setText(e.target.value)}
            placeholder="Search Image Term..."
          />
          <button
            type="submit"
            className="flex-shrink-0 bg-teal-500 text-white border-teal-500 hover:border-teal-700  hover:bg-teal-700 rounded px-2 py-1 text-sm border-4"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
