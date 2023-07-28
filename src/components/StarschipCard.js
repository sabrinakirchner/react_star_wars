import React from "react";

//starshipsCard components takes a starship object as a prop and renders a 'div' element showing 
//the name of the starship. 
const StarshipsCard = ({ starship }) => {
    return <div>{starship.name}</div>
};

export default StarshipsCard;
