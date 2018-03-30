import { shallow, ShallowWrapper, ShallowRendererProps } from 'enzyme';

export interface plusnewShallow {
  <P>(node: plusnew.JSX.Element, options?: ShallowRendererProps): ShallowWrapper<P, any>
}
const plusnewShallow = (shallow as any) as plusnewShallow;

export default plusnewShallow;
