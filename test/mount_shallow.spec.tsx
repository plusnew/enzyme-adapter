import enzymeAdapterPlusnew, { mount, shallow } from 'index';
import PlusnewCommonWrapper from 'wrapper/PlusnewCommonWrapper';
import { configure } from 'enzyme';
import plusnew, { component, store } from 'plusnew';

interface common {
  (element: plusnew.JSX.Element): PlusnewCommonWrapper;
}

function getMountFunction(callback: (mountWrapper: common) => void) {
  callback(mount as any);
  // callback(shallow as any);
}

configure({ adapter: new enzymeAdapterPlusnew() });

describe('test both renderers', () => {
  it('button should be containable', () => {
    getMountFunction((mount) => {
      const Component = component(
        () => ({}),
        () => <button />,
      );
  
      const wrapper = mount(<Component />);
      expect(wrapper.contains(<button />)).toBe(true);
      expect(wrapper.contains(<input />)).toBe(false);
    });
  });

  it('button should be containsable with class', () => {
    getMountFunction((mount) => {
      const Component = component(
        () => ({}),
        () => <button className="foo" />,
      );
  
      const wrapper = mount(<Component />);

      expect(wrapper.contains(<button />)).toBe(false);
      expect(wrapper.containsMatchingElement(<button />)).toBe(true);

      expect(wrapper.contains(<button className="foo" />)).toBe(true);
      expect(wrapper.containsMatchingElement(<button className="foo" />)).toBe(true);

      expect(wrapper.contains(<button className="bar" />)).toBe(false);
      expect(wrapper.containsMatchingElement(<button className="bar" />)).toBe(false);

      expect(wrapper.containsAnyMatchingElements([<button />, <input />])).toBe(true);
      expect(wrapper.containsAnyMatchingElements([<span />, <div />])).toBe(false);

      expect(wrapper.find('button').hasClass('foo')).toBe(true);
      expect(wrapper.find('button').hasClass('bar')).toBe(false);
    });
  });

  it('listitems should be containable and updatable', () => {
    getMountFunction((mount) => {
      const local = store([{
        key: 0,
        value: 'first',
      }, {
        key: 1,
        value: 'second',
      }], (state, action: {key: number, value: string}) => [...state, action]);

      const Component = component(
        () => ({ local }),
        () =>
          <ul>
            {local.state.map(entity => 
              <li key={entity.key}>{entity.value}</li>,
            )}
          </ul>,
      );
  
      const wrapper = mount(<Component />);
      expect(wrapper.find('ul').find('li').length).toBe(local.state.length);
      expect(wrapper.contains(<li key={1}>second</li>)).toBe(true);
      expect(wrapper.contains(<li key={0}>first</li>)).toBe(true);
      expect(wrapper.contains(<li key={0}>wrong</li>)).toBe(false);

      local.dispatch({ key: 2, value: 'third' });
    });
  });

  it('elements should be clickable', () => {
    getMountFunction((mount) => {
      const local = store(0, (state, action: number) => state + action);
      const Component = component(
        () => ({ local }),
        () => <div onclick={() => {local.dispatch(2); }}>{local.state}</div>,
      );
  
      const wrapper = mount(<Component />);

      expect(wrapper.containsMatchingElement(<div>{0}</div>)).toBe(true);
      wrapper.find('div').simulate('click');
      expect(wrapper.containsMatchingElement(<div>{2}</div>)).toBe(true);
    });
  });
});
