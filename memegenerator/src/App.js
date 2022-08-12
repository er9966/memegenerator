import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [templates, setTemplates] = useState([]);

  // fetch all the memes at once
  useEffect(() => {
    // fetching from API, read as json
    fetch('https://api.imgflip.com/get_memes').then(x => 
    // keep the memes as an array state
      x.json().then(response => setTemplates(response.data.memes)))
  } , [])



  return (<div style={{textAlign: "center"}}>{
    templates.map(template => {
      return <img key = {template.id} src ={template.url} alt={template.name}/>;

    })

    }
    

  </div>);
}

export default App;
