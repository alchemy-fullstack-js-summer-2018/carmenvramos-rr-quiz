import { colors, COLORS_LOAD } from './reducers';

describe('Color Reducers', () => {

  describe('colors', () => {
    
    it('defaults to an empty array', () => {
      const state = colors(undefined, {});
      expect(state).toEqual([]);
    });
  });
  
  const color = ['red', 'blue', 'yellow'];

  it('loads colors', () => {
    const state = colors([], {
      type: COLORS_LOAD,
      payload: color
    });
    expect(state).toEqual(color);
  });

 
});