import { shallow } from 'enzyme';
import plusnew, { PlusnewAbstractElement, Plusnew } from 'plusnew';
import { PlusnewElement } from 'plusnew/dist/src/PlusnewAbstractElement';
import { props } from 'plusnew/dist/src/interfaces/component';
import PlusnewShallowWrapper from './wrapper/PlusnewShallowWrapper';

const plusnewShallow = function (node: plusnew.JSX.Element, options?: {}) {
  const wrapper = shallow(node as any, options);

  return new PlusnewShallowWrapper(wrapper);
};

export default plusnewShallow;
