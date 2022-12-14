export interface TreeNode {
  dirs: Record<string, TreeNode>
  files: string[]
  parent: Nullable<string>
}

export function Tree(root: TreeNode) {
  return {
    root,
    getTreeEntry(
      path: string[],
      node: TreeNode = root
    ): Optional<TreeNode | string> {
      const [first, ...rest] = path
      if (!first || !node) return undefined
      const {files, dirs} = node
      if (first in dirs) {
        return !rest.length ? dirs[first] : this.getTreeEntry(rest, dirs[first])
      }
      return files.find((f: any) => f === first)
    },
    traverse(visitor: Fn<boolean | void, TreeNode>, breadthFirst = true) {
      const nodes = [root]
      while (nodes.length) {
        const node = nodes.shift()!
        if (visitor(node)) return
        if (breadthFirst) {
          nodes.push(...Object.values(node.dirs))
        } else {
          nodes.unshift(...Object.values(node.dirs))
        }
      }
    },
  }
}
