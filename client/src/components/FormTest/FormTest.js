import React, { useState, useEffect } from 'react'
import './FormTest.css'
import axios from 'axios'

const initState = {
  text: "",
  data: []
}

export default function Form () {
  const [ state, setState ] = useState(initState);
  const { text, data } = state;

  const getData = async () => {
    try {
      const { data } = await axios.get('/api/view-all-posts');
      console.log('Data:', data)
      setState(_ => ({..._, data}))
    } catch (err) {
      console.log(err)
    }
  }

  const sendData = async (obj) => {
    try {
      const { data } = await axios.post('/api/create-post',obj);
      console.log('Data:', data)
      return data;
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (!data.length) getData()
  }, [ data ])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!text.trim()) return;
    const obj = { title: text };
    // const data = 
    sendData(obj);
    setState(_ => ({..._ , text: ""}))
  }

  const handleValue = (e) => {
    let text = e.target.value;
    setState(_ => ({..._, text }))
  };

  return (
    <form className="App" onSubmit={ handleSubmit }>
      <h3>Comp Form Test</h3>
      <input 
        type="search" 
        name="text" 
        className="text"
        placeholder="Send Data"
        autoComplete="off"
        autoFocus
        value={ text }
        onChange={ handleValue }
      />
      <button>+</button>
    </form>
  );

}