import { Component }  from './PlusnewCommonWrapper';
import PlusnewNurturedWrapper from './PlusnewNurturedWrapper';

class PlusnewShallowWrapper extends PlusnewNurturedWrapper {
  wrapper: PlusnewShallowWrapper;
  WrapperClass = PlusnewShallowWrapper;
  constructor(wrapper: PlusnewShallowWrapper) {
    super();
    this.wrapper = wrapper;
    this.length = this.wrapper ? this.wrapper.length : 0;
  }

  public dive(): this {
    return this.wrapper.dive.apply(this.wrapper, arguments);
  }

  public equals(node: plusnew.JSX.Element): true {
    return this.wrapper.equals.apply(this.wrapper, arguments);
  }

  public shallow(options?: {}): this {
    return this.wrapper.shallow.apply(this.wrapper, arguments);
  }
}

export default PlusnewShallowWrapper;
