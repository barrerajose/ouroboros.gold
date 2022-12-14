import {Transmuter} from "./implements/Transmuter"

const OBJ = Transmuter<any>(
  "object",
  value => JSON.stringify(value),
  query => JSON.parse(query),
  () => true
)

// Transmute strings into values and values into strings.
export const Transmuters = {
  NULL: Transmuter<null>(
    "null",
    value => OBJ.toQuery(value)!,
    query => OBJ.toValue(query),
    value => value === null
  ),
  BOOL: Transmuter<boolean>(
    "boolean",
    value => `${value}`,
    query => {
      if (query === "true" || query === "false") return query === "true"
      throw `value [${query}] is cannot be transmuted into a boolean`
    },
    value => typeof value === "boolean"
  ),
  NUM: Transmuter<number>(
    "number",
    value => `${value}`,
    query => Number(query),
    value => typeof value === "number" && !isNaN(value)
  ),
  STR: Transmuter<string>(
    "string",
    value => value,
    query => query,
    value => typeof value === "string"
  ),
  ARR: Transmuter<any[]>(
    "array",
    value => OBJ.toQuery(value)!,
    query => OBJ.toValue(query),
    value => Array.isArray(value)
  ),
  OBJ,
} as const

export function objectTransmuter<T>(): Transmuter<T> {
  return Transmuters.OBJ
}

export function selectTransmuter<T>(value: T): Transmuter<T> {
  const transmuter: Optional<Transmuter<any>> = Object.values(Transmuters).find(
    (t: Transmuter<any>) => t.valid(value)
  )
  return transmuter || objectTransmuter<T>()
}
