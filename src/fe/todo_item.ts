// TodoItem

interface IITem {
  nm: string;
}

class TodoItem<HtmlElement> {
  item: HTMLLIElement | string | null; // 联合类型, 需要做类型判断
  private props: IITem;
  constructor(props: IITem) {
    this.item = null;
    this.props = props;
  }
  render(): HTMLLIElement {
    var oLi = document.createElement('li');
    oLi.innerHTML = this.props.nm;
    this.item = oLi;
    return this.item;
  }
}

export default TodoItem