//const BASE_URL ="https://swapi.dev/api/";

export async function getAllStarships() {
//handle errors that might occur during the API call 
//if there is an error in the API request the code inside the if block will be executed. 
 

    try{
    const response = await fetch('https://swapi.dev/api/');
    if(!response.ok){
    return {error: "Failed to fetch starship."};
    }
    return{ data: await response.json() };
    } catch (error) {
    return{ error:'An error occurred while fetching starship.'}
    }
    
}