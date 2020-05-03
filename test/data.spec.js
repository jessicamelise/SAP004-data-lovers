import {rules} from '../src/data.js';

describe('rules', () => {

  it('should be an object', () => {
    expect(typeof rules).toBe('object');
  });

  describe('filterType', () => {
  it('is a function', () => {
    expect(typeof rules.filterType).toBe('function');
    })
  });
  
  describe('filterEgg', () => {
    it('is a function', () => {
      expect(typeof rules.filterEgg).toBe('function');
    })
  });
  
  describe('searchPokemons', () => {
    it('is a function', () => {
      expect(typeof rules.searchPokemons).toBe('function');
    })
  });
  
  describe('orderBy', () => {
    it('is a function', () => {
      expect(typeof rules.orderBy).toBe('function');
    })
  });
  

})
