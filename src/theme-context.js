import React from "react";

export const theme = {
    light: {
      text: [26, 24, 24],
      background: [255, 255, 255]
    },
    dark: {
      text: [255, 255, 255],
      background: [26, 24, 24]
    }
}
  
export const ThemeContext = React.createContext(theme.dark);