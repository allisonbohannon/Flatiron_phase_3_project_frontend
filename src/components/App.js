import React, {useState, useEffect} from "react";
import { Route, Routes} from "react-router";
import  NavigationBar  from "./NavigationBar"
import CompletedReads from "./CompletedReads"
import Home from "./Home"

function App() {

    const [ bookList, setBookList ] = useState([])
    const [ filterType, setFilterType ] = useState(null)

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
            
                <Route path="/read" element={<CompletedReads
                    bookList={bookList}
                    handleUpdate={onUpdate}
                    handleDelete={onDelete}
                />} />
                 <Route path="/unread" element={<CompletedReads
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

