const inquirer = require("inquirer");
const Shapes = require("./shapes");
const { writeFile } = require('fs/promises');
const { createLogo } = require("./logoRender");
const { join } = require("path");


class Quest {
  constructor() {
    this.answers = {}
  }
  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'logoName',
          message: 'What is the logo name? (no more than 3 letters)'
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'What is the text color?'
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Choose the logo shape:',
          choices: ['circle', 'triangle', 'square']
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'What is the color of shape?'
        }
      ])
      .then(({ logoName, textColor, shape, shapeColor }) => {
        this.answers['logoName'] = logoName;
        this.answers['textColor'] = textColor;
        this.answers['shapeColor'] = shapeColor;
        this.answers['shape'] = shape;
        console.log("Quest ~ answers:", this.answers)
        
        
        // this.logoName = logoName;
        // this.textColor = textColor;
        // this.shapeColor = shapeColor;

        return writeFile(
          join(__dirname, '..', 'examples', logoName + '.svg'),
          createLogo(this.answers)

        )
          .then(() => console.log('logo created'))
      })
  }
}

module.exports = Quest;
