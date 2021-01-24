import './App.css';
import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: 'Standup',
      day: '2021-01-25 9:15',
      reminder: true,
    },
    {
      id: 1,
      text: 'Coding',
      day: '2021-01-25 9:30',
      reminder: false,
    },
    {
      id: 2,
      text: 'Meeting',
      day: '2021-01-25 10:45',
      reminder: true,
    },
    {
      id: 3,
      text: 'Lunch',
      day: '2021-01-25 12:00',
      reminder: true,
    },])
    
    return (
    <div className="container">
      <Header title='Nice' />
      <Tasks tasks={tasks} />
    </div>
  );
}

// class App extends React.Component{
//   render(){
//     return <h1>Hello Schedule Tracker</h1>
//   }
// }
export default App;
