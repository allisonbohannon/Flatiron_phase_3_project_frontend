import React from 'react'
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

const AddNewForm = () => {

    const [formData, setFormData] = useState({
        title:"",
        author:"",
        genre:""
    })

    function handleChange(e) {
        const name = e.target.name;
        let value = e.target.value;
        setFormData({
            ...formData,
            [name]: value,
          });
    }

    function handleSubmit(e) {
        e.preventDefault(); 
        const newBookObj= {
            title:formData.title,
            author:formData.author,
            genre:formData.genre,
        }
        // fetch(`${process.env.REACT_APP_API_URL}/recipes`, { method: "POST", 
        // headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(newRecipeObj)
        // })
        // .then(response => response.json())
        // .then(data => handleAdd(data))

      setFormData({
        title:"",
        author:"",
        genre:""
      })
    }

  return (
    <Container>
    I Need to Read This!
    <Form className="mb-3" onSubmit={handleSubmit}>
        <Form.Control type="text" 
                name="title" 
                placeholder="title" 
                onChange={handleChange} 
                value={formData.title}>
        </Form.Control> 
                <br></br>
        <Form.Control type="text" 
                name="author" 
                placeholder="author" 
                onChange={handleChange} 
                value={formData.author}>
        </Form.Control> 
                <br></br>
        <Form.Control type="text" 
                name="genre" 
                placeholder="genre" 
                onChange={handleChange} 
                value={formData.genre}>
        </Form.Control> 
        <br></br>
        <Button type="submit">Submit</Button>
    </Form>
</Container>
  )
}

export default AddNewForm