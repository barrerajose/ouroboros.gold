export function format(template: string, ...replacements: unknown[]) {
  return template
    .split(/#(\d+)/)
    .map((part, idx) => (idx % 2 ? replacements[Number(part)] ?? "?" : part))
    .join("")
}
