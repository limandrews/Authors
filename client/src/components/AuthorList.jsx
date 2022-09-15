import {Link} from 'react-router-dom'
import DeleteButton from './DeleteButton'
    
const AuthorList = (props) => {
    const {authors, removeFromDom} = props

    return (
        <div>
            {authors.map( (author, i) => {
                return (
                    <div key={i} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px'}}>
                        <p>{author.name}</p>
                        <Link to={"/authors/" + author._id + "/edit"}><button>Edit</button></Link>
                        <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)} />
                    </div>
                )
            })
            }
        </div>
    )
}
    
export default AuthorList;