import PlusnewCommonWrapper from './PlusnewCommonWrapper';

abstract class NurturedWrapper extends PlusnewCommonWrapper {
  public search(node: plusnew.JSX.Element) {
    return this.findWhere(wrapper => wrapper.matchesElement(node));
  }
}

export default NurturedWrapper;
