import './App.css';
import ControlledForm from './components/ControlledForm';
import Display from './components/Display';
import { useState } from 'react';

function App() {
  // Create state to hold question data for question to be passed to Display as a prop
  const [question, setQuestion] = useState ({})
  const [answer, setAnswer] = useState ({})

  return (
    <div className="App">
      <h1>jQuery</h1>
      <ControlledForm setQuestion={setQuestion} /> 
      {/* setAnswer={setAnswer} */}
      <Display question={question} answer={answer}/>
    </div>
  );

}

export default App;
