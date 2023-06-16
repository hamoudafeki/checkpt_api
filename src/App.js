import { useState , useEffect} from 'react';
import './App.css';
import UserList from './Components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Details from './Components/Details';


function App() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(users)
  const getData=()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(res=>setUsers(res)).then(setLoading(false)).catch(err=>console.log(err))
  }
  useEffect(() => {
    getData()
  }, [])
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<UserList list={users} loading={loading}/>}/>
          <Route path="/info/:id" element={<Details/>}/>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
