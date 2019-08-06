import plusnew, { Instance, PlusnewAbstractElement, renderOptions } from '@plusnew/core';
import { EnzymeAdapter } from 'enzyme';
import elementToTree from './elementToTree';

function getDomElement(instance: Instance): Element {
  if ('ref' in instance) {
    return (instance as any).ref;
  }
  throw new Error('The given Instance is not a DomNode');
}

class PlusnewAdapter extends EnzymeAdapter {
  createRenderer(options: { mode: 'shallow' | 'mount', attachTo?: HTMLElement, plusnewRenderOptions: renderOptions }) {
    const container = options.attachTo || document.createElement('div');
    let rootInstance: Instance;
    return {
      render(element: plusnew.JSX.Element) {
        rootInstance = plusnew.render(element, container, {
          createChildrenComponents: options.mode === 'mount',
          ...options.plusnewRenderOptions,
        });
      },
      getNode() {
        return rootInstance;
      },
      simulateEvent(instance: Instance, type: string | Event) {
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

  nodeToHostNode(instance: Instance): Element {
    return getDomElement(instance);
  }

  nodeToElement(instance: Instance) {
    return plusnew.createElement(instance.type as any, instance.props);
  }
}

export default PlusnewAdapter;

export { PlusnewAbstractElement };
