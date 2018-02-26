interface adapter {

}

interface wrapper {
  find: (element: JSX.Element) => number[];
}

declare module 'enzyme-adapter-plusnew' {
  export default class{
    constructor()
  }
}

declare module 'enzyme' {
  export class EnzymeAdapter {

  }

  export function shallow(element: JSX.Element): wrapper;

  export function configure(config: {
    adapter: adapter;
  }): void;
}
