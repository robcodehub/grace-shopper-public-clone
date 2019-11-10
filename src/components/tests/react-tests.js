import React from 'react';
import chai from 'chai';

import { expect } from 'chai';

import Adapter from 'enzyme-adapter-react-16';
import enzyme, {shallow} from 'enzyme';

enzyme.configure({ adapter: new Adapter() });

import Home from '../pages/Home.js';


describe("React enzyme testing", ()=> {
  describe("Testing home page", () => {
    it("first test", () => {
      const wrapper = shallow(<Home />);
      const testText = "Welcome"
      expect(wrapper.contains(testText)).to.equal(true)
    });
  });
});

