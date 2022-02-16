const Sequelize = require('sequelize')
                              //('DataBase', 'user' , '123456789'
const sequelize = new Sequelize('novoesquema', 'root' , '' , {
      //machine
      host: "localhost",
      //type
      dialect: 'mysql'
})

//verify if connction is succefull
sequelize.authenticate().then(function(){
      console.log("Conected!")
}).catch(function(error){
      console.log("Fail at try to connect:" +error)
})

//creating a model/table into database
const Post = sequelize.define('posts',{
      titulo: {
            type: Sequelize.STRING
      },
      conteudo:{
            type: Sequelize.TEXT
      }
})

//Post.sync({force: true}) // To confirm the creation
const User = sequelize.define('users',{
      name: {
            type: Sequelize.STRING
      },
      secondName: {
            type: Sequelize.STRING
      },
      age: {
            type: Sequelize.INTEGER
      },
      email: {
            type: Sequelize.STRING
      }
})

User.sync({force: true})// To confirm the creation

//insert DATA/ insert into:
Post.create({
      titulo: "ano novo" ,
      conteudo: "otimo ano novo com amigos e familia"
})