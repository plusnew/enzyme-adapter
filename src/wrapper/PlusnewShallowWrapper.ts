import { ShallowWrapper, ShallowRendererProps } from 'enzyme';
import PlusnewCommonWrapper, { Component } from './PlusnewCommonWrapper';

class PlusnewShallowWrapper extends PlusnewCommonWrapper{
  wrapper: ShallowWrapper
  constructor(wrapper: ShallowWrapper) {
    super();
    this.wrapper = wrapper;
  }

  public find(component: Component | string) {
    return this.wrapper.find(component as any);
  }

  public filter(component: Component | string) {
    return this.wrapper.filter(component as any);
  }


  public findWhere(predicate: (wrapper: ShallowWrapper<any, any>) => boolean) {
    return this.wrapper.findWhere(predicate);
  }

  public children(component: Component | string) {
    return this.wrapper.children(component as any);
  }

  public childAt(index: number) {
    return this.wrapper.childAt(index);
  }


  public dive<P2, S2>(options?: ShallowRendererProps) {
    return this.wrapper.dive(options);
  }

  public hostNodes() {
     throw new Error('Host nodes dont work right now');
    // return this.wrapper.hostNodes();
  }

  public parents(component: Component | string) {
    return this.wrapper.parents(component as any);
  }

  public closest(component: Component | string) {
    return this.wrapper.closest(component as any);
  }

  public parent() {
    return this.wrapper.parent();
  }
}

export default PlusnewShallowWrapper;
