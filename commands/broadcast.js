/**
 * Summary.
 * Broadcast message to specific channel using webhook
 *
 * Description.
 * This is an API which uses standard webhook api from slack. In this we have direct endpoint using which we can send message to the slack channel
 * 
 * @author : Deesha Desai
 * 
 * @param {String} message The message to be sent to channel
 * 
 * @returns {int} status code
 **/


const chalk = require('chalk')
const axios = require("axios");

async function broadcast (message) {
    const data = JSON.stringify({
        "text": message
      });

    const config = {
        method: 'post',
        url: 'https://hooks.slack.com/services/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',
        headers: { 
          'Content-type': 'application/json'
        },
        data : data
      };

      await axios(config)
      .then(function (response) {
        console.log(
          chalk.green.bold("Response Code: "+ JSON.stringify(response.status)+ "; Broadcast Successfull ")
          );
        return response.status
      })
      .catch(function (error) {
        chalk.green.red(JSON.stringify(error))
      });
}

module.exports = broadcast