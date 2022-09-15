import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthorForm = (props) => {
    const {initialName, onSubmitProp} = props;
    const [name, setName] = useState(initialName); 

    const navigate = useNavigate()

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name})
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name:</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px'}}>
                <button type="submit">Submit</button>
                <button onClick={()=>navigate('/authors')}>Cancel</button>
            </div>
        </form>
    )
}

export default AuthorForm