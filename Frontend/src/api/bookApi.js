const API = `http://localhost:5000`

export const getAllBooks = (filters) => {
    return fetch(`${API}/getallbooks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(filters)
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}
export const addBook = (book, token) => {
    return fetch(`${API}/addbook`, {
        method: "POST",
        headers: {
            Authorization: token
        },
        body: book
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}
export const editBook = (id, book, token) => {
    return fetch(`${API}/updatebook/${id}`, {
        method: "PUT",
        headers: {
            Authorization: token
        },
        body: book
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}

export const getBookDetails = (id) => {
    return fetch(`${API}/getbookdetails/${id}`)
        .then(response => response.json())
        .catch(error => console.log(error))
}
export const deleteBook = (id, token) => {
    return fetch(`${API}/deletebook/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: token
        }
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}
export const getAllBooksByGenre = (id) => {
    return fetch(`${API}/getallbooksbygenre/${id}`)
        .then(response => response.json())
        .catch(error => console.log(error))
}