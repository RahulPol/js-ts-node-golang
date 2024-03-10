function App() {
  const books = [
    {
      name: "book1",
      image: "/vite.svg",
      key: 1,
    },
    {
      name: "book2",
      image: "/vite.svg",
      key: 2,
    },
    {
      name: "book3",
      image: "/vite.svg",
      key: 3,
    },
  ];

  const handleFormInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("changes", event.target.value);
  };

  const handleButtonClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log("button clicked", event.target);
  };
  return (
    <>
      <div className="someValue">Hello</div>
      <input type="text" />
      <ul>
        <li>Hmm</li>
      </ul>
      <input type="button" />
      <select>
        <option>hmm</option>
      </select>
      <button type="submit">Submit</button>
      <Person />
      <Message />

      <img src="/vite.svg"></img>
      <img src="./assets/react.svg"></img>

      <div>
        {books.map((book) => (
          <div key={book.key}>
            <h2>{book.name}</h2>
            <img src={book.image} />
          </div>
        ))}
      </div>

      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={(e) => handleFormInput(e)}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={(e) => handleButtonClick(e)}>click me</button>
    </>
  );
}

const Person = () => <h2>John doe</h2>;

const Message = () => {
  return <div>This is a personal message</div>;
};

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
