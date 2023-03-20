import React, { useState } from "react"; //useState управління станом
const Counter = () => {
  const [count, setCount] = useState(0);
  const [tag, setTags] = useState(["apple", "banana", "orange"]);

  const fomatCount = () => {
    return count == 0 ? "empty" : count;
  };
  const getbageClasses = () => {
    let classes = "badge m-2 ";
    classes += count === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  const handleIncrement = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    setCount((prevState) => prevState - 1);
  };

  const handleTagChange = (id) => {
    setTags((prevState) => prevState.filter((tag) => tag !== id));
    // console.log(id);
  };
  // return function

  const renderTags = () => {
    // if (tag.length === 0) return "No tags";
    return (
      tag.length !== 0 &&
      tag.map((tag) => (
        <li
          key={tag}
          className="btn btn-primary btn-sm m-2"
          onClick={() => handleTagChange(tag)}
        >
          {tag}
        </li>
      ))
    );
  };

  if (setTags.length !== 0) {
    return <ul>{renderTags()}</ul>;
  }

  return (
    <>
      <div>
        <ul>{renderTags()}</ul>
      </div>

      <span className={getbageClasses()}>{fomatCount()}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleDecrement}>
        -
      </button>
    </>
  );
};

export default Counter; // експортування
