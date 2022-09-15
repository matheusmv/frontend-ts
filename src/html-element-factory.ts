export interface IElement {
  tag: keyof HTMLElementTagNameMap;
  attributes?: { [key: string]: string };
  childs?: Node[];
}

export function elementFactory(
  element: IElement,
): HTMLElementTagNameMap[keyof HTMLElementTagNameMap] {
  const e = document.createElement(element.tag);

  if (element.attributes) {
    const entries = Object.entries(element.attributes);
    for (let key = 0; key < entries.length; key++) {
      e.setAttribute(entries[key][0], entries[key][1]);
    }
  }

  if (element.childs) {
    const { childs } = element;
    for (let child = 0; child < childs.length; child++) {
      e.appendChild(childs[child]);
    }
  }

  return e;
}
