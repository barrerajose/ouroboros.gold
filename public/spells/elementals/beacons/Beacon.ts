import {Emitter} from "../Emitter"
import {Flask} from "../Flask"
import {isEqual as _isEqual} from "lodash"

export function Beacon<S>(initial: S, isEqual = _isEqual) {
  const emitter: Emitter<S> = Emitter<S>(
    (listener, subscribing) => subscribing && listener(flask())
  )
  const flask = Flask(initial, {isEqual, on: emitter.emit})
  return {
    value: flask,
    on: emitter.on,
  }
}

export type Beacon<S> = ReturnType<typeof Beacon<S>>
