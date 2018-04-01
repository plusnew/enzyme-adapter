import enzymeAdapterPlusnew, { shallow } from 'index';
import { configure} from 'enzyme';
import plusnew, { component } from 'plusnew';

configure({ adapter: new enzymeAdapterPlusnew() });

xdescribe('test shallow', () => {
  it('button should be findable', () => {
    const Component = component(
      () => ({}),
      () => <button />,
    );

    const wrapper = shallow(<Component />);
    // debugger;
    expect(wrapper.find(<button />).length).toBe(1);
    expect(wrapper.find(<input />).length).toBe(0);
  });

  it('button should not be findable in nested component', () => {
    const NestedComponent = component(
      () => ({}),
      () => <button />,
    );

    const Component = component(
      () => ({}),
      () => <NestedComponent />,
    );

    const wrapper = shallow(<Component />);
    expect(wrapper.find(<button />).length).toBe(0);
  });
});

