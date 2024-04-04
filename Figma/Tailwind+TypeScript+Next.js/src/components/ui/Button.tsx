// interface Button {
//   text: string
// }

import React, { ReactNode } from "react"

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button className="flex gap-2 items-center bg-gradient-to-r from-[#D51B46] to-[#EE6910] px-4 py-2 rounded-xl text-white text-sm">
      {children}
    </button>
  )
}

export default Button
