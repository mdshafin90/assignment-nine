import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <h1 className='blog-header'>Questions & Answers</h1>
            <div className='blog'>
                <div className='blog-q-one'>
                    <h1>Q1: When should I use context API ?</h1>
                    <p>Ans: When I need to send data to another component to my parent component, I need to use context API because it allows me to send data without having to pass props manually at every component.</p>
                </div>
                <div className='blog-q-one'>
                    <h1>Q2: What is custom hook ?</h1>
                    <p>Ans: A custom hook is a JavaScript function whose name starts with "use" and you can call another hook. If you have a component and you need to extract data from another component this custom hook makes your hook too much easier if you need to change anything in your component.</p>
                </div>
                <div className='blog-q-one'>
                    <h1>Q3: How does useRef works ?</h1>
                    <p>Ans: useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference. If I have data and that data has a special element then I can use useRef to use that special element.</p>
                </div>
                <div className='blog-q-one'>
                    <h1>Q4: How does useMemo works ?</h1>
                    <p>Ans: React has a built-in hook called useMemo that allows you to memorize special functions so that you can avoid calling them on every render. You can simply pass an array of input & then useMemo for remember your special functions.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;