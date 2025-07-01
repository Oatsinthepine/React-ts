// remember in React, a component cannot return more than one element, to deal with this, we can use a fragment or a parent element like a div
import { Fragment } from 'react';

function ListGroup() {
    // this is a practice of render lists
    const items = ['An item', 'A second item', 'A third item', 'A fourth item', 'And a fifth one'];


    // in jsx, we can only return either HTML elements or components
    return (
        <Fragment>
            <h1>List Group</h1>
            <p>This is a simple list group component.</p>
        <ul className="list-group">
            {/*we need to wrap js/ts code using '{}' in between html blocks*/}
            {items.map((item) => {
                // list items should have a unique key property so that React can identify which items have changed, are added, or are removed dynamically
                return (<li key={item}>{item}</li>)
            })}
        </ul>
        </Fragment>
    )
}

export default ListGroup;