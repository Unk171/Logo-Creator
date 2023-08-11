const Quest = require("./questions");
class Shap {
  render() {
    throw new Error('Error!!!!');
  }
};

class Triangle extends Shap {
  render() {
    return `<polygon points="150,0 0,200 300,200" fill="`
  }
}

class Square extends Shap {
  render() {
    return `<rect x="50" y="0" width="200" height="200" fill="`
  }
}

class Circle extends Shap {
  render() {
    return `<circle cx="150" cy="100" r="100" fill="`
  }
}

module.exports = {
  Shap,
  Triangle,
  Square,
  Circle
};