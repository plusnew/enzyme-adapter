import { ShallowRendererProps, CommonWrapper, EnzymeSelector, Intercepter } from 'enzyme';
import ComponentInstance from 'plusnew/dist/src/instances/types/Component/Instance';
import { componentResult, Instance } from 'plusnew';

type selector = string | componentResult<any>;
type predicate = (instance: Instance) => boolean;

abstract class PlusnewCommonWrapper {
  abstract wrapper: any;

  public at(index: number) {
    return this.wrapper.at.apply(this.wrapper, arguments);
  }

  public childAt() {
    return this.wrapper.childAt.apply(this.wrapper, arguments);
  }

  public children() {
    return this.wrapper.children.apply(this.wrapper, arguments);
  }

  public closest(selector: selector) {
    return this.wrapper.closest.apply(this.wrapper, arguments);
  }

  public contains(nodeOrNodes: plusnew.JSX.Element | plusnew.JSX.Element[]) {
    return this.wrapper.contains.apply(this.wrapper, arguments);
  }

  public containsAllMatchingElements(nodes: plusnew.JSX.Element[]) {
    return this.wrapper.containsAllMatchingElements.apply(this.wrapper, arguments);
  }

  public containsAnyMatchingElements(nodes: plusnew.JSX.Element[]) {
    return this.wrapper.containsAnyMatchingElements.apply(this.wrapper, arguments);
  }

  public containsMatchingElement(node: plusnew.JSX.Element) {
    return this.wrapper.containsMatchingElement.apply(this.wrapper, arguments);
  }

  public context(key: any) {
    throw new Error('Plusnew does not have contexts');
    // return this.wrapper.context.apply(this.wrapper, arguments);
  }

  public debug() {
    return this.wrapper.debug.apply(this.wrapper, arguments);
  }

  public every(selector: selector) {
    return this.wrapper.every.apply(this.wrapper, arguments);
  }

  public everyWhere(predicate: predicate) {
    return this.wrapper.everyWhere.apply(this.wrapper, arguments);
  }

  public exists() {
    return this.wrapper.exists.apply(this.wrapper, arguments);
  }

  public filter(selector: selector) {
    return this.wrapper.filter.apply(this.wrapper, arguments);
  }

  public filterWhere(predicate: predicate) {
    return this.wrapper.filterWhere.apply(this.wrapper, arguments);
  }

  public find(selector: selector) {
    return this.wrapper.find.apply(this.wrapper, arguments);
  }

  public findWhere(predicate: predicate) {
    return this.wrapper.findWhere.apply(this.wrapper, arguments);
  }

  public first() {
    return this.wrapper.first.apply(this.wrapper, arguments);
  }

  public forEach(fn: any) {
    return this.wrapper.forEach.apply(this.wrapper, arguments);
  }

  public get(index: number) {
    return this.wrapper.get.apply(this.wrapper, arguments);
  }

  public hasClass(className: string) {
    return this.wrapper.hasClass.apply(this.wrapper, arguments);
  }

  public html() {
    return this.wrapper.html.apply(this.wrapper, arguments);
  }

  public instance() {
    return this.wrapper.instance.apply(this.wrapper, arguments);
  }

  public is(selector: selector) {
    return this.wrapper.is.apply(this.wrapper, arguments);
  }

  public isEmpty() {
    return this.wrapper.isEmpty.apply(this.wrapper, arguments);
  }

  public key() {
    return this.wrapper.key.apply(this.wrapper, arguments);
  }

  public last() {
    return this.wrapper.last.apply(this.wrapper, arguments);
  }

  public map(fn: any) {
    return this.wrapper.map.apply(this.wrapper, arguments);
  }

  public matchesElement(node: plusnew.JSX.Element) {
    return this.wrapper.matchesElement.apply(this.wrapper, arguments);
  }

  public name() {
    return this.wrapper.name.apply(this.wrapper, arguments);
  }

  public not(selector: selector) {
    return this.wrapper.not.apply(this.wrapper, arguments);
  }

  public parent() {
    return this.wrapper.parent.apply(this.wrapper, arguments);
  }

  public parents() {
    return this.wrapper.parents.apply(this.wrapper, arguments);
  }

  public prop(key: string) {
    return this.wrapper.prop.apply(this.wrapper, arguments);
  }

  public props() {
    return this.wrapper.props.apply(this.wrapper, arguments);
  }

  public reduce(fn: any, initialValue?: any) {
    return this.wrapper.reduce.apply(this.wrapper, arguments);
  }

  public reduceRight(fn: any, initialValue?: any) {
    return this.wrapper.reduceRight.apply(this.wrapper, arguments);
  }

  public render() {
    return this.wrapper.render.apply(this.wrapper, arguments);
  }

  public setContext(context: any) {
    throw new Error('Plusnew does not have contexts');
    // return this.wrapper.setContext.apply(this.wrapper, arguments);
  }

  public setProps(nextProps: any) {
    return this.wrapper.setProps.apply(this.wrapper, arguments);
  }

  public setState(nextState: any, callback?: any) {
    return this.wrapper.setState.apply(this.wrapper, arguments);
  }

  public simulate(event: string, data?: any) {
    return this.wrapper.simulate.apply(this.wrapper, arguments);
  }

  public slice(begin?: number, end?: number) {
    return this.wrapper.slice.apply(this.wrapper, arguments);
  }

  public some(selector: selector) {
    return this.wrapper.some.apply(this.wrapper, arguments);
  }

  public someWhere(predicate: predicate) {
    return this.wrapper.someWhere.apply(this.wrapper, arguments);
  }

  public state(key: any) {
    return this.wrapper.state.apply(this.wrapper, arguments);
  }

  public tap(intercepter: any) {
    return this.wrapper.tap.apply(this.wrapper, arguments);
  }

  public text() {
    return this.wrapper.text.apply(this.wrapper, arguments);
  }

  public type() {
    return this.wrapper.type.apply(this.wrapper, arguments);
  }

  public unmount() {
    return this.wrapper.unmount.apply(this.wrapper, arguments);
  }

  public update() {
    return this.wrapper.update.apply(this.wrapper, arguments);
  }


  // length: number;
}

type Component = (props: any, instance: ComponentInstance) => plusnew.JSX.Element | null;

export default PlusnewCommonWrapper;

export { Component, selector, predicate };
