import React from "react";
import 'react-native';
import render from 'react-test-renderer';
import Loader from '../../src/components/common/Loader/Loader';

describe("Loader component", () => {
  it("snapshot tests should match wrapper", () => {
    const tree = render.create(<Loader/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
