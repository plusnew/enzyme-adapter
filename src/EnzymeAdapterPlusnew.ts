import plusnew, { Instance, PlusnewAbstractElement, renderOptions } from '@plusnew/core';
import { EnzymeAdapter } from 'enzyme';
import elementToTree from './elementToTree';
import driver from '@plusnew/driver-dom';
import './enzymeMonkeyPatch';

function getDomElement(instance: Instance<Element, Text>): Element {
  if ('ref' in instance) {
    return (instance as any).ref;
  }
  throw new Error('The given Instance is not a DomNode');
}

class PlusnewAdapter extends EnzymeAdapter {
  createRenderer(options: { mode: 'shallow' | 'mount', attachTo?: HTMLElement, plusnewRenderOptions: renderOptions<Element, Text> }) {
    const container = options.attachTo || document.createElement('div');
    let rootInstance: Instance<Element, Text>;
    return {
      render(element: plusnew.JSX.Element) {
        rootInstance = plusnew.render(element, {
          createChildrenComponents: options.mode === 'mount',
          driver: driver(container),
          ...options.plusnewRenderOptions,
        });
      },
      getNode() {
        return rootInstance;
      },
      simulateEvent(instance: Instance<Element, Text>, type: string | Event) {
        if (typeof type === 'string') {
          const event = new Event(type, { bubbles: true, cancelable: true });
          getDomElement(instance).dispatchEvent(event);
        } else {
          getDomElement(instance).dispatchEvent(type);
        }
      },
      unmount() {
        rootInstance.remove(false);
      },
    };
  }

  isValidElement() {
    return true;
  }

  elementToNode(element: PlusnewAbstractElement) {
    return elementToTree(element);
  }

  nodeToHostNode(instance: Instance<Element, Text>): Element {
    return getDomElement(instance);
  }

  nodeToElement(instance: Instance<Element, Text>) {
    return plusnew.createElement(instance.type as any, instance.props);
  }
}

export default PlusnewAdapter;

export { PlusnewAbstractElement };
