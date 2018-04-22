import { ShallowWrapper, ShallowRendererProps } from 'enzyme';
import PlusnewCommonWrapper, { Component } from './PlusnewCommonWrapper';

class PlusnewShallowWrapper extends PlusnewCommonWrapper {
  wrapper: ShallowWrapper;
  constructor(wrapper: ShallowWrapper) {
    super();
    this.wrapper = wrapper;
    this.length = this.wrapper.length;
  }

  public dive(): this {
    return this.wrapper.dive.apply(this.wrapper, arguments);
  }

  public equals(node: plusnew.JSX.Element): true {
    return this.wrapper.equals.apply(this.wrapper, arguments);
  }

  public shallow(options?: ShallowRendererProps): this {
    return this.wrapper.shallow.apply(this.wrapper, arguments);
  }
}

export default PlusnewShallowWrapper;
