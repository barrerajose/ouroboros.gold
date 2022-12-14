import {Directory} from "./Directory"
import {EntityTypeInfo, isEntityBinary} from "./implements/EntityTypes"

export async function summon(entityName: string): Promise<string> {
  const type = Directory.getType(entityName)
  const response = await fetch(entityName, {
    method: "GET",
    headers: {contentType: EntityTypeInfo[type].type},
  })
  if (!response.ok) throw new Error(`Error loading entity [${entityName}].`)

  return isEntityBinary(type)
    ? URL.createObjectURL(await response.blob())
    : response.text()
}
