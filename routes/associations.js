const express = require('express')
const mysql = require('mysql')
const router = express.Router()


router.get("/associations", (req, res) => {
    const connection = getConnection()
    const queryString = "SELECT * FROM associations"
    connection.query(queryString, (err, rows, fields) => {
      if (err) {
        console.log("Failed to query for associations: " + err)
        res.sendStatus(500)
        return
      }
      res.json(rows)
    })
  })
const pool = mysql.createPool({
    connectionLimit: 10,
  host: '**************',
    user: '**************',
    password: '**************',
    database: '**************'
})
function getConnection() {
    return pool
}
router.post('/association_create', (req, res) => {
    console.log("Trying to create a new association...")
    console.log("How do we get the form data???")
  
    console.log("associations: " + req.body.create_association)
    
    const association = req.body.create_association
   
  
    const queryString = "INSERT INTO associations (association) VALUES (?)"
    getConnection().query(queryString, [association], (err, results, fields) => {
      if (err) {
        console.log("Failed to insert new association: " + err)
        res.sendStatus(500)
        return
      }
      console.log("Inserted a new association with id: ", results.insertId);
      res.end()
    })
  })
  
router.get('/associations/:id', (req, res) => {
    console.log("Fetching association with id: " + req.params.id)
    const connection = getConnection()

    const associationId = req.params.id
    const queryString = "SELECT * FROM associations WHERE id = ?"
    connection.query(queryString, [associationId], (err, rows, fields) => {
        if (err) {
        console.log("Failed to query for associations: " + err)
        res.sendStatus(500)
        return
        // throw err
        }
        console.log(" we fetched associations successfully")

        const associations = rows.map((row) => {
        return {association: row.association}
        })
        res.json(associations)
    })
})


router.get("/funnyfacts", (req, res) => {
  const connection = getConnection()
  const queryString = "SELECT * FROM funnyfacts"
  connection.query(queryString, (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for funnyfacts: " + err)
      res.sendStatus(500)
      return
    }
    res.json(rows)
  })
})
const pool = mysql.createPool({
  connectionLimit: 10,
 host: '**************',
    user: '**************',
    password: '**************',
    database: '**************'
})
function getConnection() {
  return pool
}
router.post('/funnyfact_create', (req, res) => {
  console.log("Trying to create a new funnyfact...")
  console.log("How do we get the form data???")

  console.log("setup: " + req.body.create_setup)
  
  const setup = req.body.create_setup


  const queryString = "INSERT INTO funnyfacts (setup) VALUES (?)  "
  getConnection().query(queryString, [setup], (err, results, fields) => {
    if (err) {
      console.log("Failed to insert new funnyfact: " + err)
      res.sendStatus(500)
      return
    }
    console.log("Inserted a new funnyfact with id: ", results.insertId);
    res.end()
  })
})

router.get('/funnyfacts/:id', (req, res) => {
  console.log("Fetching funnyfact with id: " + req.params.id)
  const connection = getConnection()

  const funnyfactId = req.params.id
  const queryString = "SELECT * FROM funnyfacts"
  connection.query(queryString, [funnyfactId], (err, rows, fields) => {
      if (err) {
      console.log("Failed to query for funnyfacts: " + err)
      res.sendStatus(500)
      return
      // throw err
      }
      console.log("I think we fetched funnyfacts successfully")

      const funnyfacts = rows.map((row) => {
      return {setup: row.setup}
      })
      res.json(funnyfacts)
  })
})

router.get("/jokes", (req, res) => {
  const connection = getConnection()
  const queryString = "SELECT * FROM jokes"
  connection.query(queryString, (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for jokes: " + err)
      res.sendStatus(500)
      return
    }
    res.json(rows)
  })
})
const pool = mysql.createPool({
  connectionLimit: 10,
 host: '**************',
    user: '**************',
    password: '**************',
    database: '**************'
})
function getConnection() {
  return pool
}
router.post('/joke_create', (req, res) => {
  console.log("Trying to create a new joke...")
  console.log("How do we get the form data???")

  console.log("setup: " + req.body.create_setup)
  console.log("punchline: " + req.body.create_punchline)
  const setup = req.body.create_setup
  const punchline = req.body.create_punchline

  const queryString = "INSERT INTO jokes (setup,punchline) VALUES (?, ?)"
  getConnection().query(queryString, [setup, punchline], (err, results, fields) => {
    if (err) {
      console.log("Failed to insert new joke: " + err)
      res.sendStatus(500)
      return
    }
    console.log("Inserted a new joke with id: ", results.insertId);
    res.end()
  })
})

