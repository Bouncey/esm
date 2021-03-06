import isAbsolute from "../path/is-absolute.js"
import isRelative from "../path/is-relative.js"
import shared from "../shared.js"

function init() {
  function isPath(value) {
    return isRelative(value) ||
           isAbsolute(value)
  }

  return isPath
}

export default shared.inited
  ? shared.module.utilIsPath
  : shared.module.utilIsPath = init()
