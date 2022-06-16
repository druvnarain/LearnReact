import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  const [activities, setActivity] = useState([]);

  useEffect(() =>{
    axios.get('http://localhost:5000/api/activities').then(response => {
      console.log(response);
      setActivity(response.data);
    });
  }, []); // empty [] dep specifies only single call

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities' />
        <List>
          {activities.map((activity: any) => (
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          ))}
        </List>
    </div>
  );
}

export default App;
