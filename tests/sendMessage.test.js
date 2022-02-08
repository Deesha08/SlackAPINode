const sendMessage = require('../commands/sendMessage')
const chalk = require('chalk')

it('sendMessage',async ()=>{
    const log =jest.spyOn(console, 'log');
    data= await sendMessage('C0325KN9BAM','hi');
    expect(log).toHaveBeenCalledWith(chalk.green.bold("Response Code: 200; Message sent to channel successfully"))
})

