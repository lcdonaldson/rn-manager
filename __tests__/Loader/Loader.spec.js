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
  
  it("snapshot tests should match wrapper", () => {
    setupComponent = setup();
    wrapper = setupComponent.enzymeWrapper;

    expect(wrapper).toMatchSnapshot();
  })
})
