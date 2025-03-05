/// <reference path="./typings.d.ts"/>

import * as rst from 'enzyme/build/RSTTraversal';

/**
 * i needed to overwrite this function of enzyme
 * the original function checked for the property className, instead of class
 * sorry for that, but i didn't see any other way
 */
rst.hasClassName = function hasClassName(node: any, className: string | RegExp) {
  let classes = rst.propsOfNode(node).class || '';
  classes = String(classes).replace(/\s/g, ' ');
  if (className instanceof RegExp) return (className as RegExp).test(classes);
  return ` ${classes} `.indexOf(` ${className} `) > -1;
};
