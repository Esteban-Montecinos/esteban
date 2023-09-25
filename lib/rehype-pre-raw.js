import { visit } from 'unist-util-visit'

export const preProcess = () => (tree) => {
  visit(tree, (node) => {
    if (node?.type === 'element' && node?.tagName === 'pre') {
      const [codeEl] = node.children
      if (codeEl.tagName !== 'code') return

      node.raw = codeEl.children?.[0].value
      node.meta = codeEl.data.meta
    }
  })
}

export const postProcess = () => (tree) => {
  visit(tree, 'element', (node) => {
    if (node?.type === 'element' && node?.tagName === 'pre') {
      node.properties['raw'] = node.raw
      node.properties['meta'] = node.meta
    }
  })
}
