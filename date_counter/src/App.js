import { useState } from "react";

const buttonStyle = {
  padding: '5px 10px',
  margin: '10px 10px',
  fontSize: '20px',
  cursor: 'pointer',
};

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const handleReset = () => {
    setStep(1);
    setCount(0);
  }
  const today = new Date();
  const newDate = new Date();
  newDate.setDate(today.getDate() + count);


  const messages = [
    `${count} days from today is ${newDate.toDateString()}`,
    `Today is ${today.toDateString()}`,
    `${Math.abs(count)} days ago was ${newDate.toDateString()}`,
  ];

  
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input type="range" min='0' max='10' value={step} onChange={(e) => setStep(Number(e.target.value))} />
        <p>{step}</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={() => setCount(c=> c - step)}  style={buttonStyle}>-</button>
        <input type="text" value={count} onChange={e=> setCount(Number(e.target.value))} />
        <button onClick={() => setCount(c=> c + step)} style={buttonStyle}>+</button>
      </div>
      <p style={{textAlign: 'center', marginTop: '20px'}}>{count === 0 && messages[1]}</p>
      <p style={{textAlign: 'center', marginTop: '20px'}}>{count < 0 && messages[2]}</p>
      <p style={{textAlign: 'center', marginTop: '20px'}}>{count > 0 && messages[0]}</p>
      {(step !== 1 || count !== 0) && <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={handleReset} style={{padding: '8px 15px'}}>Reset</button>
      </div>}
    </>
  );
}

export default function App() {
  return (
    <>
      <Counter />
    </>
  );
}
