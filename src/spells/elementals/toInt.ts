export function toInt(text: string, defValue: number) {
  const num = Number.parseInt(text)
  return isNaN(num) ? defValue : num
}
