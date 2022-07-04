const { Message } = require('discord.js');
const randomFile = require('select-random-file');
const dir = './images'

module.exports = {
  name: '!bread',
  description: 'Bread pic!',
  execute(msg, args) {

    randomFile(dir, (err, file) => {
      //console.log(`The random file is: ${file}.`)
      msg.channel.send({files: ['./images/' + file]});
  
    });
  },
};
