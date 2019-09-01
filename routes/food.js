// will contain all of my user related routes
const express = require('express')
const mysql = require('mysql')
const router = express.Router()


router.get("/food", (req, res) => {
    const connection = getConnection()
    const queryString = "SELECT * FROM food"
    connection.query(queryString, (err, rows, fields) => {
      if (err) {
        console.log("Failed to query for food: " + err)
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

router.post('/food_create', (req, res) => {
    console.log("Trying to create a new food...")
    console.log("How do we get the form data???")
  
    console.log("food: " + req.body.create_foodname)
    console.log("food image url: " + req.body.create_imageUrl)
    const food = req.body.create_foodname
    const imageUrl = req.body.create_imageUrl
  
    const queryString = "INSERT INTO food (foodName, imageUrl) VALUES (?, ?)"
    getConnection().query(queryString, [food, imageUrl], (err, results, fields) => {
      if (err) {
        console.log("Failed to insert new food: " + err)
        res.sendStatus(500)
        return
      }
  
      console.log("Inserted a new food with id: ", results.insertId);
      res.end()
    })
  })
  
router.get('/food/:id', (req, res) => {
    console.log("Fetching food with id: " + req.params.id)

    const connection = getConnection()

    const foodId = req.params.id
    const queryString = "SELECT * FROM food WHERE id = ?"
    connection.query(queryString, [foodId], (err, rows, fields) => {
        if (err) {
        console.log("Failed to query for food: " + err)
        res.sendStatus(500)
        return
        // throw err
        }

        console.log("I think we fetched food successfully")

        const food = rows.map((row) => {
        return {food: row.foodName, imageUrl: row.imageUrl}
        })

        res.json(food)
    })
})



router.get("/cities", (req, res) => {
  const connection = getConnection()
  const queryString = "SELECT * FROM cities"
  connection.query(queryString, (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for cities: " + err)
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

router.post('/city_create', (req, res) => {
  console.log("Trying to create a new city...")
  console.log("How do we get the form data???")

  console.log("city: " + req.body.create_cityname)
  console.log("city image url: " + req.body.create_imageUrl)
  const city = req.body.create_cityname
  const imageUrl = req.body.create_imageUrl

  const queryString = "INSERT INTO cities (cityName, imageUrl) VALUES (?, ?)"
  getConnection().query(queryString, [city, imageUrl], (err, results, fields) => {
    if (err) {
      console.log("Failed to insert new city: " + err)
      res.sendStatus(500)
      return
    }

    console.log("Inserted a new city with id: ", results.insertId);
    res.end()
  })
})

router.get('/cities/:id', (req, res) => {
  console.log("Fetching city with id: " + req.params.id)

  const connection = getConnection()

  const cityId = req.params.id
  const queryString = "SELECT * FROM cities WHERE id = ?"
  connection.query(queryString, [cityId], (err, rows, fields) => {
      if (err) {
      console.log("Failed to query for cities: " + err)
      res.sendStatus(500)
      return
      // throw err
      }

      console.log("I think we fetched cities successfully")

      const cities = rows.map((row) => {
      return {city: row.cityName, imageUrl: row.imageUrl}
      })

      res.json(cities)
  })
})  


router.get("/lifestyle", (req, res) => {
  const connection = getConnection()
  const queryString = "SELECT * FROM lifestyle"
  connection.query(queryString, (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for lifestyle: " + err)
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

router.post('/lifestyle_create', (req, res) => {
  console.log("Trying to create a new lifestyle...")
  console.log("How do we get the form data???")

  console.log("lifestyle type: " + req.body.create_lifestyletype)
  console.log("artist image url: " + req.body.create_imageUrl)
  const lifestyle = req.body.create_lifestyletype
  const imageUrl = req.body.create_imageUrl

  const queryString = "INSERT INTO lifestyle (lifestyletype, imageUrl) VALUES (?, ?)"
  getConnection().query(queryString, [lifestyle, imageUrl], (err, results, fields) => {
    if (err) {
      console.log("Failed to insert new lifestyle type: " + err)
      res.sendStatus(500)
      return
    }

    console.log("Inserted a new lifestyle type with id: ", results.insertId);
    res.end()
  })
})

router.get('/lifestyle/:id', (req, res) => {
  console.log("Fetching lifestyle with id: " + req.params.id)

  const connection = getConnection()

  const lifestyleId = req.params.id
  const queryString = "SELECT * FROM lifestyle WHERE id = ?"
  connection.query(queryString, [lifestyleId], (err, rows, fields) => {
      if (err) {
      console.log("Failed to query for lifestyle: " + err)
      res.sendStatus(500)
      return
      // throw err
      }

      console.log("I think we fetched lifestyle successfully")

      const lifestyle = rows.map((row) => {
      return {lifestyle: row.lifestyletype, imageUrl: row.imageUrl}
      })

      res.json(lifestyle)
  })
}) 


router.get("/movies", (req, res) => {
  const connection = getConnection()
  const queryString = "SELECT * FROM movies"
  connection.query(queryString, (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for movies: " + err)
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

router.post('/movie_create', (req, res) => {
  console.log("Trying to create a new movie...")
  console.log("How do we get the form data???")

  console.log("movie name: " + req.body.create_movie)
  console.log("movie image url: " + req.body.create_imageUrl)
  const movie = req.body.create_movie
  const imageUrl = req.body.create_imageUrl

  const queryString = "INSERT INTO movies (movieName, imageUrl) VALUES (?, ?)"
  getConnection().query(queryString, [movie, imageUrl], (err, results, fields) => {
    if (err) {
      console.log("Failed to insert new movie name: " + err)
      res.sendStatus(500)
      return
    }

    console.log("Inserted a new movie name with id: ", results.insertId);
    res.end()
  })
})

router.get('/movies/:id', (req, res) => {
  console.log("Fetching movie with id: " + req.params.id)

  const connection = getConnection()

  const movieId = req.params.id
  const queryString = "SELECT * FROM movies WHERE id = ?"
  connection.query(queryString, [movieId], (err, rows, fields) => {
      if (err) {
      console.log("Failed to query for movies: " + err)
      res.sendStatus(500)
      return
      // throw err
      }

      console.log("I think we fetched movies successfully")

      const movies = rows.map((row) => {
      return {Movie: row.movieName, imageUrl: row.imageUrl}
      })

      res.json(movies)
  })
})


router.get("/music", (req, res) => {
  const connection = getConnection()
  const queryString = "SELECT * FROM music"
  connection.query(queryString, (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for music: " + err)
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

router.post('/music_create', (req, res) => {
  console.log("Trying to create a new artist...")
  console.log("How do we get the form data???")

  console.log("artist: " + req.body.create_artistname)
  console.log("artist image url: " + req.body.create_imageUrl)
  const artist = req.body.create_artistname
  const imageUrl = req.body.create_imageUrl

  const queryString = "INSERT INTO music (artistName, imageUrl) VALUES (?, ?)"
  getConnection().query(queryString, [artist, imageUrl], (err, results, fields) => {
    if (err) {
      console.log("Failed to insert new artist: " + err)
      res.sendStatus(500)
      return
    }

    console.log("Inserted a new artist with id: ", results.insertId);
    res.end()
  })
})

router.get('/music/:id', (req, res) => {
  console.log("Fetching music with id: " + req.params.id)

  const connection = getConnection()

  const artistId = req.params.id
  const queryString = "SELECT * FROM music WHERE id = ?"
  connection.query(queryString, [artistId], (err, rows, fields) => {
      if (err) {
      console.log("Failed to query for music: " + err)
      res.sendStatus(500)
      return
      // throw err
      }

      console.log("I think we fetched music successfully")

      const music = rows.map((row) => {
      return {artist: row.artistName, imageUrl: row.imageUrl}
      })

      res.json(music)
  })
})
module.exports = router
