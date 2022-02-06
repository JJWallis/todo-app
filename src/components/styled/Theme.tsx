import lightBg from '../../assets/bg-desktop-light.jpg'
import darkBG from '../../assets/bg-desktop-dark.jpg'

export type HandleThemeChange = (light: boolean) => void

export const lightTheme = {
   fontFamily: 'Josefin Sans',
   colorBg: 'hsl(236, 33%, 92%)',
   colorFg: 'hsl(0, 0%, 98%)',
   fcSummary: 'hsl(233, 11%, 84%)',
   fcTodo: 'hsl(235, 19%, 35%)',
   fcTodoFtr: 'hsl(236, 9%, 61%)',
   hdrBgImg: lightBg,
   hover: 'hsl(237, 14%, 26%)',
   active: 'hsl(220, 98%, 61%)',
}

export const darkTheme = {
   fontFamily: 'Josefin Sans',
   colorBg: 'hsl(235, 21%, 11%)',
   colorFg: 'hsl(235, 24%, 19%)',
   fcSummary: 'hsl(234, 11%, 52%)',
   fcTodo: 'hsl(234, 39%, 85%)',
   fcTodoFtr: 'hsl(233, 14%, 35%)',
   hdrBgImg: darkBG,
   hover: 'hsl(236, 33%, 92%)',
   active: 'hsl(220, 98%, 61%)',
}
