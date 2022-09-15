import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import AuthorForm from '../components/AuthorForm';
    
const NewAuthor = (props) => {
    const [author, setAuthor] = useState({});
    const [authors, setAuthors] = useState([])
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthors(res.data);
            })
            .catch(err => console.error(err));
    },[]);


    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors', author)
            .then(res => setAuthors([...authors, res.data]))
            .then(() => navigate('/authors'))
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
            <h2>Add a new author:</h2>
            {errors.map((err, index) => <p key={index} style={{color: 'red'}}>{err}</p>)}
            <AuthorForm
                onSubmitProp={createAuthor}
                initialName=""
            />
        </div>
        
    )
}
    
export default NewAuthor;