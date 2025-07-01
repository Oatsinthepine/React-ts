// remember in React, a component cannot return more than one element, to deal with this, we can use a fragment or a parent element like a div
import { Fragment } from 'react';
import type {MouseEvent} from "react";

function ListGroup() {
    // this is a practice of render lists
    let items = ['An item', 'A second item', 'A third item', 'A fourth item', 'And a fifth one'];

    // this is a practice of event handling
    const handleClick = (event: MouseEvent) => {
        console.log(event)
    }


    // items = []; // uncomment this line to test conditional rendering
    // conditional rendering
    if (items.length === 0) {
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
            <h1>List Group</h1>
            <p>This is a simple list group component.</p>
        <ul className="list-group">
            {/*we need to wrap js/ts code using '{}' in between html blocks*/}
            {items.map((item) => {
                // list items should have a unique key property so that React can identify which items have changed, are added, or are removed dynamically
                // return (<li className="list-group-item"  key={item} onClick={() => {return console.log(`Clicked ${item}`)}}>{item}</li>)
                // this is another way to write the same code, by setting the event handler separately
                return (
                    <li className="list-group-item"
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