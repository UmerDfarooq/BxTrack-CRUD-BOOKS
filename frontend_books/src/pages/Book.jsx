import React, { useState, useEffect } from 'react';
import './Book.css'
import axios from 'axios';

export default function Book() {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [no_of_pages, setNoOfPages] = useState('');
    const [published_at, setPublishedAt] = useState('');


    useEffect(() => {
        
    }, []);
    const handleAddBook = async (event) => {
        event.preventDefault();
        try {

            const resp = await axios.post('http://localhost:5000/users/api/books', {
                title,
                author,
                no_of_pages,
                published_at
            });
            if (resp.status = 200) {
                alert('form submitted')

            }
            setTitle('');
            setAuthor('');
            setNoOfPages('');
            setPublishedAt('');
            fetchBooks();
        } catch (error) {
            console.error(error);
        }
    };

   

  


    return (
        <div class="bgForm  ">
            <form class="form" onSubmit={handleAddBook}>
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
                        placeholder=""
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
                        placeholder="PublishedAt"
                        value={published_at}
                        onChange={(event) => setPublishedAt(event.target.value)}
                        required
                    />
                    <div class="cut"></div>
                    <label for="Date" class="placeholder">Date</label>
                </div>
                <button type="text" class="submit">Submit</button>
            </form>
        </div>

    )
}
