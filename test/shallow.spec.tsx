import enzymeAdapterPlusnew, { shallow } from 'index';
import { configure } from 'enzyme';
import plusnew, { component } from 'plusnew';

configure({ adapter: new enzymeAdapterPlusnew() });

describe('test shallow', () => {
  it('button should be findable', () => {
    const Component = component(
      'Component',
      () => <button />,
    );

    const wrapper = shallow(<Component />);
    expect(wrapper.contains(<button />)).toBe(true);
    expect(wrapper.contains(<div />)).toBe(false);
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('input').length).toBe(0);
  });

  it('button should not be findable in nested component', () => {
    const NestedComponent = component(
      'Component',
      () => <button />,
    );

    const Component = component(
      'Component',
      () => <NestedComponent />,
    );

    const wrapper = shallow(<Component />);
    expect(wrapper.contains(<NestedComponent />)).toBe(true);
    expect(wrapper.contains(<button />)).toBe(false);
    expect(wrapper.find(NestedComponent).length).toBe(1);
    expect(wrapper.find('button').length).toBe(0);
  });
});
