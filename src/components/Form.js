import React from 'react'

const Form = (props) =>{


    const onSubmit = evt => {
        evt.preventDefault()
        props.submit()
    }

    return(
        <div className="form-wrapper">
            <form id="pizza-form" onSubmit={onSubmit}>
                <h1>Build Your Own Pizza</h1>
                <label>
                    <h3>Choice of Size</h3><p>Required</p>
                    <select name="size" onChange={props.change} id='size-dropdown'>
                        <option value="">--- Select Size ---</option>
                        <option value="Large">Large</option>
                        <option value="Medium">Medium</option>
                        <option value="Small">Small</option>
                    </select>
                 </label>
                 <label id='toppings-wrapper'>
                     <h3>Toppings</h3>
                    <label>Pepperoni &nbsp;
                        <input
                            type="checkbox"
                            onChange={props.change}
                            name='pepperoni'
                            checked={props.values.pepperoni}
                        />
                    </label>
                    <label>Sausage &nbsp;
                        <input
                            type="checkbox"
                            onChange={props.change}
                            name='sausage'
                            checked={props.values.sausage}
                        />
                    </label>
                    <label>Canadian Bacon &nbsp;
                        <input
                            type="checkbox"
                            onChange={props.change}
                            name='canadianBacon'
                            checked={props.values.canadianBacon}
                        />
                    </label>
                    <label>Onions &nbsp;
                        <input
                            type="checkbox"
                            onChange={props.change}
                            name='onions'
                            checked={props.values.onions}
                        />
                    </label>
                </label>
                <label>
                    <h3>Special Instructions</h3>
                    <input id = 'special-text'
                    type="text"
                    name="specialText"
                    value={props.values.specialText}
                    placeholder='Enter special instructions here'
                    onChange={props.change}
                    maxLength="60"
                    />
                </label>
                <label>
                    <h3>Your Name</h3>
                    <p>Required</p>
                    <input id = 'name-input'
                    type="text"
                    name="name"
                    value={props.values.name}
                    placeholder='Name'
                    onChange={props.change}
                    minLength="2"
                    />
                </label>
                <div className='errors'>
                    <p>{props.errors.name}</p>
                </div>
                <input type='submit' value='Submit your order'/>
            </form>
        </div>
    )
}

export default Form