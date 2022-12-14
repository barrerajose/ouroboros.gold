import React from "react"
import {classes} from "../elementals/classes"
import {useAppearance} from "./implements/Appearance"
import {Sigil} from "./implements/sigils/Sigil"
import {useQueryParamsAsState} from "../elementals/react/routing/useQueryParamsAsState"
import {Directory} from "../implements/summon/Directory"
import {TreeNode} from "../implements/summon/implements/Tree"
import {chunk} from "lodash"
import {BookBinder} from "./implements/bookBinder/BookBinder"
import {useBookPreview} from "./implements/preview/useBookPreview"
import "./ouroboros.gold.css"

const entityName = "./assets/texts/chapter1.txt"

export function OuroborosGold() {
  const [{sigils}, update] = useQueryParamsAsState({
    sigils: false,
  })
  const [bookPreview, refresh] = useBookPreview()
  const appearance = useAppearance()
  function sig() {
    const nodes: TreeNode[] = []
    Directory.tree.traverse(n => {
      nodes.push(n)
    })
    return nodes
      .map(n => n.files.map(f => ({path: n.parent + "/" + f, f})))
      .flat()
  }

  return (
    bookPreview || (
      <div
        className={classes(
          "ouroboros-gold w-fill flex justify-center ",
          appearance.textColor,
          appearance.bg
        )}
      >
        {/*<div className="cover-page">*/}
        {/*  <h1>Beautiful PDFs from HTML</h1>*/}
        {/*  <h3>An introductory guide by Ashok Khanna</h3>*/}
        {/*  <h3>April 2021</h3>*/}
        {/*</div>*/}
        {/*<div className="break-after-page" />*/}
        <div className="">
          {/*<div className="flex space-x-2">*/}
          {/*  <CheckBox*/}
          {/*    appearance={appearance}*/}
          {/*    checked={appearance.isOld}*/}
          {/*    onToggle={() => setAppearance(!appearance.isOld)}*/}
          {/*  >*/}
          {/*    Old Appearance*/}
          {/*  </CheckBox>*/}
          {/*  <CheckBox*/}
          {/*    appearance={appearance}*/}
          {/*    checked={sigils}*/}
          {/*    onToggle={() => update({sigils: !sigils})}*/}
          {/*  >*/}
          {/*    Sigils*/}
          {/*  </CheckBox>*/}
          {/*</div>*/}

          {sigils ? (
            <table
              className={classes(
                "p-2 w-fill flex justify-center ",
                appearance.textColor,
                appearance.paper
              )}
            >
              <tbody>
                {chunk(sig(), 3).map((arr, idx) => (
                  <tr key={idx}>
                    {arr.map(({f, path}, idx) => (
                      <td key={idx}>
                        <Sigil
                          text={f.replace(/\.\w+/, "").toUpperCase()}
                          data={path}
                          color={appearance.sigilColor}
                          svgProps={{height: 200}}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <BookBinder entityName={entityName} onFinished={refresh} />
          )}
        </div>
      </div>
    )
  )
}
