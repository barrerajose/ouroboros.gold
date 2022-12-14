export function hash(str: string) {
  return Array.from(str).reduce(
    (prevHash, currVal) =>
      ((prevHash << 5) - prevHash + currVal.charCodeAt(0)) | 0,
    0
  )
}
