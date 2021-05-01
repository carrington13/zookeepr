const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');
const { animals } = require('../../data/animals');

const router = require('express').Router();

router.get('/animals', (req, res) => {
    let results = animals;
    // if theres a query
    if (req.query) {
    // call the function baby boy
        results = filterByQuery(req.query, results);
    }
    // send back {animals} as a json
    res.json(results);
})

router.get('/animals/:id', (req, res) => {
    const result = findById(req.params.id, animals);
    
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
})

//router.post is a route that listens for POST requests, not GET requests.
// POST requests represent the action of a client wanting the server to accept data rather than send it like in a GET
router.post('/animals', (req, res) => {
    // req.body is where our incoming content will be
    console.log(req.body);
    // set id based on what the next index of the array will be
    req.body.id = animals.length.toString();

    // if any data in req.body is incorrect, send 400 error back
    if (!validateAnimal(req.body)) {
        res.status(400).send('The animal is not properly formatted.');
    } else {
        // add animal to json file and animals array in this function
        const animal = createNewAnimal(req.body, animals);
        res.json(animal);
    }
}); 


module.exports = router;