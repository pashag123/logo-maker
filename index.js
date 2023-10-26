const inquirer = require('inquirer')
const { Circle, Square, Triangle } = require('./lib/shapes')
const fs = require('fs')
let SVG = require('./lib/svg')


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
        name: 'shapeChoice',
        message: 'select the shape you want your logo to be:',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'select a color you want your logo to be'
    },
]

const application = () => {
    inquirer.prompt(questions).then(answers => {
      let shape;
      if (answers.shapeChoice === 'square') {
        shape = new Square();
      } else if (answers.shapeChoice === 'triangle') {
        shape = new Triangle();
      }
      else {
        shape = new Circle();
      }
      shape.setColor(answers.shapeColor);
      const svg = new SVG;
      svg.setText(answers.textColor, answers.text );
      svg.setShape(shape)
      const logo = svg.render()
            fs.writeFileSync('examples/logo.svg', logo, (err) => {
                if (err) throw err
            
            })
            console.log('file saved')
        }) 
           
        }
    

application();