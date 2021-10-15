import React,  { useState, useEffect } from "react";
import { Route, Link } from 'react-router-dom';
import  Homepage from './components/Homepage';
import Form from './components/Form';
import axios from 'axios';
import formSchema from './formSchema'
import * as yup from 'yup';

const initialFormValues = {
  size:'',
  pepperoni:false,
  sausage:false,
  canadianBacon:false,
  onions:false,
  specialText:'',
  name:''
}
const initialFormErrors={
  name: ''
}

const App = () => {

  const [formValues, setFormValues]=useState(initialFormValues);
  const [orders, setOrders]=useState([])
  const [formErrors, setFormErrors]=useState(initialFormErrors)
    
  const change= (evt) =>{
    setFormValues({ ...formValues, [evt.target.name]: evt.target.value })
  }

  const postNewOrder = newOrder =>{
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res=>{
        setOrders([{size: res.data.size, pepperoni: res.data.pepperoni, sausage: res.data.sausage, canadianBacon: res.data.canadianBacon, onions: res.data.onions, specialText: res.data.specialText, name: res.data.name},...orders]);
        console.log(res)
      }).catch(err=>{
        console.error(err);
      }).finally(()=>{
        setFormValues(initialFormValues)
      })
  }


  const validate= (name, value) =>{
    yup.reach(formSchema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]:''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const submit = evt => {
    const newOrder = {
        size: formValues.name.trim(),
        pepperoni: !!formValues.terms,
        sausage: !!formValues.sausage,
        canadianBacon: !!formValues.canadianBacon,
        onions: !!formValues.onions,
        specialText: formValues.specialText.trim(),
        name: formValues.name.trim()
    }
    
    postNewOrder(newOrder)
  }

  return (
    <div className="App">
       <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/pizza" id="order-pizza">Order</Link>
        </nav>
      </header>
      <h1>Lambda Eats</h1>
      <Route exact path="/">
        <Homepage/>
      </Route>
      <Route path="/pizza">
        <Form 
          change={change} 
          values={formValues} 
          submit={submit}
          errors={formErrors}
          />
      </Route>
    </div>
  );
};
export default App;
