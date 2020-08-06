import React from 'react'
import Form from '../components/Form/Form'
import Test from '../components/Test/Test'

export default function HomePage () {
    return (
        <div>
            <h2 className="App">
                Home Page
            </h2>
            <Form />
            <Test />
        </div>
    );
}