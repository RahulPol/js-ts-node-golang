import { useState } from "react";

function UseStateGotcha() {
  const [count, setCount] = useState<number>(0);

  console.count("render count(s)");

  const handleIncrement = () => {
    // setCount((count) => {
    //   const newCount = count + 1;
    //   console.log(newCount);
    //   return newCount;
    // });

    // setTimeout(() => {
    //   console.log('clicked the button', count);
    //   setCount(count + 1);
    // }, 3000);

    setTimeout(() => {
      console.log("clicked the button", count);
      setCount((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };

  return (
    <>
      <h2>Use State Gotcha</h2>
      <h4>Count: {count}</h4>
      <button className="btn" onClick={handleIncrement}>
        Increment
      </button>
    </>
  );
}
export default UseStateGotcha;
