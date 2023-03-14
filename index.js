const userInfos = require('./informations.js')

const cowsay = require("cowsay");



console.log(cowsay.say({
    text: `I'm ${userInfos.myName}, I'm learning at ${userInfos.campus}`

}));