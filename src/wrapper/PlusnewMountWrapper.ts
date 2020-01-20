import PlusnewNurturedWrapper from './PlusnewNurturedWrapper';

export default class PlusnewMountWrapper extends PlusnewNurturedWrapper {
  wrapper: any;
  WrapperClass = PlusnewMountWrapper;
  length: number;

  constructor(wrapper: PlusnewMountWrapper) {
    super();
    this.wrapper = wrapper;
    this.length = this.wrapper.length;
  }

  public detach(): void {
    return this.wrapper.detach.apply(this.wrapper, arguments);
  }

  public mount(): this {
    return this.wrapper.mount.apply(this.wrapper, arguments);
  }

  public ref(_refName: string): this {
    return this.wrapper.ref.apply(this.wrapper, arguments);
  }

  public getDOMNode(): Element {
    return this.wrapper.getDOMNode.apply(this.wrapper, arguments);
  }
}
