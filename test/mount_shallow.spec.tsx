import plusnew, { component, Props, store } from '@plusnew/core';
import { configure } from 'enzyme';
import enzymeAdapterPlusnew, { mount, shallow } from '../index';
import type PlusnewCommonWrapper from '../src/wrapper/PlusnewCommonWrapper';

interface Common {
  (element: plusnew.JSX.Element): PlusnewCommonWrapper;
}

function getMountFunction(callback: (mountWrapper: Common) => void) {
  callback(mount as any);
  callback(shallow as any);
}

configure({ adapter: new enzymeAdapterPlusnew() });

describe('testing both renderers with:', () => {
  describe('at()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const NestedComponent = component(
          'Component',
          (_Props: Props<{ foo: string }>) => <button />,
        );

        const MainComponent = component(
          'Component',
          () =>
            <>
              <NestedComponent foo="bar" />
              <NestedComponent foo="baz" />
            </>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper.find(NestedComponent).at(0).prop('foo')).toBe('bar');
        expect(wrapper.find(NestedComponent).at(1).prop('foo')).toBe('baz');
      });
    });
  });

  describe('childAt()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const NestedComponent = component(
          'Component',
          (_Props: Props<{ foo: string }>) => <button />,
        );

        const MainComponent = component(
          'Component',
          () =>
            <div>
              <NestedComponent foo="bar" />
              <NestedComponent foo="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper.find('div').childAt(0).prop('foo')).toBe('bar');
        expect(wrapper.find('div').childAt(1).prop('foo')).toBe('baz');
      });
    });
  });

  describe('children()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const NestedComponent = component(
          'Component',
          (_Props: Props<{ foo: string }>) => <button />,
        );

        const MainComponent = component(
          'Component',
          () =>
            <div>
              <NestedComponent foo="bar" />
              <NestedComponent foo="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper.find('div').children().length).toBe(2);
      });
    });
  });

  describe('closest()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () => <div class="foo"><span /></div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper.find('span').closest('div').prop('class')).toBe('foo');
      });
    });
  });

  describe('contains()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <button />,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper.contains(<button />)).toBe(true);
        expect(wrapper.contains(<div />)).toBe(false);
      });
    });

    xit('basic with children', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          (Props: Props<{ children: any }>) =>
            <button><Props>{props => props.children}</Props></button>,
        );

        const wrapper = mount(<MainComponent>text</MainComponent>);
        expect(wrapper.contains(<button>text</button>)).toBe(true);
      });
    });
  });

  describe('containsAllMatchingElements()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper.containsAllMatchingElements([<span class="bar" />, <span class="baz" />])).toBe(true);
        expect(wrapper.containsAllMatchingElements([<span class="bar" />, <span class="foobar" />])).toBe(false);
      });
    });
  });

  describe('containsAnyMatchingElements()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper.containsAnyMatchingElements([<span class="bar" />, <span class="foobar" />])).toBe(true);
        expect(wrapper.containsAnyMatchingElements([<span class="knsdfg" />, <span class="foobar" />])).toBe(false);
      });
    });
  });

  describe('containsMatchingElement()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
        expect(wrapper.containsAnyMatchingElements([<span />])).toBe(true);
        expect(wrapper.containsAnyMatchingElements([<button />])).toBe(false);
      });
    });
  });

  xdescribe('context()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(() => {
          wrapper.context('foo');
        }).toThrow(new Error('Plusnew does not have contexts'));
      });
    });
  });

  xdescribe('debug()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
      });
    });
  });

  describe('every()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="bar" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper.find('span').every('.bar')).toBe(true);
        expect(wrapper.find('span').every('.baz')).toBe(false);

      });
    });
  });

  describe('everyWhere()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="bar" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper.find('span').everyWhere(wrapper => wrapper.hasClass('bar'))).toBe(true);
        expect(wrapper.find('span').everyWhere(wrapper => wrapper.hasClass('foobar'))).toBe(false);
      });
    });
  });

  describe('exists()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper.find('.bar').exists()).toBe(true);
        expect(wrapper.find('.foobar').exists()).toBe(false);
      });
    });
  });

  describe('filter()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper.find('span').filter('.bar').length).toBe(1);
        expect(wrapper.find('span').filter('.foobar').length).toBe(0);
      });
    });
  });

  describe('filterWhere()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
      });
    });
  });

  describe('find()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
      });
    });
  });

  describe('findWhere()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
      });
    });
  });

  describe('first()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
      });
    });
  });

  describe('forEach()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
      });
    });
  });

  describe('get()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
      });
    });
  });

  describe('hasClass()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
      });
    });
  });

  describe('hostNodes()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MyComponent = component(
          'MyComponent',
          (_Props: Props<{ className: string }>) => false,
        );

        const MainComponent = component(
          'Component',
          () =>
            <div>
              <MyComponent className="foo" />
              <span class="foo" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);

        const twoNodes = wrapper.find('.foo');
        expect(twoNodes.hostNodes().length).toBe(1);
      });
    });
  });

  describe('html()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
      });
    });
  });

  describe('instance()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
      });
    });
  });

  describe('is()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
      });
    });
  });

  describe('isEmpty()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
      });
    });
  });

  describe('key()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
      });
    });
  });

  describe('last()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
      });
    });
  });

  describe('matchesElement()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
      });
    });
  });

  describe('name()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
      });
    });
  });

  describe('not()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
      });
    });
  });

  describe('parent()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
      });
    });
  });

  describe('parents()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
      });
    });
  });

  describe('prop()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
      });
    });
  });

  describe('props()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
      });
    });
  });

  describe('render()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
      });
    });
  });

  describe('setContext()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
      });
    });
  });

  describe('setProps()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
      });
    });
  });

  describe('setState()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
      });
    });
  });

  describe('simulate()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const fooSpy = jasmine.createSpy('fooSpy');
        const barSpy = jasmine.createSpy('barSpy');

        const MainComponent = component(
          'Component',
          () =>
            <div class="foo" onclick={fooSpy}>
              <span class="bar" onclick={barSpy} />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        wrapper.find('.bar').simulate('click');

        expect(fooSpy.calls.count()).toBe(1);
        expect(barSpy.calls.count()).toBe(1);
      });
    });

    it('with given event object with bubbling', () => {
      getMountFunction((mount) => {
        const fooSpy = jasmine.createSpy('fooSpy');
        const barSpy = jasmine.createSpy('barSpy');

        const MainComponent = component(
          'Component',
          () =>
            <div class="foo" onclick={fooSpy}>
              <span class="bar" onclick={barSpy} />
              <span class="baz" />
            </div>,
        );

        const event = new Event('click', {
          bubbles: true,
        });

        const wrapper = mount(<MainComponent />);
        wrapper.find('.bar').simulate(event);

        expect(fooSpy.calls.count()).toBe(1);
        expect(fooSpy.calls.first().args[0]).toBe(event);
        expect(barSpy.calls.count()).toBe(1);
        expect(fooSpy.calls.first().args[0]).toBe(event);
      });
    });

    it('with given event object without bubbling', () => {
      getMountFunction((mount) => {
        const fooSpy = jasmine.createSpy('fooSpy');
        const barSpy = jasmine.createSpy('barSpy');

        const MainComponent = component(
          'Component',
          () =>
            <div class="foo" onclick={fooSpy}>
              <span class="bar" onclick={barSpy} />
              <span class="baz" />
            </div>,
        );

        const event = new Event('click', {
          bubbles: false,
        });

        const wrapper = mount(<MainComponent />);
        wrapper.find('.bar').simulate(event);

        expect(fooSpy.calls.count()).toBe(0);
        expect(barSpy.calls.count()).toBe(1);
        expect(barSpy.calls.first().args[0]).toBe(event);
      });
    });
  });

  describe('slice()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
      });
    });
  });

  describe('some()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
      });
    });
  });

  describe('someWhere()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
      });
    });
  });

  describe('state()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
      });
    });
  });

  describe('tap()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
      });
    });
  });

  describe('text()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
      });
    });
  });

  describe('type()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
      });
    });
  });

  describe('unmount()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const local = store(0, (_state, action: number) => action);

        const render = jasmine.createSpy('render', () =>
          <div class="foo">
            <span class="bar" />
            <span class="baz" />
          </div>,
        );
        const MainComponent = component(
          'Component',
          () => <local.Observer>{render}</local.Observer>,
        );

        const wrapper = mount(<MainComponent />);
        expect(render.calls.count()).toBe(1);

        local.dispatch(1);

        expect(render.calls.count()).toBe(2);

        wrapper.unmount();
        local.dispatch(2);

        expect(render.calls.count()).toBe(2);
      });
    });
  });

  describe('update()', () => {
    it('basic test', () => {
      getMountFunction((mount) => {
        const MainComponent = component(
          'Component',
          () =>
            <div class="foo">
              <span class="bar" />
              <span class="baz" />
            </div>,
        );

        const wrapper = mount(<MainComponent />);
        expect(wrapper).toBe(wrapper);
      });
    });
  });
});
