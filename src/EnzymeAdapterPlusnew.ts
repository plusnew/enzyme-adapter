import plusnew, { Instance, componentResult, PlusnewAbstractElement } from 'plusnew';
import { EnzymeAdapter } from 'enzyme';
import elementToTree from './elementToTree';

function getDomElement(instance: Instance): Element {
  if ('ref' in instance) {
    return (instance as any).ref;
  }
  if (instance.parentInstance) {
    return getDomElement(instance.parentInstance);
  }
  throw new Error('Could not find dom node');
}

class PlusnewAdapter extends EnzymeAdapter {
  createRenderer(options: {mode: 'shallow' | 'mount'}) {
    const container = document.createElement('div');
    let rootInstance: Instance;
    return {
      render(element: plusnew.JSX.Element) {
        rootInstance = plusnew.render(element, container, {
          createChildrenComponents: options.mode === 'mount',
        });
      },
      getNode() {
        return rootInstance;
      },
      simulateEvent(instance: Instance, type: string) {
        const event = new Event(type);
        getDomElement(instance).dispatchEvent(event);
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
    return plusnew.createElement(instance.type, instance.props);
  }
}

export default PlusnewAdapter;

export { componentResult, PlusnewAbstractElement };
