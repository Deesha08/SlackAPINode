/**
 * Summary.
 * Get recent messages to specific channel using the token
 *
 * Description.
 * This is an API which uses token for authentication. Using this API we can get recent messages from a specif channel
 * 
 * @author : Deesha Desai
 * 
 * @param {String} channel channel ID of the Slack channel
 * @param {String} number number of recent messages to be fetched from the slack channel. Default number=5
 * 
 * @returns {void} prints console message
 **/

const chalk = require('chalk')
const axios = require("axios");


async function getConversation (channel,number) {
    const token = process.env.SLACK_BOT_TOKEN

     const params ={
      "channel": channel,
      "limit": number.n ? number.n : 5,
    }


    console.log(number)
    const config = {
        method: 'get',
        url: 'https://slack.com/api/conversations.history',
        headers: { 
          'Content-type': 'application/x-www-form-urlencoded',
          'Authorization':'Bearer '+token
        },
      params : params
      };

      await axios(config)
      .then(function (response) {
        if(response.data['ok']){
        console.log(
          chalk.green.bold("Response Code: "+ JSON.stringify(response.status)+ "; Conversation history fetched successfully!")
          );
        
        const conversationHistory = response.data['messages'];
        console.log(conversationHistory.length + " messages found in " + channel);  
        
        conversationHistory.forEach(element => {
          console.log(element)
        });
        return response.status;
        }
        else{
            console.log(
                chalk.green.red("Response Code: "+ JSON.stringify(response.status))
                )
            console.log(
                    chalk.green.red.bold(JSON.stringify(response.data))
                    )                   
        }
    })
      .catch(function (error) {
        console.log(
        chalk.green.red(JSON.stringify(error))
        )
      });
}

module.exports = getConversation