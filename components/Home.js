import React, { useState } from "react";


// user defined components
import Header from "./Header";
import ListItems from "./ListItems";

const Home = () => {
    // initial todos
     const initialTodos = [{
        title: "Go to the library",
        date: "Mon, 27 Jan 2025 08:00:27 GMT",
        key: "1"
     },
     {
        title: "Go to class",
        date: "Mon, 27 Jan 2025 10:30:07 GMT",
        key: "2"
     },
     {
        title: "Go to lunch",
        date: "Mon, 27 Jan 2025 13:00:26 GMT",
        key: "3"
     }]
     // react states & hooks
     const [todos,setTodos] = useState(initialTodos);
    return(
        <>
            <Header/>
            <ListItems 
                todos={todos}
                setTodos={setTodos}
            />
        </>
        
    ); 
}


export default Home;