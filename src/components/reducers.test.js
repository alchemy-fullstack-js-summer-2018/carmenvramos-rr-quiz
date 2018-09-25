import { colors, COLORS_LOAD, COLORS_ADD, selectedColor, SELECT_COLOR } from './reducers';

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

  it('adds a color', () => {
    const state = colors([], {
      type: COLORS_ADD,
      payload: 'white'
    });
    expect(state).toEqual(['white']);
  });

  describe('selectedColor', () => {

    it('holds string name of currently selected color', () => {
      const color = 'red';
      const state = selectedColor('', {
        type: SELECT_COLOR,
        payload: color
      });
      expect(state).toBe(color);
    });
    
    it('defaults to white', () => {
      const state = selectedColor('white', {});
      expect(state).toBe('white');
    });
  });
 
});