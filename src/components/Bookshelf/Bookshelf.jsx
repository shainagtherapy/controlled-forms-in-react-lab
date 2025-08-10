import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' }
    ]);

    const [newBook, setNewBook] = useState(
        { title: '',  author: '' }
    );

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewBook((prev) => (
        { ...prev, [name]: value, }
        ))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks(prev => [...prev, newBook]);
        setNewBook({ title: '', author: '' });
    };

    return (
    <div className="bookshelfDiv">

        <div className="formDiv">
            <h3>Add a Book</h3>

            <form onSubmit={ handleSubmit }>
                <label>Title<input type="text" name="title" value ={newBook.title} onChange={handleInputChange} />
                </label>

                <label>Author<input type="text" name="author" value={newBook.author} onChange= {handleInputChange} />
                </label>

                <button type="submit">Add Book</button>
            </form>
        </div>
    
        
        <div className="bookCardsDiv">
            {books.map((library, index) => (
                <div className="bookCard" key={index}>
                <h4>Title: {library.title}</h4>
                <p>Author: {library.author}</p>
                </div>
            ))}
        </div>
    </div>
    )
    
};

export default Bookshelf;