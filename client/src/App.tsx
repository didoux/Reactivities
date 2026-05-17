
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

interface Activity {
  id: string;
  title: string;
}

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(response => setActivities(response.data))

      return () => {}
  }, []);

  // Return JSX to render the activities in a list
  // RSX is the syntax extension for JavaScript that allows us to write HTML-like code in our React components. It is used to describe the UI structure and appearance of our components. In this case, we are using JSX to create a simple list of activities that we fetched from the API. Each activity is rendered as a list item with its title displayed.
  return (
    <>
      <Typography variant='h3'>Reactivites</Typography>
      <List>
        {activities.map(activity => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default App
