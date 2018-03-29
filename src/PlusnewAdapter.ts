import plusnew, { Instance } from 'plusnew';
import { EnzymeAdapter } from 'enzyme';

type InstanceWrapper = {
  _plusnewInstance: Instance,
  nodeType: 'host',
  rendered: InstanceWrapper[];
  props: {} | null;
};

function propsWithoutChildren(props: any) {
  const result: any = {};
  for (const index in props) {
    if (index !== 'children') {
      result[index] = props[index];
    }
  }
  return result;
}

function createEnzymeNode(instance: Instance): InstanceWrapper {
  let children: Instance[] = [];
  let props: {} | null = null;
  if ('children' in instance) {
    if (Array.isArray((instance as any).children)) {
      children = (instance as any).children;
    } else {
      children = [(instance as any).children];
    }
  }

  if (instance.abstractElement && (instance.abstractElement as any).props) {
    props = instance.abstractElement;
  }

  return {
    props,
    _plusnewInstance: instance,
    nodeType: 'host',
    rendered: children.map(createEnzymeNode),
  };
}

class PlusnewAdapter extends EnzymeAdapter {
  constructor() {
    super();
  }

  createRenderer(mode: 'shallow') {
    const container = document.createElement('div');
    let rootInstance: Instance;
    return {
      render(element: plusnew.JSX.Element) {
        rootInstance = plusnew.render(element, container);
      },
      getNode(): InstanceWrapper {
        return createEnzymeNode(rootInstance);
      },
    };
  }
}

export { InstanceWrapper };
export default PlusnewAdapter;
