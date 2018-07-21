import React from "react";

import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

function setup(type) {
  const props = {};
  let enzymeWrapper;
  
  return {
    enzymeWrapper
  }
}

describe("Loader component", () => {
  let setupComponent;
  let wrapper;

  expect( 1 + 1 ).toEqual(2);
  
  it("Snapshot Tests", () => {
    setupComponent = setup();
    wrapper = setupComponent.enzymeWrapper;

    expect(wrapper).toMatchSnapshot();
  })
})
