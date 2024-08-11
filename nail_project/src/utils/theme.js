export const theme = Object.freeze({
    space: [0, 4, 8, 16, 24, 32, 64, 128, 256, 512],
    fonts: {
      body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      heading: 'inherit',
      monospace: 'Menlo, monospace',
      table: 'Lucida Sans Unicode, Lucida Grande, Sans-Serif',
      fancy: '"Great Vibes", cursive',
       Garamond: 'EB Garamond, Sans-Serif'
    },
    fontSizes: {
      xs: 12,
      s: 14,
      m: 16,
      xm: 18,
      ml: 24,
      l: 32,
      xl: 64,
    },
    fontWeights: {
      normal: 400,
      medium: 700,
      bold: 900,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.125,
    },
    colors: {
      headers: 'rgb(229, 18, 155)',
      modalBackground: '#fff',
      backdropBackgroundHover: 'rgb(229, 18, 155)',
      backForCalendar: '#1e1f21',
      tableBorderColor: 'rgb(0, 128, 255)',
      tableBgcHead: '#bcebdd',
      tableBgc: '#f8e391',
      backForCalendarButton: '#565759',
      colorForCalendarButton: '#e6e6e6',
      textColors: 'rgb(229, 18, 155)',
      backForButton: 'rgb(229, 18, 155)',
      backForHoverButton: 'rgb(255, 105, 180)',
      focusInput: '#ff69b4',
      hoverLink: '#40e0d0',
      input: 'rgba(255, 105, 180, 0.6)'
    },
    radii: {
      none: '0',
      normal: '5px',
      round: '50%',
    },
    borders: {
      none: 'none',
      phonebook: '2px solid  black',
      contactForm: '1px dashed black',
      headerBorder: '2px solid  blue',
    },
    shadows: {
      boxShadow: '0px 0px 4px 3px gray',
      buttonsShadow: ' 0 1px 1px #2d2020',
      deletButton: '3px 3px 3px 0 red',
      textShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22) ',
    },
  });