import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline  } from "@mui/icons-material";
import { Link,} from "react-router-dom";
import './BookList.css'

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/users/api/books')
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  console.log(books)
  const onDelete = (ID)=>{
    setBooks(books.filter((item) => item._id!== ID))
    axios.delete("http://localhost:5000/users/api/books/"+ID).then((response)=>{
     alert('Book Deleted Successfully')
  
    }).catch((err)=>{
     alert('Book Not deleted'+err)
   
    })
 }
 

 const columns = [
    { field: 'id', headerName: 'ID',hide:true },
    {
      field: 'title',
      headerName: 'Title',
      align:"left",
      headerAlign:"left",
      width: 100,
      
    },
    {
      field: 'author',
      headerName: 'Author',
      
      width: 120,
      align:"left",
      headerAlign:"left"
    },
    {
        field:'no_of_pages',
        headerName:"Pages",
        width: 100,
    },
    {
        field:'published_at',
        headerName:"Date of publication",
        width: 250,
        renderCell:(params)=>{
            return(
                <div>{params.row.published_at.slice(0,10)}</div>
            )
        }
    },
    {
        field:'action',
        headerName:"Action",
        width:150,
        renderCell:(params)=>{
            return(
                <>
                  <Link to={"/book/"+params.row._id}>
                    <button className="userListEdit" >Edit</button>
                    </Link>
                <DeleteOutline className="userListDelete" onClick={()=>onDelete(params.row._id )}/>
                </>
            )
        }
    }
  ];

  
  return (
    <div className='divContainer' style={{height: "100vh"}}>
      {books && <DataGrid
        rows={books }
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(row) => row._id}
      />}
    </div>
    
  );
}

export default BookList;
