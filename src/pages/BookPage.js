import React, { useEffect, useState } from "react";
import { API_URL } from "../API";
import axios from "axios";
import './Book.css'
import searchIcon from './searchIcon.svg'


function BookPage() {
    const [books,setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
   

        useEffect(()=> {
            axios.get(API_URL).then(res => {
              console.log(res.data)
              setBooks(res.data)
            }).catch(err => console.log(err))
        },[])

        
       
    
  return (
    <div className="body">
    <div className="app">
        {/* Search bar */}
        <div className="search">
        <input type="text"
        // value={searchTerm} 
        // onChange={(e)=>setSearchTerm(e.target.value)}
        placeholder="Search For Books"
        />
        <img src={searchIcon}
         alt="search" 
        //  onClick={()=>searchBooks(searchTerm)}
         />
      </div>

         <div className="container">
          {books.map((book) => {
            return <div className="book" key={book.id}>
            <div>
              <p style={{backgroundColor:""}}> Rating : {book.rating}</p>
            </div>
            <div>
            <img src={book.image_url} alt="Non"/>
            </div>
            <div>
              {/* <span>{Type}</span> */}
              <h5>Title : {book.title}</h5>
              <h6>Authors : {book.authors}</h6>
              <button style={{padding:"2px 7px", borderRadius:"6px"}}>Add to cart </button>

            </div>
          </div>
          })}
        </div>
      
    </div>
    </div>
  )
}

export default BookPage
