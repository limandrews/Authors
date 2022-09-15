import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import AuthorForm from '../components/AuthorForm';
    
const Update = () => {
    const { id } = useParams();
    const [author, setAuthor] = useState({});
    const [loaded, setLoaded] = useState(false)
    const [errors, setErrors] = useState([])

    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                if (res.data.path === "_id"){
                    navigate('/authors')
                }
                setAuthor(res.data);
                setLoaded(true);
            })
    }, []);
    
    const updateAuthor = (author) => {
        axios.put('http://localhost:8000/api/authors/' + id, author)
            .then(res => navigate('/authors'))
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            })
    }
    
    return (
        <div style={{textAlign: 'center'}}>
            <h2>Edit this Author</h2>
            {errors.map((err, index) => <p key={index} style={{color: 'red'}}>{err}</p>)}
            {loaded ?
            
                <AuthorForm
                    onSubmitProp={updateAuthor}
                    initialName={author.name}
                />
                :
                <h3>LOADING</h3>
            
            }
        </div>
        
    )
}
    
export default Update;