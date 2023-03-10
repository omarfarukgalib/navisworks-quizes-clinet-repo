import React from 'react';

const Blog = () => {
    return (
        <div className='mt-3 bg-red-200 h-full font-semibold'>
            <h1 className=' text-2xl'>what is the purpose of react router?</h1>
            <p className='p-5 text-justify text-xl'>
            


Client side routing is required to keep your application in sync with the browser URL.

It is mainly useful for Single Page Applications where the backend will be used for RESTful API calls via XHR or AJAX calls.

Being a SPA uses can book mark your URL and when they hit the URL again , your application should load that page with the data and its state.

The main difference between Server side routing and client side routing:
1. In Server Side routing you download(serve) the entire page.
2. In client Side routing along with the entire page, you can serve a specific portion of a page, reuse the DOM, manually manage the URL and history states.
            </p>

            <h1 className='text-2xl'>How does context api work?</h1>
            <p className='p-5 text-justify text-xl'>
            
            React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.

            </p>
            <h1 className='text-2xl'>what is useRef hook in React js?</h1>
            <p className='p-5 text-justify text-xl'>
            
            Ref means just reference, so it can be a reference to anything (DOM node, Javascript value, etc). The useRef hook returns a mutable object which doesn’t re-render the component when it’s changed. Think it like useState, but unlike useState, doesn’t trigger re-render of the component. The object that useRef returns have a current property that can hold any modifiable value.

            



            </p>
        </div>
    );
};

export default Blog;