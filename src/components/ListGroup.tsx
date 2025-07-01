// remember in React, a component cannot return more than one element, to deal with this, we can use a fragment or a parent element like a div
import { Fragment } from 'react';

function ListGroup() {
    return (
        <Fragment>
            <h1>List Group</h1>
            <p>This is a simple list group component.</p>
        <ul className="list-group">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
        </ul>
        </Fragment>
    )
}

export default ListGroup;