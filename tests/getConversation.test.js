const getConversation = require('../commands/getConversation')
const chalk = require('chalk')

it('getConversation',async ()=>{
    const log =jest.spyOn(console, 'log');
    data= await getConversation('C0325KN9BAM',{n:3});
    expect(log).toHaveBeenCalledWith(chalk.green.bold("Response Code: 200; Conversation history fetched successfully!"))
})