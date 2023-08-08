


const shapes = require('./lib/shapes');
const inquirer = require('inquirer');
const fs = require('fs/promises');
const questions = [{
  type: 'input',
  name: 'name',
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
  name: 'shapesColor',
  message: 'What is the color of shape?'
}
];

function renderLogo(answers) {
  if (answers.shape === shapes.circle){
    const circle = new shapes.Circle(
      '<circle cx="150" cy="100" r="100" fill=${answers.shapeColor} />',
      '<text x="60" y="110" fill=${answers.textColor}>${answers.name}</text>'
    )
  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect fill="#fff" stroke="#000" x="-70" y="-70" width="390" height="390"/>
  <g opacity="0.8">`,
  circle,
  `<style>
    <![CDATA[
      text{
        dominant-baseline: hanging;
        font: 80px Verdana, Helvetica, Arial, sans-serif;
      }
    ]]>
  </style>
</g>
</svg>`
  } else if (answers.shape === shapes.triangle){
    return shapes.triangle
  } else {
    return shapes.squre
  }
}

inquirer
  .prompt(questions)
  .then((answers) => {
        const logoContent = renderLogo(answers)
     
        
    fs.writeFile('./examples/' + answers.name + '.svg', logoContent)
      .then(() => console.log('Logo created'))
      .catch((err) => console.error(err))
  })
