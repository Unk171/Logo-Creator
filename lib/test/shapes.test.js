const Shapes = require('../shapes')
describe('Shapes', () => {
  it('should show string', () => {
    const shape = new Shapes.Triangle();
    const result = `<polygon points="150,0 0,200 300,200" fill="`
    expect(shape.render()).toEqual(result);
  })
});

describe('Shapes', () => {
  it('should show string', () => {
    const shape = new Shapes.Circle();
    const result = `<circle cx="150" cy="100" r="100" fill="`
    expect(shape.render()).toEqual(result);
  })
});

describe('Shapes', () => {
  it('should show string', () => {
    const shape = new Shapes.Square();
    const result = `<rect x="50" y="0" width="200" height="200" fill="`
    expect(shape.render()).toEqual(result);
  })
});