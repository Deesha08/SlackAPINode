# Slack API - Node CLI 

## Steps to get started

### In terminal

1. npm install -g deesha-slack

2. export SLACK_BOT_TOKEN = "your slack bot token here"

### onboard all of these bot token spokes in Slack

1. channels:history
2. channels:manage
3. chat:write
4. chat:write.public
5. groups:history
6. groups:write
7. im:history
8. im:write
9. incoming-webhook
10. mpim:history
11. mpim:write
12. users.profile:read
13. users:read



## Supported API

broadcast <message>                  Broadcast message to a channel using WebHook API to only Test API
sendMessage <channel> <message>      Broadcast message to a channel using internal Slack API
getConversation [options] <channel>  Get recent conversations from channel; default limit is 5 override the default by -n
getAllUsers                          get all Users in workplace
getUser <user>                       get info of speific user
help [command]                       display help for command

## Referenced Articles

1. Creating a CLI tool with Node.js :
https://blog.logrocket.com/creating-a-cli-tool-with-node-js/

2. Slack API documentation :
https://slack.dev/bolt-js/tutorial/getting-started#create-an-app


## CodeCoverage Report

[]!(screenshots/codeCoverage.png)

