/**
 * Summary.
 * Get specific user detail
 *
 * Description.
 * This is an API which uses token for authentication. Using this API we can get specific user detail
 * 
 * @author : Deesha Desai
 * 
 * @param {string} user user ID of the user whose detail is to be fetched
 * @returns {void} prints console message
 **/

const chalk = require('chalk')
const axios = require("axios");

async function getUser (user) {

    const params ={
      "user" : user
    }
    
    const token = process.env.SLACK_BOT_TOKEN
    const config = {
        method: 'post',
        url: 'https://slack.com/api/users.info',
        headers: { 
          'Content-type': 'application/json',
          'Authorization':'Bearer '+token
        },
        params : params
      };

      await axios(config)
      .then(function (response) {

        if(response.data['ok']){
        console.log(
          chalk.green.bold("Response Code: "+ JSON.stringify(response.status)+ "; User Details fetched Successfully!")
          );  
          
          console.log(response.data['user']);  
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

module.exports = getUser