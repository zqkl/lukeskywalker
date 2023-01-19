import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Form(){
    const navigate = useNavigate();
    const [formState,setFormState] = useState({
        resource: 'people',
        id: ''
});

    const handleSubmit = (e) =>{
        e.preventDefault();
        const {resource,id} = formState;
        navigate(`/${resource}/${id}`)

    };

    const handleChange = (e) =>{
        const{name, value} = e.target;
    setFormState({
        ...formState,
        [name]:value

    })
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <select name='resource' id='resource' value={formState.resource} onChange={handleChange}>
                Search for:
                <option value="people">People</option>
                <option values="planets">Planets</option>
                </select>
                <input type="number" name="id"  id="id" value={formState.id} onChange={handleChange}/>
                <button type="submit">Search</button>

            </div>
        </form>
    )
}

export default Form;