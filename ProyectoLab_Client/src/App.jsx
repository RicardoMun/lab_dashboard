import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <h1>Home</h1> } />
        <Route path="/login" element={ <h1>Login</h1> } />
        <Route path="/register" element={ <h1>Register</h1> } />
        <Route path="/tasks" element={ <h1>Task page</h1> } />
        <Route path="/add-task" element={ <h1>Add task</h1> } />
        <Route path="/tasks/:id" element={ <h1>Update task</h1> } />
        <Route path="/profile" element={ <h1>Profile</h1> } />
      </Routes>
      <div className="App">
        <h1>Lab Client</h1>
      </div>
    </BrowserRouter>
  )
}

export default App;