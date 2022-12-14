import {format} from "../../../elementals/format"

export const EntityTypeInfo = {
  jpg: {type: "image/jpeg"},
  json: {type: "application/json"},
  md: {type: "text/markdown"},
  png: {type: "image/png"},
  svg: {type: "image/svg+xml"},
  ts: {type: "text/plain"},
  tsx: {type: "text/plain"},
  txt: {type: "text/plain"},
  webp: {type: "image/webp"},
} as const

export type EntityType = keyof typeof EntityTypeInfo

export function isEntityImage(type: EntityType) {
  return type === "jpg" || type === "png" || type === "webp"
}
export function isEntityBinary(type: EntityType) {
  return isEntityImage(type)
}

export function getEntityType(entityName: string) {
  const type = /\.(\w+)$/.exec(entityName)?.[1]
  if (!type) return undefined
  if (!(type in EntityTypeInfo))
    throw format(
      `Entity [#0] has unknown type [#1]. Valid types are [#2].`,
      entityName,
      type,
      Object.keys(EntityTypeInfo)
    )
  return type as keyof typeof EntityTypeInfo
}
