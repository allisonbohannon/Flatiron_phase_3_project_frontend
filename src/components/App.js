import React, {useState, useEffect} from "react";
import { Route, Routes} from "react-router";
import  NavigationBar  from "./NavigationBar"
import ByAuthor from "./ByAuthor"
import ByGenre from "./ByGenre"
import CompletedReads from "./CompletedReads"
import Home from "./Home"

const sampleData = [
    {title: "book1", author: "author1", genre: "genre1", id: 1},
    {title: "book2", author: "author2", genre: "genre2", id: 2},
    {title: "book3", author: "author3", genre: "genre3", id: 3}]

function App() {

    const [ bookList, setBookList ] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/books")
          .then((r) => r.json())
          .then((bookList) => setBookList(bookList));
      }, []);

    
    function onAdd(obj) {
        setBookList([...bookList, obj])
    }

    function onUpdate(newBook) {
        const updatedBookList= bookList.map(book => {
            if (book.id === newBook.id) { 
              return newBook
            } else {
              return book}
            }
          )
          setBookList(updatedBookList)
    }

    function onDelete(id) {
        const updatedBookList= bookList.filter(book => {
            return (book.id !== id)
          })
          setBookList(updatedBookList)
    }

    return (
        <div>
            <NavigationBar/>
            <Routes>
                <Route path="/search_by_author" element={<ByAuthor 
                    bookList={bookList}
                />} />
                <Route path="/search_by_genre" element={<ByGenre 
                    bookList={bookList}
                />} />
                <Route path="/completed_reads" element={<CompletedReads
                    bookList={bookList}
                    handleUpdate={onUpdate}
                    handleDelete={onDelete}
                />} />
                <Route path="/" element={<Home
                    bookList={bookList}
                    handleAdd={onAdd}
                    handleUpdate={onUpdate}
                    handleDelete={onDelete}
                />} />
            </Routes>
        </div>
    )

}

export default App;

