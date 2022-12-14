export function classes(...classNames: (Falsy | string)[]) {
  return classNames.filter(Boolean).join(" ")
}
