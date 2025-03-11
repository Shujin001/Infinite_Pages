import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
    return (
        <>
            <Box>
                <Typography variant='h4' textAlign='center' color='warning' padding={5} 
                        bgcolor={'turquoise'} sx={{ textDecoration: 'underline' }}>
                    Contact
                </Typography>
                <Box display={'flex'}>
                    <Box width={'50%'} padding={5}>
                        <Typography variant='h5'>
                            Address <br /> Our Store <br /> Lagankhel, Lalitpur <br />01-5423889
                        </Typography>
                        <Typography variant='h6'>
                            Email: info@ourstore.com <br />Website: ourstore.com
                        </Typography>
                    </Box>
                    <Box width={'50%'} bgcolor={'orange'} p={'5'} padding={5}>
                        <Typography variant='h5'>
                            Form
                        </Typography>
                        <TextField label='E-mail' placeholder='enter your email here' fullWidth variant='outlined'/>
                        <TextField label='Subject' placeholder='enter your email here' fullWidth variant='outlined' type={'email'} sx={{marginTop:'10px'}}/>
                        <TextField label='Message' fullWidth sx={{marginTop:'10px'}} multiline rows={5}/>
                        
                        <Button variant='contained' fullWidth sx={{marginTop:'10px'}}>Submit</Button>
                    
                    </Box>

                </Box>
            </Box>
        </>
    )
}

export default Contact