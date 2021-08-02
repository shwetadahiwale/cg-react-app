import React from 'react';

let fun = () => {return 'fun...'}

let Welcome = (props) => {

    return (
        <div>
            <h1 className="display-1 text-primary">Welcome Component</h1>
            <p> {fun()} </p>
        </div>
    );
}
export default Welcome;


