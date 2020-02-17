import { renderOptions } from '@plusnew/core/src/interfaces/renderOptions';
import { mount } from 'enzyme';
import PlusnewMountWrapper from './wrapper/PlusnewMountWrapper';

const plusnewMount = function (node: plusnew.JSX.Element, options?: {attachTo?: HTMLElement | null, plusnewRenderOptions?: Partial<renderOptions<Element, Text>> }) {
  const wrapper = mount(node as any, options);

  return new PlusnewMountWrapper(wrapper);
};

export default plusnewMount;
