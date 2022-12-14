const gentlyCopy = require("gently-copy")
const fs = require("fs")

function createDirectory(dirFile) {
  function getTree(path, parent) {
    return fs.readdirSync(path).reduce(
      (dir, file) => {
        if (!file.startsWith(".")) {
          const filePath = path + "/" + file
          if (fs.statSync(filePath).isDirectory()) {
            dir.dirs[file] = getTree(filePath, parent + "/" + file)
          } else {
            dir.files.push(file)
          }
        }
        return {...dir, parent}
      },
      {dirs: {}, files: []}
    )
  }
  // TODO Add dirFile to tree
  console.log("Creating", dirFile)
  fs.writeFileSync(
    dirFile,
    JSON.stringify(
      {
        dirs: {["ouroboros.gold"]: getTree(src, "ouroboros.gold")},
        files: [],
        parent: null,
      },
      null,
      2
    )
  )
}

const target = "public/ouroboros.gold"
const src = "src"

createDirectory(src + "/assets/data/directory.json")

console.log("Removing current", target)
fs.rmSync(target, {recursive: true, force: true})

console.log("Copying", src, "to", target)
gentlyCopy([src], target, {overwrite: true})
