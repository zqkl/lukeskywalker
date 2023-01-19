//export
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'
function Planets(){
    const {id} = useParams();
    const[planets,setPlanets] = useState(null);
    
    useEffect(() =>{
        axios
        .get(`https://swapi.dev/api/planets/${id}`)
        .then(res => {
            console.log(res.data)
            setPlanets(res.data)

    })
        .catch((err) => console.log(err));
    },[id]);

    return(
        <div>
            {planets&& (
                <>
                <div>
                    <h1>{planets.name}</h1>
                    <p>Climate: {planets.climate}</p>
                    <p>Terrain: {planets.terrain}</p>
                    <p>Surface Water: {planets.surface_water}</p>
                    <p>Population: {planets.population}</p>
                </div>
                </>
            )}
        </div>
    )
}
export default Planets;