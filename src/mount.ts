import { mount } from 'enzyme';
import plusnew, { renderOptions } from 'plusnew';
import PlusnewMountWrapper from './wrapper/PlusnewMountWrapper';

const plusnewMount = function (node: plusnew.JSX.Element, options?: {attachTo?: HTMLElement | null, plusnewRenderOptions: renderOptions }) {
  const wrapper = mount(node as any, options);

  return new PlusnewMountWrapper(wrapper);
};

export default plusnewMount;
