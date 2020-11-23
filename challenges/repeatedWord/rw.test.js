
const findRW = require('./repeated-word');


test('test repeatedWord method', () => {

  // findRW('Nico tell the other Nico to pick up my food please');
  
  expect(findRW('Nico tell the other Nico to pick up my food please pretty please')).toEqual(['Nico', 'please']);
})