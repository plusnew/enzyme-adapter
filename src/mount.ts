import { mount, MountRendererProps } from 'enzyme';
import plusnew from 'plusnew';
import PlusnewMountWrapper from './wrapper/PlusnewMountWrapper';

type MountRendererProps = { attachTo?: HTMLElement | null; };

const plusnewMount = function (node: plusnew.JSX.Element, options?: MountRendererProps) {
  const wrapper = mount(node as any, options);

  return new PlusnewMountWrapper(wrapper);
};

export default plusnewMount;
