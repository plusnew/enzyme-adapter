import enzymeAdapterPlusnew, { mount, shallow } from 'index';
import { configure } from 'enzyme';
import plusnew, { component, store } from 'plusnew';

function getMountFunction(callback: (mountWrapper: typeof mount) => void) {
  callback(mount);
  callback(shallow as any);
}

configure({ adapter: new enzymeAdapterPlusnew() });

describe('test both renderers', () => {
  xit('button should be findable', () => {
    getMountFunction((mount) => {
      const Component = component(
        () => ({}),
        () => <button />,
      );
  
      const wrapper = mount(<Component />);
      expect(wrapper.find(<button />).length).toBe(1);
      expect(wrapper.find(<input />).length).toBe(0);
    });
  });

  it('button should be findable with class', () => {
    getMountFunction((mount) => {
      const Component = component(
        () => ({}),
        () => <button className="foo"/>,
      );
  
      const wrapper = mount(<Component />);

      debugger;
      // expect(wrapper.find(<button />).length).toBe(1);


      debugger;
      expect(wrapper.find(<button className="foo" />).length).toBe(1);
      expect(wrapper.find(<button className="bar" />).length).toBe(0);

      debugger;
      expect(wrapper.find(<button />).hasClass('foo')).toBe(true);
      expect(wrapper.find(<button />).hasClass('bar')).toBe(false);

    });
  });

  xit('listitems should be findable and updatable', () => {
    getMountFunction((mount) => {
      const local = store([{
        key: 0,
        value: 'first'
      }, {
        key: 1,
        value: 'second'
      }], (state, action: {key: number, value: string}) => [...state, action]);

      const Component = component(
        () => ({ local }),
        () =>
          <ul>
            {local.state.map(entity => 
              <li key={entity.key}>{entity.value}</li>
            )}
          </ul>
      );
  
      const wrapper = mount(<Component />);
      expect(wrapper.find(<ul />).length).toBe(1);
      expect(wrapper.find(<li />).length).toBe(2);

      local.dispatch({key: 2, value: 'third'})

      expect(wrapper.find(<li />).length).toBe(3);
    });

  });

  
});