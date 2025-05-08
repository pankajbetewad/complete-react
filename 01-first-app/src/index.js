import React from 'react';
import ReactDOM from 'react-dom/client';

const FirstComponent = () => {
    return (
        <>
            <h1>Hello, this is my first component</h1>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<FirstComponent />)