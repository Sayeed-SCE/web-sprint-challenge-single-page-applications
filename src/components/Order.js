
import React from 'react'
export default function Order(props) {
  const {
    values,
    submit,
    change,
    errors,
  } = props;

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    const { name, value, checked, type } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse)
  }
  return (
    <form className='form container' id='pizza-form' onSubmit={onSubmit}>
     <div className='form-group inputs'>
        <h4>Please Build Your Pizza</h4>
        <div className='errors'>
          <div>{errors.name}</div>
        </div>
        <label>Name
          <input id='name-input'
            name='name'
            type='text'
            value={values.name}
            onChange={onChange}
          />
        </label>
        <label>Pizza Size
          <select id='size-dropdown'
            name='size'
            value={values.size}
            onChange={onChange}
          >
            <option value=''>-- Select a size --</option>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
          </select>
        </label>
      <div className='form-group checkboxes'>
        <h4>Toppings</h4>
        <label>Olive
          <input
            type='checkbox'
            name='olive'
            checked={values.olive}
            onChange={onChange}
          />
        </label>
        <label>Onion
          <input
            type='checkbox'
            name='onion'
            checked={values.onion}
            onChange={onChange}
          />
        </label>
        <label>Mushroom
          <input
            type='checkbox'
            name='mushroom'
            checked={values.mushroom}
            onChange={onChange}
          />
        </label>
        <label>Garlic
          <input
            type='checkbox'
            name='garlic'
            checked={values.garlic}
            onChange={onChange}
          />
        </label>
        <label>Special Instructions
          <input id='special-text'
            name='specialText'
            type='text'
            value={values.specialText}
            onChange={onChange}
          />
        </label>
      </div>
      <button id='order-button' type='submit'>submit order</button>
      </div>
    </form>
  )
}
