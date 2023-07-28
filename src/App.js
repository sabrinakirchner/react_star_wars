import logo from './logo.svg';
import './App.css';
import React ,{ useState, useEffect } from 'react';
import { getAllStarships } from './services/sw-api';
import StarshipsCard from './components/StarschipCard';


const App = () => {
  const [starships, setStarships ] = useState([]); 
  const [error, setError ] = useState(null);


  useEffect(() => { //hook takes a callback function as its first arguments 
    //wich will be executed after the component is done 
    async function fetchStarships(){
        const {data, error} = await getAllStarships();
        if(error){ //if there is a error 
          setError(error);
        }else{
          setStarships(data.result); 
        }
    }
    fetchStarships(); 
  }, []);

  return (
    <div>
      <h1> Starships </h1>
      {error ?(
        <div>{error}</div>
      ) :( 
      <div>
        {starships?.map((starship) =>(//? check the starships is not 'null' or 'undef' 
        //before call the map, prevent it to break in case starships is empty or not initialized
          <StarshipsCard key={starship.name} name={starship} />
        //for each starship component the key prop is used for react to keep track of individual 
        //components efficientlly. 

      ))}
    </div>
      )}
  </div>
  );
};

export default App;
