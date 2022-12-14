import {useBeacon} from "../../elementals/beacons/useBeacon"
import {Beacon} from "../../elementals/beacons/Beacon"

// creates an instance of Appearance
function create(
  appearance: Readonly<{
    isOld: boolean
    font: string
    bg: string
    paper: string
    textColor: string
    sigilColor: string
  }>
) {
  return appearance
}

export type Appearance = ReturnType<typeof create>

const Appearance = {
  new: create({
    isOld: false,
    font: "font-inconsolata",
    bg: "bg-gray-100",
    paper: "bg-gray-100",
    textColor: "text-gray-900",
    sigilColor: "rgba(50,50,50,.9)",
  }),
  old: create({
    isOld: true,
    font: "font-old",
    bg: "bg-old-200",
    paper: "bg-old-200",
    textColor: "text-old-900",
    sigilColor: "#6A4C42",
  }),
} as const

const beacon = Beacon(Appearance.old)

export function useAppearance() {
  return useBeacon(beacon)[0]
}

export function setAppearance(old: boolean) {
  beacon.value(old ? Appearance.old : Appearance.new)
}
