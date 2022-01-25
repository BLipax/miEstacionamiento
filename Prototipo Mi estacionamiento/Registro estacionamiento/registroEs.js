    const express = require("express");
const req = require("express/lib/request");
    const app = express();


app.get('/',(req, res) => {
    res.send("this is some")
})
app.listen(4545, () => {
    console.log("up and running");

})