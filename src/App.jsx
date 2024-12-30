// import React, { useState } from 'react';
import FormComponent from './components/FormComponent';
import DisplayComponent from './components/DisplayComponent';
import { useState } from 'react';

function App() {
  const [submittedData, setSubmittedData] = useState([])
  console.log(submittedData)
  const handleFormSubmit = (data) => {
    const newSubmittedData = [...submittedData, data]
    setSubmittedData(newSubmittedData);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>React Form with Components</h2>
      <FormComponent onSubmit={handleFormSubmit} />
      {submittedData && <ul>{submittedData.map(data => <li key={data.name}><DisplayComponent data={data} /></li>)}</ul>}
    </div>
  );
}

export default App;