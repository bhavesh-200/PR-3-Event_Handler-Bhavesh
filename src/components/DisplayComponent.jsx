// import React from 'react';
function DisplayComponent({ data }) {
  return (
    <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <h3>Submitted Data:</h3>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
    </div>
  );
}

export default DisplayComponent;
