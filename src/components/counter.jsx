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
    // setTags(["tag4", "tag5"]);
    setTags((prevState) => prevState.filter((tag) => tag !== id));
    // console.log(id);
  };

  return (
    <>
      <div>
        <ul>
          {tag.map((tag) => (
            <li
              key={tag}
              className="btn btn-primary btn-sm m-2"
              onClick={() => handleTagChange(tag)}
            >
              {tag}
            </li>
          ))}
        </ul>
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
