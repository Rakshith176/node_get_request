const fetch = require('node-fetch')

const express = require("express");
const { response } = require('express');
  
const app = express();
  
app.listen(5000, () => {
  console.log(`Server is up and running on 5000 ...`);
});
  
app.get("/", (req, res) => {
    let data = {
        name: "GFG",
        age: 18,
        male: true
    }
    let names=[]
    fetch('https://api.gameofthronesquotes.xyz/v1/house/lannister')
    .then(response => response.json())
    .then((json) => {
        for(let i=0;i<json[0].members.length;i++){
            console.log(json[0].members[i].name);
            names.push(json[0].members[i].name);            
        }      
        res.send(names); 
    })
    
});