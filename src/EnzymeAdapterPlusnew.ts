import plusnew, { Instance } from 'plusnew';
import { EnzymeAdapter } from 'enzyme';

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
}

export default PlusnewAdapter;
