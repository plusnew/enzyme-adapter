import { renderOptions } from '@plusnew/core/src/interfaces/renderOptions';
import { shallow } from 'enzyme';
import PlusnewShallowWrapper from './wrapper/PlusnewShallowWrapper';

const plusnewShallow = function (node: plusnew.JSX.Element, options?: {attachTo?: HTMLElement | null, plusnewRenderOptions?: renderOptions<Element, Text> }) {
  const wrapper = shallow(node as any, options);

  return new PlusnewShallowWrapper(wrapper);
};

export default plusnewShallow;
