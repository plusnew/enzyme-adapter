import { mount, ReactWrapper, MountRendererProps } from 'enzyme';
import plusnew from 'plusnew';

export interface plusnewMount {
  <P, S>(node: plusnew.JSX.Element, options?: MountRendererProps): ReactWrapper<P, S>
}
const plusnewMount = (mount as any) as plusnewMount;

export default plusnewMount;
