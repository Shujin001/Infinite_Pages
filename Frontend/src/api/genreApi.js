const API = `http://localhost:5000`

export const getAllGenres =() =>{
   return fetch(`${API}/getAllGenres`)
   .then(response => response.json())
   .catch(error => console.log(error))
}
export const getGenreDetails = (id) => {
   return fetch(`${API}/getgenredetails/${id}`)
       .then(response => response.json())
       .catch(error => console.log(error))
}

export const addGenre = (genre_name,token) => {
   //{"genre_name": "test genre"}
   let genre = {  genre_name }
   return fetch(`${API}/addgenre`,{
       method : "POST",
       headers: {
           "Content-Type":"application/json",
           Authorization: token
       },
       body: JSON.stringify(genre)
   })
   .then(response => response.json())
   .catch(error => console.log(error))
}

export const editGenre = (id,genre_name,token) => {
   // {"genre_name": "test genre"}
   let genre = { genre_name }
   return fetch(`${API}/updategenre/${id}`, {
       method: "PUT",
       headers: {
           "Content-Type": "application/json",
           Authorization: token
       },
       body: JSON.stringify(genre)
   })
       .then(response => response.json())
       .catch(error => console.log(error))
   }
   
   export const deleteGenre = (id, token) => {
       return fetch(`${API}/deletegenre/${id}`,{
           method: "DELETE",
           headers:{

               Authorization: token
           }
           
       })
           .then(response => response.json())
           .catch(error => console.log(error))
   }