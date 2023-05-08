const express = require('express')
const router = express.Router()
const arrayOfLength = 5
router.get('/', (request, response) => {
    response.send(`This is Service Page`)
})

router.get('/newUser', (request, response) => {
    response.send(`the new`)
})

router.route('/:id')
    .get((request, response) => {
        const userId = Number(request.params.id)
        if (userId <= arrayOfLength) {
            response.send(` ${request.service.name}`)
        }
        else{
            response.send('Invalid NUmber!')
        }
    })
// .put((request,response)=>{
//     response.send(`GET method on  user page with id ${request.params.id}`)

// })
// .delete((request,response)=>{
//     response.send(`GET method on  user page with id ${request.params.id}`)
// })

const users = [
    {
        name: 'Mobile App Development'
    },
    {
        name: 'Data Science'
    },
    {
        name: 'Web Development'
    },
    {
        name: 'Machine learning'
    },
    {
        name: 'Data Analysis'
    },
]

router.param('id', (request, response, next, id) => {
    request.service = users[id]
    next()
})
module.exports = router