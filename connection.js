const Sequilize = require('sequelize')
                              //('DataBase', 'user' , '123456789'
const sequilize = new Sequilize('novoesquema', 'root' , '' , {
      //machine
      host: "localhost",
      //type
      dialect: 'mysql'
})

//verify if connction is succefull{{
sequilize.authenticate().then(function(){
      console.log("Conected!")
}).catch(function(error){
      console.log("Fail at try to connect:" +error)
})