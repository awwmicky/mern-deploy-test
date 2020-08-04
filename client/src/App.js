import React from 'react'
import './assets/CSS/App.css'
import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'


export default function App () {
  return (
    <>
      <h1>MERN Blog App</h1>
      <Form />
      <Posts />
    </>
  );
}