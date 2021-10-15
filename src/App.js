import React,  { useState, useEffect } from "react";
import { Route, Link } from 'react-router-dom';
import  Homepage from './components/Homepage';
import Form from './components/Form';
import axios from 'axios';

const initialFormValues = {
  size:'',
  pepperoni:false,
  sausage:false,
  canadianBacon:false,
  onions:false,
  specialText:'',
  name:''
}

const App = () => {

  const [formValues, setFormValues]=useState(initialFormValues);
  const [orders, setOrders]=useState([])
    
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
        <Form change={change} values={formValues} submit={submit}/>
      </Route>
    </div>
  );
};
export default App;
