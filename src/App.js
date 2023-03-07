
import { useState } from 'react';
import './App.css';
import Container from './components/Container';
import Display from './components/Display';
import MyForm from './components/MyForm';

function App() {
  const[nameList, setNameList] = useState([])

  const addToList = name =>{
    setNameList([...nameList, name])
  }
  return (
    <div className="App">
      <MyForm addToList={addToList}/>
      <hr />
      <Container nameList={nameList}/>
    </div>
  );
}

export default App;
