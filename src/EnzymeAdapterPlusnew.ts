import plusnew, { Instance, componentResult, PlusnewAbstractElement } from 'plusnew';
import { EnzymeAdapter } from 'enzyme';
import elementToTree from './elementToTree';

class PlusnewAdapter extends EnzymeAdapter {
  constructor() {
    super();
  }

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
    };
  }

  isValidElement() {
    return true;
  }

  elementToNode(element: PlusnewAbstractElement) {
    return elementToTree(element);
  }
}

export default PlusnewAdapter;

export { componentResult, PlusnewAbstractElement };
