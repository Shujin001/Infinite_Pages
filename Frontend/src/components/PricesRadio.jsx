import { Box, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'

const PricesRadio = ({handleFilter}) => {
    let [book_price, setBookPrice] = useState([])
    const prices = [
        {
            id: 0,
            name: "ALL",
            value: []
        },
        {
            id: 1,
            name: "Upto Rs.1000",
            value: [0, 999]
        },
        {
            id: 2,
            name: "Rs.1000 - Rs.10000",
            value: [1000, 9999]
        },
        {
            id: 3,
            name: "Rs.10000 - Rs.100000",
            value: [10000, 99999]
        },
        {
            id: 4,
            name: "Rs.100000 Rs.100000",
            value: [100000, 999999]
        },
        {
            id: 5,
            name: "Above Rs.100000",
            value: [1000000, 999999]
        }
    ]

    const handleChange = e =>{
        let price = prices.find(item=>item.id == e.target.value)
        setBookPrice(price.value)
        handleFilter("book_price", price.value)
    }

    return (
        <Box p={3}>
            <Typography variant='h4'>
                Prices
            </Typography>
            <RadioGroup>
                {
                    prices.map(price => {
                        return <FormControlLabel control={<Radio
                            icon={<i className='bi bi-bookmark' />}
                            checkedIcon={<i className='bi bi-bookmark-check-fill' />}
                            value={price.id}
                            onChange={handleChange}
                        />}
                            label={price.name} />
                    })
                }
            </RadioGroup>
        </Box>
    )
}

export default PricesRadio