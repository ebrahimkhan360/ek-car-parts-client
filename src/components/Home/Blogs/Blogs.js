import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto'>
            <h2 className='text-center text-4xl font-bold my-6 text-purple-600'>My Blogs!!</h2>

            <div tabindex="0" className="my-4 collapse collapse-plus border border-success bg-base-100 rounded-box">
                <div className="collapse-title text-2xl font-bold">
                    *** Question # 1. How will you improve the performance of a React Application?
                </div>
                <div className="collapse-content">
                    <h2 className='text-2xl font-bold text-purple-600'>@ Answer: </h2>
                    <p className='text-success'>
                        # Optimizing performance in a React application. To optimize React rendering, you need to make sure that components receive only necessary props. It will let you control the CPU consumption and avoid over-rendering unnecessary features. The solution is to create a functional component that will collect all props and redistribute them to other components.

                        <br />
                        1. Keeping component state local where necessary.
                        <br />
                        2. Memoizing React components to prevent unnecessary re-renders.
                        <br />
                        3. Code-splitting in React using dynamic import()
                        <br />
                        4. Windowing or list virtualization in React.
                        <br />
                        5. Lazy loading images in React.
                    </p>
                </div>
            </div>
            <div tabindex="0" className="my-4 collapse collapse-plus border border-success bg-base-100 rounded-box">
                <div className="collapse-title text-2xl font-bold">
                    *** Question # 2. What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <h2 className='text-2xl font-bold text-purple-600'>@ Answer: </h2>
                    <p className='text-success'>Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components. svg viewer
                        <br /> The built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage state​s in React, including the use of:
                        <br /> Hooks
                        <br />
                        React Context API
                        <br />
                        Apollo Link State
                        <br />
                        We will, however, focus on the use of the setState() method.</p>
                </div>
            </div>
            <div tabindex="0" className="my-4 collapse collapse-plus border border-success bg-base-100 rounded-box">
                <div className="collapse-title text-2xl font-bold">
                    *** Question # 3. How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <h2 className='text-2xl font-bold text-purple-600'>@ Answer: </h2>
                    <p className='text-success'>
                        Prototype-based programming is a style of object-oriented programming where behavioral recycling (known as inheritance) is performed through the process of reusing existing objects that act as prototypes. This model can also be referred to as prototype, prototype-based, classless or example-based programming.
                    </p>
                </div>
            </div>
            <div tabindex="0" className="my-4 collapse collapse-plus border border-success bg-base-100 rounded-box">
                <div className="collapse-title text-2xl font-bold">
                    *** Question # 4.  You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                </div>
                <div className="collapse-content">
                    <h2 className='text-2xl font-bold text-purple-600'>@ Answer: </h2>
                    <p className='text-success'>
                        A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information and details of your product on your ecommerce site. These product details can be one sentence, a short paragraph or bulleted. They can be serious, funny or quirky.
                    </p>
                </div>
            </div>
            <div tabindex="0" className="my-4 collapse collapse-plus border border-success bg-base-100 rounded-box">
                <div className="collapse-title text-2xl font-bold">
                    *** Question # 5. What is a unit test? Why should write unit tests?
                </div>
                <div className="collapse-content">
                    <h2 className='text-2xl font-bold text-purple-600'>@ Answer: </h2>
                    <p className='text-success'>
                        Unit testing ensures that all codes meet quality standards before deployment. This ensures a reliable engineering environment where quality is paramount. During the product development life cycle, unit testing saves time and money and helps developers write better code more efficiently.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;