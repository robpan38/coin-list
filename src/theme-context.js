import React from "react";

export const theme = {
    light: {
      text: [26, 24, 24],
      background: [0, 0, 0]
    },
    dark: {
      text: [0, 0, 0],
      background: [26, 24, 24]
    }
}
  
export const ThemeContext = React.createContext(theme.dark);