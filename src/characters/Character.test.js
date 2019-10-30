import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character component', () => {
  it('renders Character', () => {
    const wrapper = shallow(<Character name=" Evil Morty" species="Human" img="./assets/evil-morty.png" />);
    expect(wrapper).toMatchSnapshot();
  });
});
