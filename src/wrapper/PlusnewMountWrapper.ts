import { ReactWrapper } from 'enzyme';
import PlusnewCommonWrapper, { Component } from './PlusnewCommonWrapper';

export default class PlusnewMountWrapper extends PlusnewCommonWrapper {
  wrapper: ReactWrapper;
  constructor(wrapper: ReactWrapper) {
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

  public ref(refName: string): this {
    return this.wrapper.ref.apply(this.wrapper, arguments);
  }
}