router.get('/jokes/:id', (req, res) => {
  console.log("Fetching joke with id: " + req.params.id)
  const connection = getConnection()

  const jokeId = req.params.id
  const queryString = "SELECT * FROM jokes WHERE id = ?"
  connection.query(queryString, [jokeId], (err, rows, fields) => {
      if (err) {
      console.log("Failed to query for jokes: " + err)
      res.sendStatus(500)
      return
      // throw err
      }
      console.log("I think we fetched jokes successfully")

      const jokes = rows.map((row) => {
      return {setup: row.setup, punchline: row.punchline}
      })
      res.json(jokes)
  })
})


router.get("/pickuplines", (req, res) => {
  const connection = getConnection()
  const queryString = "SELECT * FROM pickuplines"
  connection.query(queryString, (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for pickuplines: " + err)
      res.sendStatus(500)
      return
    }
    res.json(rows)
  })
})
const pool = mysql.createPool({
  connectionLimit: 10,
 host: '**************',
    user: '**************',
    password: '**************',
    database: '**************'
})
function getConnection() {
  return pool
}
router.post('/pickupline_create', (req, res) => {
  console.log("Trying to create a new pickupline...")
  console.log("How do we get the form data???")

  console.log("setup: " + req.body.create_setup)
  
  const setup = req.body.create_setup


  const queryString = "INSERT INTO pickuplines (setup) VALUES (?)  "
  getConnection().query(queryString, [setup], (err, results, fields) => {
    if (err) {
      console.log("Failed to insert new pickupline: " + err)
      res.sendStatus(500)
      return
    }
    console.log("Inserted a new pickupline with id: ", results.insertId);
    res.end()
  })
})

router.get('/pickuplines/:id', (req, res) => {
  console.log("Fetching pickupline with id: " + req.params.id)
  const connection = getConnection()

  const pickuplineId = req.params.id
  const queryString = "SELECT * FROM pickuplines"
  connection.query(queryString, [pickuplineId], (err, rows, fields) => {
      if (err) {
      console.log("Failed to query for pickuplines: " + err)
      res.sendStatus(500)
      return
      // throw err
      }
      console.log("I think we fetched pickuplines successfully")

      const pickuplines = rows.map((row) => {
      return {setup: row.setup}
      })
      res.json(pickuplines)
  })
})


router.get("/questions", (req, res) => {
  const connection = getConnection()
  const queryString = "SELECT * FROM questions"
  connection.query(queryString, (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for questions: " + err)
      res.sendStatus(500)
      return
    }
    res.json(rows)
  })
})
const pool = mysql.createPool({
  connectionLimit: 10,
 host: '**************',
    user: '**************',
    password: '**************',
    database: '**************'
})
function getConnection() {
  return pool
}
router.post('/question_create', (req, res) => {
  console.log("Trying to create a new question...")
  console.log("How do we get the form data???")

  console.log("setup: " + req.body.create_setup)
  
  const setup = req.body.create_setup
 

  const queryString = "INSERT INTO questions (setup) VALUES (?)"
  getConnection().query(queryString, [setup], (err, results, fields) => {
    if (err) {
      console.log("Failed to insert new question: " + err)
      res.sendStatus(500)
      return
    }
    console.log("Inserted a new question with id: ", results.insertId);
    res.end()
  })
})

router.get('/questions/:id', (req, res) => {
  console.log("Fetching question with id: " + req.params.id)
  const connection = getConnection()

  const questionId = req.params.id
  const queryString = "SELECT * FROM questions WHERE id = ?"
  connection.query(queryString, [questionId], (err, rows, fields) => {
      if (err) {
      console.log("Failed to query for questions: " + err)
      res.sendStatus(500)
      return
      // throw err
      }
      console.log(" we fetched questions successfully")

      const questions = rows.map((row) => {
      return {setup: row.setup}
      })
      res.json(questions)
  })
})

module.exports = router
