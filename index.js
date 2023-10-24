const inquirer = require('inquirer')
const shapes = require('./lib/shapes')
const fs = require('fs')



const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'enter three characters you want to include in your logo, you can think of these as a three letter abbreviation'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'select a color you want your Three letter abbreviation to be:'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'select the shape you want your logo to be:',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'logoColor',
        message: 'select a color you want your logo to be'
    },
]

const application = () => {
    inquirer.prompt(questions).then(answers => {
        try {
            fs.writeFileSync('examples/logo.svg', shapes(answers))
            console.log('logo.svg')
        } catch (error) {
            console.log(error.message)
        }
    })
}
application();