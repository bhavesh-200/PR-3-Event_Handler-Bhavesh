import { useState } from "react";

// import React, { useState } from 'react';
function FormComponent({onSubmit}) {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass the data to the parent
    setFormData({ name: '', email: '' }); // Clear the form
  };

  return (
    <form onSubmit={handleSubmit} style={{textAlign: 'center'}}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        //   style={{ marginLeft: '10px', padding: '5px', width: '100%' }}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        //   style={{ marginLeft: '10px', padding: '5px', width: '100%' }}
        />
      </div>
      <button type="submit" style={{}}>
        Submit
      </button>
    </form>
  );
}
export default FormComponent;