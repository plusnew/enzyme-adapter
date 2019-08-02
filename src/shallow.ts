import { shallow } from 'enzyme';
import { renderOptions } from 'plusnew';
import PlusnewShallowWrapper from './wrapper/PlusnewShallowWrapper';

const plusnewShallow = function (node: plusnew.JSX.Element, options?: {attachTo?: HTMLElement | null, plusnewRenderOptions?: renderOptions }) {
  const wrapper = shallow(node as any, options);

  return new PlusnewShallowWrapper(wrapper);
};

export default plusnewShallow;
