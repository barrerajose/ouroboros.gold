import React from "react"
import {classes} from "../../classes"
import {Appearance} from "../../../ouroboros.gold/implements/Appearance"

interface Props {
  appearance: Appearance
  checked: boolean
  onToggle(): void
}

export function CheckBox({
  appearance,
  checked,
  onToggle,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <label className="flex">
      <input
        className={classes(
          "mr-1",
          appearance ? "accent-old-900" : "accent-gray-900"
        )}
        type="checkbox"
        onChange={onToggle}
        checked={checked}
      />
      {children}
    </label>
  )
}
