
const express = require("express");

const app = express();

app.get("/books",allBooks,(req, res) => {

    return res.send({
        "route":"/books",
    })
})

app.use(singleBook)

app.get("/theSecret",(req, res) => {

    return res.send({
        route: "/theSecret",
    })
})


app.get("/theAlchemist",(req, res) => {

    return res.send({
        route: "/theSecret",
    })
})


app.get("/theSecret",(req, res) => {

    return res.send({
        route: "/theSecret",
    })
})

function allBooks(req, res, next) {

    console.log("fetching all books...")

    next();
}

function singleBook(req, res, next){
    if(req.path === "theSecret"){
        req.name = req.params.name ;
    }
    next();
}


app.listen(5000, () => {
    console.log("Listening on the port 5000")
})

