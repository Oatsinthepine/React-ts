/*
This Hello.tsx component is a practice example of how to fetch data from a FastAPI backend using React.
this points to the practice of FastAPI_Learning/backend.py file, which contains the FastAPI server code.
*/


import { useState, useEffect } from "react";

function Hello() {
    // useState hook to manage the message state, message is the vrariable that holds the current message, and setMessage is the function to update it
    const [message, setMessage] = useState<string>("Loading...");
    // async function to send the GET request to the FastAPI server
    async function fetchMessage() {
        try {
            const response = await fetch("http://localhost:8000/hello") // URL of the FastAPI endpoint
            console.log("response is:", response);
            // store the json string from the response
            const data = await response.json()
            // update the message state with the message from the response
            setMessage(data.message)
            console.log("Response received:", data);
        } catch (error) {
            setMessage("Error occurred while fetching message");
            console.log("Error fetching message:", error);
        }
    }
    // then useEffect hook to call the fetchMessage function when the component mounts
    useEffect(() => {
        fetchMessage()
    },[])

    return (
        <div>
            {/*display the fetched message from fast api endpoint here*/}
            <h1>{message}</h1>
        </div>
    )
}

export default Hello;