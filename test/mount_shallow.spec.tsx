import enzymeAdapterPlusnew, { mount, shallow } from 'index';
import { configure } from 'enzyme';
import plusnew, { component, store } from 'plusnew';

function getMountFunction(callback: (mountWrapper: typeof shallow) => void) {
  callback(mount as any);
  callback(shallow as any);
}

configure({ adapter: new enzymeAdapterPlusnew() });

describe('test both renderers', () => {
  it('button should be containsable', () => {
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

      expect(wrapper.contains(<button className="foo" />)).toBe(true);
      expect(wrapper.contains(<button className="bar" />)).toBe(false);

      expect(wrapper.find('button').hasClass('foo')).toBe(true);
      expect(wrapper.find('button').hasClass('bar')).toBe(false);
    });
  });

  it('listitems should be containsable and updatable', () => {
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
      expect(wrapper.find('ul').children().length).toBe(local.state.length);
      expect(wrapper.contains(<li key={0}>first</li>)).toBe(true);
      expect(wrapper.contains(<li key={1}>second</li>)).toBe(true);


      local.dispatch({ key: 2, value: 'third' });
    });
  });
});
