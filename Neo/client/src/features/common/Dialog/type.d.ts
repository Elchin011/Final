import React from "react"

export type DialogTypeProps = {
    title?: string,
    desc?: string,
    children: React.ReactNode,
    open: boolean | any,
    onClose: () => void
}