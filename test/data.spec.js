import rules from './data.js';

describe('rules', () => {

  it('should be an object', () => {
    expect(typeof rules).toBe('object');
  });

  describe('filterType', () => {
    it('is a function', () => {
      expect(typeof rules.filterType).toBe('function');
    });
  
    // it.skip('returns `example`', () => {
    //   expect(example()).toBe('example');
    // });
  });
  
  describe('filterEgg', () => {
    it('is a function', () => {
      expect(typeof rules.filterEgg).toBe('function');
    });
  
    // it.skip('returns `example`', () => {
    //   expect(example()).toBe('example');
    // });
  });
  
  describe('searchPokemons', () => {
    it('is a function', () => {
      expect(typeof rules.searchPokemons).toBe('function');
    });
  
    // it.skip('returns `example`', () => {
    //   expect(example()).toBe('example');
    // });
  });
  
  
  describe('orderBy', () => {
    it('is a function', () => {
      expect(typeof rules.orderBy).toBe('function');
    });
  
    // it.skip('returns `anotherExample`', () => {
    //   expect(anotherExample()).toBe('OMG');
    // });
  });

})
