import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../src/components/App';

describe('<App />', () => {
  it('should have a h1 to display the heading', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1')).to.have.length(1);
  });
});
