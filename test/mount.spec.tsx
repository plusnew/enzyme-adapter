import enzymeAdapterPlusnew, { mount } from 'index';
import { configure } from 'enzyme';
import plusnew, { component } from 'plusnew';

configure({ adapter: new enzymeAdapterPlusnew() });

describe('test fullrender', () => {
  it('button should be findable', () => {
    const Component = component(
      'Component',
      () => ({}),
      () => <button />,
    );

    const wrapper = mount(<Component />);
    expect(wrapper.contains(<button />)).toBe(true);
    expect(wrapper.contains(<input />)).toBe(false);
  });

  it('button should not be findable in nested component', () => {
    const NestedComponent = component(
      'Component',
      () => ({}),
      () => <button />,
    );

    const Component = component(
      'Component',
      () => ({}),
      () => <NestedComponent />,
    );

    const wrapper = mount(<Component />);
    expect(wrapper.contains(<button />)).toBe(true);
  });
});
