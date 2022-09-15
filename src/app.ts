import { documentFragmentFactory } from './document-fragment-factory';
import { elementFactory } from './html-element-factory';

const app = document.getElementById('app') as HTMLElement;

const link = elementFactory({
  tag: 'a',
  attributes: {
    class: 'app-link',
    target: '_blank',
    href: 'https://github.com/matheusmv/frontend-ts',
  },
  childs: [
    elementFactory({
      tag: 'h1',
      childs: [document.createTextNode('Typescript boilerplate project ☕')],
    }),
  ],
});

const tree = documentFragmentFactory({
  nodes: [link],
});

app.appendChild(tree);
