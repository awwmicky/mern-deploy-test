import React, { useState, useEffect } from 'react'
import './Test.css'
import axios from 'axios'

const initState = {
  text: "",
  data: []
};

export default function Test () {
  const [ state, setState ] = useState(initState);
  const { text, data } = state;

  const getData = async () => {
    try {
      const { data } = await axios.get('/api/view-all-posts');
      console.log('Data:', data)
      if (!data.length) return;
      setState(_ => ({..._, data}))
    } catch (err) {
      console.log(err)
    }
  };

  const sendData = async (obj) => {
    try {
      const { data } = await axios.post('/api/create-post',obj);
      console.log('Data:', data)
      return data;
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => { getData() }, [ ])

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!text.trim()) return;
    const obj = { title: text };
    const result = sendData(obj);
    if (result) {
      getData()
      setState(_ => ({..._ , text: ""}))
    }
  };

  const handleValue = (e) => {
    let text = e.target.value;
    setState(_ => ({..._, text }))
  };

  return (
    <div className="Test">
      <form className="App" onSubmit={ handleSubmit }>
        <h3>Form Test</h3>
        <br/>
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
      <br/>
      <section className="App">
        <h3>Posts Test</h3>
        {
          data.map((el,id) => (
            <p 
              data-id={ id } 
              key={ el._id }
            >→ { el.title }
            </p>
          ))
        }
      </section>
      <div className="App">
        <p>-----------------</p>
        <ul>
          <li>MERN stack deployed to Heroku</li>
          <li>connected to Atlas Cluster</li>
          <li>working production site API calls</li>
        </ul>
      </div>
    </div>
  );
}