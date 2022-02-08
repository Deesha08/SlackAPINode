const getAllUsers = require('../commands/getAllUsers')
const chalk = require('chalk')

it('getAllUsers',async ()=>{
    const log =jest.spyOn(console, 'log');
    data= await getAllUsers();
    expect(log).toHaveBeenCalledWith(chalk.green.bold("Response Code: 200; Users fetched successfully"))
})