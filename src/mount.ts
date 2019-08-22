import { mount } from 'enzyme';
import { renderOptions } from '@plusnew/core';
import PlusnewMountWrapper from './wrapper/PlusnewMountWrapper';

const plusnewMount = function (node: plusnew.JSX.Element, options?: {attachTo?: HTMLElement | null, plusnewRenderOptions?: renderOptions<Element, Text> }) {
  const wrapper = mount(node as any, options);

  return new PlusnewMountWrapper(wrapper);
};

export default plusnewMount;
