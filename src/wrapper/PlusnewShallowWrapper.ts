import { ShallowWrapper, ShallowRendererProps } from 'enzyme';
import PlusnewCommonWrapper, { Component } from './PlusnewCommonWrapper';

class PlusnewShallowWrapper extends PlusnewCommonWrapper {
  wrapper: ShallowWrapper;
  constructor(wrapper: ShallowWrapper) {
    super();
    this.wrapper = wrapper;
  }

  public dive() {
    return this.wrapper.dive.apply(this.wrapper, arguments);
  }

  public equals(node: plusnew.JSX.Element) {
    return this.wrapper.equals.apply(this.wrapper, arguments);
  }

  public shallow(options?: ShallowRendererProps) {
    return this.wrapper.shallow.apply(this.wrapper, arguments);
  }
}

export default PlusnewShallowWrapper;
