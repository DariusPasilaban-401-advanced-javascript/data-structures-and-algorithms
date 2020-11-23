
const findRW = require('./repeated-word');

describe('Code Challenge: Repeated Words', () => {

  test('test repeatedWord method with 1 repeated word', () => {

    // findRW('Nico tell the other Nico to pick up my food please');
    
    expect(findRW('Nico tell the other Nico to pick up my food please')).toEqual(['Nico']);
  })


  test('test repeatedWord method  with 2 repeated word', () => {

    // findRW('Nico tell the other Nico to pick up my food please');
    
    expect(findRW('Nico tell the other Nico to pick up my food please pretty please')).toEqual(['Nico', 'please']);
  })
})
