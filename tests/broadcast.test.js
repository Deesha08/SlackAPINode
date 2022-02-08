const broadcast = require('../commands/broadcast')
const chalk = require('chalk')

it('broadcastSuccess',async ()=>{
    const log =jest.spyOn(console, 'log');
    data= await broadcast('hi');
    expect(log).toHaveBeenCalledWith(chalk.green.bold("Response Code: 200; Broadcast Successfull "))
})

