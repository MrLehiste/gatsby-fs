import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"
import kirkhamTheme from "typography-theme-kirkham"

const typography = new Typography(fairyGateTheme)

export const { scale, rhythm, options } = typography
export default typography

export const typography1 = new Typography(fairyGateTheme)
export const typography2 = new Typography(kirkhamTheme)