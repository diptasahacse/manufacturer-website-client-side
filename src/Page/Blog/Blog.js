import React from 'react';

const Blog = () => {



    return (
        <div className='py-10 bg-accent'>
            <div className='max-w-7xl px-3 mx-auto'>
                <h2 className="font-semibold text-3xl text-primary">Blogs</h2>

                <div className='mt-5'>
                    <div className='mb-4'>
                        <h3 className='text-xl font-semibold text-orange-700'>1. How will you improve the performance of a React Application?</h3>
                        <div className='mt-4'>
                            <p className='font-semibold text-secondary'>Using React.memo()</p>
                            <p>
                                React.memo is a higher order component used to wrap purely functional component to prevent re-rendering if the props received in that component never change.
                            </p>
                            <p className='font-semibold text-secondary'>Using the useCallback Hook</p>
                            <p>
                                With the useCallback Hook, the incrementCount function only redefines when the count dependency array changes.
                            </p>
                            <p className='font-semibold text-secondary'>Using the useMemo Hook</p>
                            <p>
                                When the prop we pass down to a child component is an array or object, we can use a useMemo Hook to memoize the value between renders.
                            </p>
                            <p className='font-semibold text-secondary'>Code-splitting in React using dynamic import()</p>
                            <p>
                                By default, when a React application renders in a browser, a “bundle” file containing the entire application code loads and serves to users at once. This file generates by merging all the code files needed to make a web application work.
                            </p>

                        </div>
                    </div>
                    <div className='mb-4'>
                        <h3 className='text-lg font-semibold text-orange-700'>2. What are the different ways to manage a state in a React application?</h3>
                        <div className='mt-4'>
                            <p>When we talk about state in our applications, it’s important to be clear about what types of state actually matter.</p>
                            <p>There are four main types of state you need to properly manage in your React apps:</p>
                            <ul className='list-decimal ml-3'>
                                <li>Local state : <p>
                                    Local state is data we manage in one or another component.</p></li>
                                <li>Global state: <p>Global state is data we manage across multiple components.</p></li>
                                <li>Server state: <p>Data that comes from an external server that must be integrated with our UI state.</p></li>
                                <li>URL state: <p>
                                    Data that exists on our URLs, including the pathname and query parameters.</p></li>
                            </ul>

                        </div>
                    </div>
                    <div className='mb-4'>
                        <h3 className='text-lg font-semibold text-orange-700'>3. How does prototypical inheritance work?</h3>
                        <div className='mt-4'>
                            <p>In JavaScript, objects inherit properties from other objects — the prototypes. That's the idea of prototypal inheritance.</p>
                            <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>

                        </div>


                    </div>
                    <div className='mb-4'>
                        <h3 className='text-lg font-semibold text-orange-700'>4. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
                        <div className='mt-4'>
                            <p>
                                According to array, Use filter if I want to find all items in an array that meet a specific condition. Use find if I want to check if that at least one item meets a specific condition. Use includes if I want to check if an array contains a particular value. Use indexOf if I want to find the index of a particular item in an array.
                            </p>

                        </div>
                    </div>
                    <div className='mb-4'>
                        <h3 className='text-lg font-semibold text-orange-700'>5.  What is a unit test? Why should write unit tests?</h3>
                        <div className='mt-4'>
                            <p>
                                JavaScript Unit Testing is a method where JavaScript test code is written for a web page or web application module. It is then combined with HTML as an inline event handler and executed in the browser to test if all functionalities are working as desired. These unit tests are then organized in the test suite.
                            </p>
                            <p>There are various frameworks that are helpful for unit testing in JavaScript. They are as follows:</p>

                            <ul className='list-decimal ml-3'>
                                <li>Unit.js</li>
                                <li>Mocha</li>
                                <li>Jest</li>
                                <li>Jasmine</li>
                                <li>Karma</li>
                                <li>Cypress</li>
                                
                            </ul>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Blog;