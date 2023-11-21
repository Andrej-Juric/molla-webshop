import { onlyUnique } from "@lib/util/only-unique"
import { ProductOption } from "@medusajs/medusa"
import clsx from "clsx"
import React from "react"

type OptionSelectProps = {
  option: ProductOption
  current: string
  updateOption: (option: Record<string, string>) => void
  title: string
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
}) => {
  const filteredOptions = option.values.map((v) => v.value).filter(onlyUnique)
  // console.log(filteredOptions, "filteredOptions")
  // console.log(option, "current")

  return (
    <div className="details-filter-row details-row-size">
      <label> {title.toUpperCase()}</label>
      <div className="product-nav product-nav-dots">
        {filteredOptions.map((v) => {
          return (
            <button
              onClick={() => updateOption({ [option.id]: v })}
              key={v}
              // className={`${v}`}
              // style={{ border: `1px solid ${v}` }}
              style={{ backgroundColor: `${v}` }}
            >
              {/* {v} */}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default OptionSelect
