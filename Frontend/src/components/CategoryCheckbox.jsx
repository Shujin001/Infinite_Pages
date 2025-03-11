import React, { useEffect, useState } from 'react'
import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'
import { getAllGenres } from '../api/genreApi'

const genreCheckbox = ({handleFilter}) => {
    let [genres, setGenres] = useState([])
    let [selected, setSelected] = useState([])

    useEffect(() => {
        getAllGenres()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setGenres(data)
                }
            })
    }, [])

    const handleChange = e =>{
        let newSelected = selected
        let newGenre = e.target.value
        
        let genreExists = newSelected.findIndex(item=> item === newGenre)

        if(genreExists!=-1){
            newSelected.splice(genreExists, 1)
        }
        else{
            newSelected.push(newgenre)
        }
        setSelected(newSelected)
        handleFilter("genre", newSelected)
    }


    return (
        <Box p={3}>
            <Typography variant='h4'>
                Departments
            </Typography>
            <FormGroup>
                {
                    genres.length > 0 &&
                    genres.map(genre => {
                        return <FormControlLabel control={<Checkbox
                            icon={<i className='bi bi-bookmark' />}
                            checkedIcon={<i className='bi bi-bookmark-check-fill' />}
                            value={genre._id}
                            onChange={handleChange}
                        />}
                            label={genre.genre_name} />
                    })
                }
            </FormGroup>
        </Box>
    )
}

export default genreCheckbox