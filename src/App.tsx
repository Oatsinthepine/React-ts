// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
//
// function App() {
//   const [count, setCount] = useState(0)
//
//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
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
//
// export default App

//import Message from "./Message.tsx";
import ListGroup from "./components/ListGroup.tsx";
import Alert from "./components/Alert.tsx";
import Button from "./components/Button.tsx"
import {useState} from "react";
import Hello from "./Hello.tsx";

function App() {
    // moved the items array from ListGroup.tsx to the App component
    const items = ['An item', 'A second item', 'A third item', 'A fourth item', 'And a fifth one'];

    const handleSelectItem = (item: string) => {
        console.log(item);
    }

    // here is the useState hook to manage the state of the new alert, as we want to create a new alert dynamically when the button is clicked
    const [newAlert, setNewAlert] = useState(false)

    // create a component that accepts children as props
    return (
        <div>
            <ListGroup items={items} heading="Items for practice" onSelectItem={handleSelectItem} />
            <Alert children="Passed text"/>
            <div>
                <Alert>
                    <strong>Alert!</strong> <span>This is a dynamic alert component.</span>
                </Alert>
            </div>


            <div>
                <Button action={() => setNewAlert(true)}>
                    Click me
                </Button>
                {newAlert && (
                    <Alert>
                        <strong>New Alert Created!</strong>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                            onClick={() => setNewAlert(false)}
                        ></button>
                    </Alert>
                )}
            </div>
            <div>
                <Hello/>
            </div>
        </div>
    ); // <-- closing parenthesis for return
} // <-- closing brace for function


export default App; // always export to ensure component is available for import in other files

