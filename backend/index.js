 const express = require("express");
 const { createTodo } = require("./types");
 const{ todo } = require("./db");
 const cors = require("cors");
 const app = express();


 app.use(express.json());
 app.use(cors());

 app.post("/todo", async function(req, res){
        const createPayload = req.body;
        const parsedPayload = createTodo.safeParse(createPayload);
        if(!parsedPayload.success){
            res.status(411).json({
                msg : "You sent the wrong inputs",
            })
            return;
        }
        await todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: false
        })

        res.json({
            msg: "Todo is created"
        })

 }) 

 app.get("/todo",async function(req, res){

    const todo = await todo.find({});

    res.json({
        todo: []
    })

 })

 app.put("/completed", async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You sent the wrong inputs",
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },{
        complete: true
    })
    res.json({
        msg: "Todo is cmpleted"
    })
  })