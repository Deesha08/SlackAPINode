/**
 * Summary.
 * Broadcast message to specific channel using the token
 *
 * Description.
 * This is an API which uses token for authentication. Using this API we can send message to any channel.
 * 
 * @author : Deesha Desai
 * 
 * @param {String} channel channel ID of the Slack channel
 * @param {String} message the message to be sent to channel
 * 
 * @returns {void} prints console message
 **/


const chalk = require('chalk')
const axios = require("axios");


async function sendMessage (channel,message) {
    const token = process.env.SLACK_BOT_TOKEN
    const data = JSON.stringify({
        "channel": channel,
        "text":message
      });
    const config = {
        method: 'post',
        url: 'https://slack.com/api/chat.postMessage',
        headers: { 
          'Content-type': 'application/json',
          'Authorization':'Bearer '+token
        },
        data : data
      };

      await axios(config)
      .then(function (response) {

        if(response.data['ok']){
        console.log(
          chalk.green.bold("Response Code: "+ JSON.stringify(response.status)+ "; Message sent to channel successfully")
          );      
        }
        else{
            console.log(
                chalk.green.red("Response Code: "+ JSON.stringify(response.status))
                )
            console.log(
                    chalk.green.red.bold(JSON.stringify(response.data))
                    )                   
        }
        return response.status
    })
      .catch(function (error) {
        console.log(
        chalk.green.red(JSON.stringify(error))
        )
      });
}

module.exports = sendMessage