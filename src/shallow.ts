
// declare module "enzyme" {
  // export interface ShallowWrapper<P, S> {
  //   contains(element: {type: PlusnewElement, props: props} | string): boolean;
  // }  
// }

import { shallow, ShallowWrapper, ShallowRendererProps } from 'enzyme';
import plusnew, { PlusnewAbstractElement, Plusnew } from 'plusnew';
import { PlusnewElement } from 'plusnew/dist/src/PlusnewAbstractElement';
import { props } from 'plusnew/dist/src/interfaces/component';
import PlusnewShallowWrapper from './wrapper/PlusnewShallowWrapper';


// export interface PlusnewShallowWrapper<P, S> implements ShallowWrapper<P, S>  {
//   contains(element: {type: PlusnewElement, props: props} | string): boolean;
// }

// export interface plusnewShallow {
//   <P>(node: plusnew.JSX.Element, options?: ShallowRendererProps): PlusnewShallowWrapper<P, any>
// }
const plusnewShallow = function(node: plusnew.JSX.Element, options?: ShallowRendererProps) {
  const wrapper = shallow(node as any, options);

  return new PlusnewShallowWrapper(wrapper);
}

export default plusnewShallow;
