import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";
import './EditBook.css'
export default function () {
    const { uid } = useParams();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [no_of_pages, setNoOfPages] = useState('');
    const [published_at, setPublishedAt] = useState('');
   
    const navigate = useNavigate();
    useEffect(  () => {
        
        axios.get("http://localhost:5000/users/api/books/" + uid).then((res) => {
            
            setTitle(res.data.title)
            setAuthor(res.data.author)
            setNoOfPages(res.data.no_of_pages)
            setPublishedAt(res.data.published_at.slice(0,10))
        })
    }, [uid])
    console.log(title)
    const handleEditBook =async(event)=>{
        event.preventDefault();
        const resp = await axios.put("http://localhost:5000/users/api/books/"+uid,{
            title,
            author,
            no_of_pages,
            published_at
        })
        if(resp.status=200){
            alert('book updated');
            navigate('/books')
        }
    }
    return (
        <div class="bgForm  ">
            <form class="form" onSubmit={handleEditBook}>
                <div class="title">Welcome</div>
                <div class="subtitle">Let's create your Book</div>
                <div className="input-container ic1">
                    <input
                        type="text"
                        className="input"
                        placeholder=""
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        required
                    />
                    <div class="cut"></div>
                    <label for="Title" class="placeholder">Title</label>
                </div>
                <div className="input-container ic1">
                    <input
                        type="text"
                        className="input"
                        placeholder=""
                        value={author}
                        onChange={(event) => setAuthor(event.target.value)}
                        required
                    />
                    <div class="cut"></div>
                    <label for="Author" class="placeholder">Author</label>
                </div>
                <div className="input-container ic1">
                    <input
                        type="text"
                        className="input"
                        placeholder=" "
                        value={no_of_pages}
                        onChange={(event) => setNoOfPages(event.target.value)}
                        required
                    />
                    <div class="cut"></div>
                    <label for="no_of_pages" class="placeholder">No_Of_Pages</label>
                </div>
                <div className="input-container ic1">
                    <input
                        type="date"
                        className="input"
                        placeholder=""
                        value={published_at}
                        onChange={(event) => setPublishedAt(event.target.value)}
                        required
                    />
                    <div class="cut"></div>
                    <label for="Date" class="placeholder">Date</label>
                </div>
                <button type="text" class="submit">Edit</button>
            </form>
        </div>
    )
}
