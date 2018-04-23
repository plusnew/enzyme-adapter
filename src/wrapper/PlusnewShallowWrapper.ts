import PlusnewCommonWrapper, { Component } from './PlusnewCommonWrapper';
import { ShallowRendererProps } from '../shallow';


class PlusnewShallowWrapper extends PlusnewCommonWrapper {
  wrapper: PlusnewShallowWrapper;
  constructor(wrapper: PlusnewShallowWrapper) {
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
