import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/components/App';

const setup = () => {
  const wrapper = shallow(<App />);
  return { wrapper };
}

describe('App component tests', () => {
  it('Should define svg game board holes', () => {
    const { wrapper } = setup();
    expect(wrapper.find('GameHoleDef').exists()).toBe(true);
  });
});
