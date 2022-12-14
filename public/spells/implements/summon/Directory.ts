import dir from "../../../assets/data/directory.json"
import {EntityType, getEntityType} from "./implements/EntityTypes"
import {Tree} from "./implements/Tree"

const tree = Tree(dir)

const root = Object.keys(tree.root.dirs)[0]

function split(entityName: string) {
  const [first, ...rest] = entityName.split("/")
  return [first === "." ? root : first, ...rest]
}

export const Directory = {
  tree,
  root,

  resolve(entityName: string) {
    const path = split(entityName)
    const entry = tree.getTreeEntry(path)
    if (entry !== undefined && typeof entry !== "string") {
      const index = entry.files.find(name => name.startsWith("index."))
      if (!index) throw `Unknown entity [${entityName}].`
      path.push(index)
    }
    return path.join("/")
  },

  getType(entityName: string) {
    const type = getEntityType(entityName)
    if (!type) throw `Entity [${entityName}] has no type.`
    return type as EntityType
  },
} as const
