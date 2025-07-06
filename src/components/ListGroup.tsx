// remember in React, a component cannot return more than one element, to deal with this, we can use a fragment or a parent element like a div
import { Fragment } from 'react';
import type {MouseEvent} from "react";
import {useState} from "react";

interface ListGroupProps {
    items: string[];
    heading: string;
    // here we add a new function inside the interface to notify the parent component when an item is clicked
    onSelectItem?: (item: string) => void; // optional function to handle item selection
}


function ListGroup(props: ListGroupProps) {

    // useState is a hook that allows us to add state to a functional component
    const [selectedIndex, setSelectedIndex] = useState(0);
    // selectedIndex is the current state value, and setSelectedIndex is a function that allows us to update the state
    //console.log(selectedIndex, setSelectedIndex);


    // this is a practice of event handling
    const handleClick = (event: MouseEvent) => {
        console.log(event);
        setSelectedIndex(props.items.indexOf(event.currentTarget.textContent || ''));
        // if the onSelectItem function is provided, we call it with the clicked item
        if (props.onSelectItem) {
            props.onSelectItem(event.currentTarget.textContent || '');
        }
    }


    // items = []; // uncomment this line to test conditional rendering
    // conditional rendering
    if (props.items.length === 0) {
        return (
            <Fragment>
                <h1>example of conditional rendering</h1>
                <p>No items found</p>
            </Fragment>
        );
    }

    // in jsx, we can only return either HTML elements or components
    return (
        <Fragment>
            <h1>{props.heading}</h1>
            <p>This is a simple list group component.</p>
        <ul className="list-group">
            {/*we need to wrap js/ts code using '{}' in between html blocks*/}
            {props.items.map((item) => {
                // list items should have a unique key property so that React can identify which items have changed, are added, or are removed dynamically
                // return (<li className="list-group-item"  key={item} onClick={() => {return console.log(`Clicked ${item}`)}}>{item}</li>)
                // this is another way to write the same code, by setting the event handler separately
                return (
                    <li className={selectedIndex === props.items.indexOf(item) ? 'list-group-item active' : 'list-group-item'}
                        key = {item}
                        onClick={handleClick}>
                        {item}
                    </li>
                )
            })}
        </ul>
        </Fragment>
    )
}

export default ListGroup;