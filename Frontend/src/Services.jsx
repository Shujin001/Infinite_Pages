import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Services = () => {
    return (
        <>
            <Typography variant='h4' textAlign='center' color='dark' padding={5}
             sx={{ textDecoration: 'underline' }}>
                Services
            </Typography>
            <Box display={'flex'} padding={5}>
                <Box width={'50%'} padding={5} bgcolor={'grey'} color={'white'} >
                    <Typography variant='h4' paddingBottom={2} fontWeight={600}>
                        Featured title
                    </Typography>
                    <Typography>
                        Paragraph of text beneath the heading to explain the heading.
                        We'll add onto it with another sentence and probably just keep
                        going until we run out of words.
                    </Typography>
                    <Button variant='contained' halfWidth sx={{ marginTop: '10px' }}>Primary Button</Button>
                </Box>
                <Box width={'50%'} padding={5} bgcolor={'grey'} marginLeft={2} marginRight={2} color={'white'}>
                    <Typography variant='h4' paddingBottom={2} fontWeight={600}>
                        Featured title
                    </Typography>
                    <Typography>
                        Paragraph of text beneath the heading to explain the heading.
                        We'll add onto it with another sentence and probably just keep
                        going until we run out of words.
                    </Typography>
                    <Button variant='contained' halfWidth sx={{ marginTop: '10px' }}>Primary Button</Button>
                </Box>
                <Box width={'50%'} padding={5} bgcolor={'grey'} color={'white'}>
                    <Typography variant='h4' paddingBottom={2} fontWeight={600}>
                        Featured title
                    </Typography>
                    <Typography>
                        Paragraph of text beneath the heading to explain the heading.
                        We'll add onto it with another sentence and probably just keep
                        going until we run out of words.
                    </Typography>
                    <Button variant='contained' halfWidth sx={{ marginTop: '10px' }}>Primary Button</Button>
                </Box>
            </Box>
        </>
    )
}

export default Services