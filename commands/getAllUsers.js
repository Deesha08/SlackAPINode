/**
 * Summary.
 * Get all users from the workspace
 *
 * Description.
 * This is an API which uses token for authentication. Using this API we can get all users from the workspace
 * 
 * @author : Deesha Desai
 * 
 * @returns {void} prints console message
 **/

const conf = new (require('conf'))()
const chalk = require('chalk')
const axios = require("axios");

async function getAllUsers () {
    
    const token = process.env.SLACK_BOT_TOKEN
    const config = {
        method: 'post',
        url: 'https://slack.com/api/users.list',
        headers: { 
          'Content-type': 'application/json',
          'Authorization':'Bearer '+token
        }
      };

      await axios(config)
      .then(function (response) {

        if(response.data['ok']){
        console.log(
          chalk.green.bold("Response Code: "+ JSON.stringify(response.status)+ "; Users fetched successfully")
          );  
          
        const users = response.data['members'];
          console.log(users.length + " messages found in " + users);  
          
          users.forEach(element => {
            console.log(element)
          });
          return response.status
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

module.exports = getAllUsers