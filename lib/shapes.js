class Shapes {
  constructor(text) {
      this.text = text
  }
};


class Triangle extends Shapes {
  constructor(shape, text) {
    super(text);
    this.shape = shape
  }
}

class Square  extends Shapes {
  constructor(shape, text) {
    super(text);
    this.shape = shape
  }
}


class Circle  extends Shapes {
  constructor(shape, text) {
    super(text);
    this.shape = shape
  }
}

const triangle = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect fill="#fff" stroke="#000" x="-70" y="-70" width="390" height="390"/>
<g opacity="0.8">
	<polygon points="150,0 0,200 300,200" fill="blue"/>
	<text x="60" y="110" fill="red">SVG</text>
	<style>
    <![CDATA[
      text{
        dominant-baseline: hanging;
        font: 80px Verdana, Helvetica, Arial, sans-serif;
      }
    ]]>
  </style>
</g>
</svg>`;

const squre = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect fill="#fff" stroke="#000" x="-70" y="-70" width="390" height="390"/>
<g opacity="0.8">
	<rect x="50" y="0" width="200" height="200" fill="lime"/>
	<text x="60" y="65" fill="red">SVG</text>
	<style>
    <![CDATA[
      text{
        dominant-baseline: hanging;
        font: 80px Verdana, Helvetica, Arial, sans-serif;
      }
    ]]>
  </style>
</g>
</svg>`;

const circle = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect fill="#fff" stroke="#000" x="-70" y="-70" width="390" height="390"/>
<g opacity="0.8">
	<circle cx="150" cy="100" r="100" fill="orange" />
	<text x="60" y="65" fill="red">SVG</text>
	<style>
    <![CDATA[
      text{
        dominant-baseline: hanging;
        font: 80px Verdana, Helvetica, Arial, sans-serif;
      }
    ]]>
  </style>
</g>
</svg>`;

module.exports = {
  Triangle,
  Square,
  Circle
};