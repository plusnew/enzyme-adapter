import { elementTypeChecker, PlusnewAbstractElement } from 'plusnew';
import { ApplicationElement } from 'plusnew/dist/src/interfaces/component';

export default function elementToTree(element: ApplicationElement): any {
  if (elementTypeChecker.isComponentElement(element)) {
    const currentElement = element as PlusnewAbstractElement;
    return {
      nodeType: 'function',
      type: currentElement.type,
      rendered: currentElement.props.children.map(elementToTree),
      props: currentElement.props,
    };
  }

  if (elementTypeChecker.isDomElement(element)) {
    const currentElement = element as PlusnewAbstractElement;

    return {
      nodeType: 'host',
      type: currentElement.type,
      rendered: currentElement.props.children.map(elementToTree),
      props: currentElement.props,
    };
  }

  if (elementTypeChecker.isTextElement(element)) {
    return {
      nodeType: 'text',
      type: 'text',
      rendered: [],
    };
  }

  throw new Error('no known Element type');
}

export { PlusnewAbstractElement };
