#! /usr/bin/env node
const { program } = require('commander')

const broadcast = require('./commands/broadcast')
const sendMessage = require('./commands/sendMessage')
const getConversation = require('./commands/getConversation')
const getAllUsers = require('./commands/getAllUsers')
const getUser = require('./commands/getUser')


program
    .command('broadcast <message>')
    .description('Broadcast message to a channel using WebHook API')
    .action(broadcast)

program
    .command('sendMessage <channel> <message>')
    .description('Broadcast message to a channel using internal Slack API')
    .action(sendMessage)

program
    .command('getConversation <channel>')
    .option('-n <number>')
    .description('Get recent conversations from channel; default limit is 5; override the default by -n ')
    .action(getConversation)

program
    .command('getAllUsers')
    .description('get all Users in workplace')
    .action(getAllUsers)

program
    .command('getUser <user>')
    .description("get info of speific user")
    .action(getUser)

program.parse()