import React from 'react'
import Form from '../components/Form/Form'
import Posts from '../components/Posts/Posts'
import FormTest from '../components/FormTest/FormTest'

export default function HomePage () {
    return (
        <div>
            <h2 className="App">
                Home Page
            </h2>
            <Form />
            <Posts />
            <FormTest />
        </div>
    );
}