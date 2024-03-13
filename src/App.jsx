import{ useEffect, useState } from 'react';
import Card from './Card';
import './App.css'; // Make sure to create some basic styles for the cards in App.css

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycby-Inc7yLk_mDoDbtIRb_9qi8w8th2E5DNNsQEvgZB4icCOxTLg7HANB5Yhg9R17Odh/exec')
      .then((response) => response.json())
      .then((json) => {
        setData(json); // Assuming the response is an array, update the state
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Student data</h1>
      <div className="cards-container">
        {data.map((item, index) => (
          <Card key={index} name={item.Name} role={item.Roll} course={item.Course} year={item.Year} />
        ))}
      </div>
    </div>
  );
}

export default App;