// const Questions = require('./questions');
const Shapes = require('./shapes');
let shape1;

function createLogo(answers) {

  if (answers.shape === 'circle') {
    shape1 = new Shapes.Circle().render();
  } else if (answers.shape === 'triangle') {
    shape1 = new Shapes.Triangle().render();
  } else {
    shape1 = new Shapes.Square().render();
  }
  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
      <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <rect fill="#fff" stroke="#000" x="-70" y="-70" width="390" height="390"/>
      <g opacity="0.8">
        ${shape1} ${answers.shapeColor}"/>;
        <text x="80" y="80" fill="${answers.textColor}">${answers.logoName}</text>
        <style>
          <![CDATA[
            text{
              dominant-baseline: hanging;
              font: 60px Verdana, Helvetica, Arial, sans-serif;
            }
          ]]>
        </style>
      </g>
      </svg>`
}

// fs.writeFile('./examples/' + answers.name + '.svg', logoContent)
//       .then(() => console.log('Logo created'))
//       .catch((err) => console.error(err))

module.exports = { createLogo };