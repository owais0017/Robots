import './App.css';
import 'tachyons';
import SearchBar from './search';
import CardList from './cardList';
import { useEffect, useState } from 'react';
import Footer from './Footer';

function App() {
  const [Robots,setRobots] = useState([]);
  const [searchField, setSearchfield] = useState('')

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => {setRobots(user)})
  },[])
  const handleSearchChange = (e) => {
    setSearchfield(e.target.value)
    
  }
  const popingRobots = Robots.filter(robot =>{
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })
  return(
    <div>
      <h1 className='tc'>Search Robots</h1>
      <div className='tc'>
      <SearchBar onChangeSearch = {handleSearchChange}/>
      <CardList Robots={popingRobots}/>
      </div>    
      <Footer/> 
    </div>
  );
}

export default App;
