const getUser = require('../commands/getUser')
const chalk = require('chalk')

it('getUser',async ()=>{
    const log =jest.spyOn(console, 'log');
    data= await getUser('U032GP5DLKS');
    expect(log).toHaveBeenCalledWith(chalk.green.bold("Response Code: 200; User Details fetched Successfully!"))
})