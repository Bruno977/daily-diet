
import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    COLORS: {
      RED_DARK: string,
      RED_MID: string,
      RED_LIGHT: string,
  
      GREEN_DARK: string,
      GREEN_MID: string,
      GREEN_LIGHT: string,
  
      GRAY_1: string,
      GRAY_2: string,
      GRAY_3: string,
      GRAY_4: string,
      GRAY_5: string,
      GRAY_6: string,
      GRAY_7: string,
  
      WHITE: string
    },
    FONT_WEIGHT:{
      REGULAR: string,
      BOLD: string,
      
    },
    LINE_HEIGHT: {
      DEFAULT: number
    },
    FONT_SIZE:{
      XS: number,
      SM: number,
      MD: number,
      LG: number,
      XL: number,
      XXL: number
    }
  }
}