//import json server

const jsonServer=require('json-server')

//create Mpserver for media player application

const Mpserver=jsonServer.create()

// create middleware

const middleware =jsonServer.defaults()

//set up route for json file in serve

const route=jsonServer.router('db.json')

const PORT =3000 || process.env.PORT

Mpserver.use(middleware)
Mpserver.use(route)

Mpserver.listen(PORT,()=>{
    console.log(`media player serer running at port ${PORT} and waiting for client requist `);
    
})