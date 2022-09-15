import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AuthorList from '../components/AuthorList';
import {Link} from 'react-router-dom'

const Main = () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }

    return (
        <div style={{textAlign: 'center'}}>
            <Link to={"/authors/new"}><h2>Add an Author</h2></Link>
            {loaded ? 
                <AuthorList authors={authors} removeFromDom={removeFromDom}/> :
                <h3>LOADING</h3>
            }
        </div>
    )
}

export default Main