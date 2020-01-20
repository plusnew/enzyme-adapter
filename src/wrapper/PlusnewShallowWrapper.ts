import PlusnewNurturedWrapper from './PlusnewNurturedWrapper';

class PlusnewShallowWrapper extends PlusnewNurturedWrapper {
  wrapper: any;
  WrapperClass = PlusnewShallowWrapper;
  length: number;

  constructor(wrapper: PlusnewShallowWrapper) {
    super();
    this.wrapper = wrapper;
    this.length = this.wrapper ? this.wrapper.length : 0;
  }

  public dive(): this {
    return this.wrapper.dive.apply(this.wrapper, arguments);
  }

  public equals(_node: plusnew.JSX.Element): true {
    return this.wrapper.equals.apply(this.wrapper, arguments);
  }

  public shallow(_options?: {}): this {
    return this.wrapper.shallow.apply(this.wrapper, arguments);
  }
}

export default PlusnewShallowWrapper;
