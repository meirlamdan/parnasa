import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        'blue-dark': '#2d465a',
        'blue-custom': '#19697d',
        'blue-light': '#46c3f0',
        'gold': '#c39b6e',
        'gold-light': '#f7e8d0',
      }
    }
  }
}