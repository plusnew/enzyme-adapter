import enzymeAdapterPlusnew, { mount } from 'index';
import { configure } from 'enzyme';
import plusnew, { component } from '@plusnew/core';

configure({ adapter: new enzymeAdapterPlusnew() });

describe('test fullrender', () => {
  it('button should be findable', () => {
    const Component = component(
      'Component',
      () => <button />,
    );

    const wrapper = mount(<Component />);
    expect(wrapper.contains(<button />)).toBe(true);
    expect(wrapper.contains(<div />)).toBe(false);
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

    const wrapper = mount(<Component />);
    expect(wrapper.contains(<button />)).toBe(true);
  });

  describe('getDomNode()', () => {
    it('basic test', () => {
      const MainComponent = component(
        'Component',
        () =>
          <div class="foo">
            <span class="bar" />
            <span class="baz" />
          </div>,
      );

      const wrapper = mount(<MainComponent />);

      const bazElement = wrapper.find('span').find('.baz');
      expect(bazElement.getDOMNode().tagName).toBe('SPAN');
      expect(bazElement.getDOMNode().className).toBe('baz');
    });
  });
});
