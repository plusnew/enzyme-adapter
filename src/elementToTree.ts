import { PlusnewAbstractElement } from 'plusnew';

export default function elementToTree(element: PlusnewAbstractElement): any {
  return {
    nodeType: 'function',
    type: element.type,
    rendered: [],
  };
}

export { PlusnewAbstractElement };
