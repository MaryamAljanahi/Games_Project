const express = require('express')
const app = express()
var cors = require('cors')
const path = require('path') // Required to handle file paths
const port = 8080

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Serve static files (CSS, JavaScript, images)
app.use(express.static(path.join(__dirname, 'public')))

// Serve the index.html file when accessing the root URL
app.get('/', cors(corsOptions), function (req, res, next) {
    res.sendFile(path.join(__dirname, 'index.html')) // Adjust the path if your index.html is in a different location
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
