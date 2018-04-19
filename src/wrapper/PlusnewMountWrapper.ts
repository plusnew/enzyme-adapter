import { ReactWrapper } from 'enzyme';
import PlusnewCommonWrapper, { Component } from './PlusnewCommonWrapper';

export default class PlusnewMountWrapper extends PlusnewCommonWrapper {
  wrapper: ReactWrapper;
  constructor(wrapper: ReactWrapper) {
    super();
    this.wrapper = wrapper;
  }

  public detach() {
    return this.wrapper.detach.apply(this.wrapper, arguments);
  }

  public mount() {
    return this.wrapper.mount.apply(this.wrapper, arguments);
  }

  public ref(refName: string) {
    return this.wrapper.ref.apply(this.wrapper, arguments);
  }
}
