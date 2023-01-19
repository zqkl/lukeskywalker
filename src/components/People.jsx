//export
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from 'axios'
function People(){
    const navigate = useNavigate();
    const {id} = useParams();
    const[people,setPeople] = useState(null);
    
    useEffect(() =>{
        axios
        .get(`https://swapi.dev/api/people/${id}`)
        .then(res => {
            console.log(res.data)
            setPeople(res.data)

    })
        .catch(() => navigate('/err'));
    },[id]);

    return(
        <div>
            {people&& (
                <>
                <div>
                    <h1>{people.name}</h1>
                    <p>Height: {people.height} cm</p>
                    <p>Mass: {people.mass}</p>
                    <p>Hair Color: {people.hair_color}</p>
                    <p>Skin Color: {people.skin_color}</p>
                </div>
                </>
            )}
        </div>
    )
}
export default People;
