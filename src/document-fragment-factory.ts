export interface IDocumentFragment {
  nodes?: Node[];
}

export function documentFragmentFactory(
  fragment: IDocumentFragment,
): DocumentFragment {
  const df = document.createDocumentFragment();

  if (fragment.nodes) {
    const { nodes } = fragment;
    for (let child = 0; child < nodes.length; child++) {
      df.appendChild(nodes[child]);
    }
  }

  return df;
}
