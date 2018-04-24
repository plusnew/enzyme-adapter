import ComponentInstance from 'plusnew/dist/src/instances/types/Component/Instance';
import { componentResult, Instance } from 'plusnew';

type selector = string | componentResult<any>;
type predicate<T> = (instance: T) => boolean;

abstract class PlusnewCommonWrapper {
  abstract wrapper: any;
  abstract WrapperClass: any;

  public at(index: number): this {
    return new this.WrapperClass(this.wrapper.at.apply(this.wrapper, arguments));
  }

  public childAt(index: number): this {
    return new this.WrapperClass(this.wrapper.childAt.apply(this.wrapper, arguments));
  }

  public children(): this {
    return new this.WrapperClass(this.wrapper.children.apply(this.wrapper, arguments));
  }

  public closest(selector: selector): this {
    return new this.WrapperClass(this.wrapper.closest.apply(this.wrapper, arguments));
  }

  public contains(nodeOrNodes: plusnew.JSX.Element | plusnew.JSX.Element[]): boolean {
    return this.wrapper.contains.apply(this.wrapper, arguments);
  }

  public containsAllMatchingElements(nodes: plusnew.JSX.Element[]): boolean {
    return this.wrapper.containsAllMatchingElements.apply(this.wrapper, arguments);
  }

  public containsAnyMatchingElements(nodes: plusnew.JSX.Element[]): boolean {
    return this.wrapper.containsAnyMatchingElements.apply(this.wrapper, arguments);
  }

  public containsMatchingElement(node: plusnew.JSX.Element): boolean {
    return this.wrapper.containsMatchingElement.apply(this.wrapper, arguments);
  }

  public context(key: any): any {
    return this.wrapper.context.apply(this.wrapper, arguments);
  }

  public debug(): string {
    return this.wrapper.debug.apply(this.wrapper, arguments);
  }

  public every(selector: selector): boolean {
    return this.wrapper.every.apply(this.wrapper, arguments);
  }

  public everyWhere(predicate: predicate<this>): boolean {
    return this.wrapper.everyWhere.apply(this.wrapper, arguments);
  }

  public exists(): boolean {
    return this.wrapper.exists.apply(this.wrapper, arguments);
  }

  public filter(selector: selector): this {
    return new this.WrapperClass(this.wrapper.filter.apply(this.wrapper, arguments));
  }

  public filterWhere(predicate: predicate<this>): this {
    return new this.WrapperClass(this.wrapper.filterWhere.apply(this.wrapper, arguments));
  }

  public find(selector: selector): this {
    return new this.WrapperClass(this.wrapper.find.apply(this.wrapper, arguments));
  }

  public findWhere(predicate: predicate<this>): this {
    return new this.WrapperClass(this.wrapper.findWhere.apply(this.wrapper, arguments));
  }

  public first(): this {
    return new this.WrapperClass(this.wrapper.first.apply(this.wrapper, arguments));
  }

  public forEach(fn: any): this {
    return new this.WrapperClass(this.wrapper.forEach.apply(this.wrapper, arguments));
  }

  public get(index: number): plusnew.JSX.Element {
    return this.wrapper.get.apply(this.wrapper, arguments);
  }

  public hasClass(className: string): boolean {
    return this.wrapper.hasClass.apply(this.wrapper, arguments);
  }

  public html(): string {
    return this.wrapper.html.apply(this.wrapper, arguments);
  }

  public instance(): Instance {
    return this.wrapper.instance.apply(this.wrapper, arguments);
  }

  public is(selector: selector): boolean {
    return this.wrapper.is.apply(this.wrapper, arguments);
  }

  public isEmpty(): boolean {
    return this.wrapper.isEmpty.apply(this.wrapper, arguments);
  }

  public key(): number | string {
    return this.wrapper.key.apply(this.wrapper, arguments);
  }

  public last(): this {
    return new this.WrapperClass(this.wrapper.last.apply(this.wrapper, arguments));
  }

  public map<T>(fn: (node: this) => T): T[] {
    return this.wrapper.map.apply(this.wrapper, arguments);
  }

  public matchesElement(node: plusnew.JSX.Element): boolean {
    return this.wrapper.matchesElement.apply(this.wrapper, arguments);
  }

  public name(): string | null {
    return this.wrapper.name.apply(this.wrapper, arguments);
  }

  public not(selector: selector): this {
    return new this.WrapperClass(this.wrapper.not.apply(this.wrapper, arguments));
  }

  public parent(): this {
    return new this.WrapperClass(this.wrapper.parent.apply(this.wrapper, arguments));
  }

  public parents(): this {
    return new this.WrapperClass(this.wrapper.parents.apply(this.wrapper, arguments));
  }

  public prop(key: string): any {
    return this.wrapper.prop.apply(this.wrapper, arguments);
  }

  public props(): {[key: string]: any} {
    return this.wrapper.props.apply(this.wrapper, arguments);
  }

  public reduce<T>(fn: (node: this) => T, initialValue?: T): T {
    return this.wrapper.reduce.apply(this.wrapper, arguments);
  }

  public reduceRight<T>(fn: (node: this) => T, initialValue?: T): T {
    return this.wrapper.reduceRight.apply(this.wrapper, arguments);
  }

  public render(): any {
    return this.wrapper.render.apply(this.wrapper, arguments);
  }

  public setContext(context: any): any {
    return this.wrapper.setContext.apply(this.wrapper, arguments);
  }

  public setProps(nextProps: any) {
    return this.wrapper.setProps.apply(this.wrapper, arguments);
  }

  public setState(nextState: any, callback?: any) {
    return this.wrapper.setState.apply(this.wrapper, arguments);
  }

  public simulate(event: string, data?: any): this {
    return new this.WrapperClass(this.wrapper.simulate.apply(this.wrapper, arguments));
  }

  public slice(begin?: number, end?: number): this {
    return new this.WrapperClass(this.wrapper.slice.apply(this.wrapper, arguments));
  }

  public some(selector: selector): boolean {
    return this.wrapper.some.apply(this.wrapper, arguments);
  }

  public someWhere(predicate: predicate<this>): boolean {
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

  length: number;
}

type Component = (props: any, instance: ComponentInstance) => plusnew.JSX.Element | null;

export default PlusnewCommonWrapper;

export { Component, selector, predicate };
