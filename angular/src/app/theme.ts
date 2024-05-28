export const tokens = (mode: 'light' | 'dark') => ({
  grey: {
    100: mode === 'light' ? '#e0e0e0' : '#212121',
    200: mode === 'light' ? '#c2c2c2' : '#424242',
    300: mode === 'light' ? '#a3a3a3' : '#616161',
    400: mode === 'light' ? '#858585' : '#757575',
    500: mode === 'light' ? '#666666' : '#9e9e9e',
    600: mode === 'light' ? '#4d4d4d' : '#bdbdbd',
    700: mode === 'light' ? '#333333' : '#e0e0e0',
    800: mode === 'light' ? '#1a1a1a' : '#f5f5f5',
    900: mode === 'light' ? '#0d0d0d' : '#fafafa',
  },
  primary: {
    100: mode === 'light' ? '#d0d1d5' : '#1a1d1e',
    200: mode === 'light' ? '#a1a4ab' : '#33383c',
    300: mode === 'light' ? '#727681' : '#4d5259',
    400: mode === 'light' ? '#434957' : '#666c75',
    500: mode === 'light' ? '#141b2d' : '#818294',
    600: mode === 'light' ? '#101624' : '#9ba2aa',
    700: mode === 'light' ? '#0c101b' : '#b5bbc1',
    800: mode === 'light' ? '#080b12' : '#cfd5d7',
    900: mode === 'light' ? '#040509' : '#e9ebec',
  },
  greenAccent: {
    100: mode === 'light' ? '#dbf5ee' : '#0f2922',
    200: mode === 'light' ? '#b7ebde' : '#1e5245',
    300: mode === 'light' ? '#94e2cd' : '#2e7c67',
    400: mode === 'light' ? '#70d8bd' : '#3da58a',
    500: mode === 'light' ? '#4cceac' : '#4cceac',
    600: mode === 'light' ? '#3da58a' : '#70d8bd',
    700: mode === 'light' ? '#2e7c67' : '#94e2cd',
    800: mode === 'light' ? '#1e5245' : '#b7ebde',
    900: mode === 'light' ? '#0f2922' : '#dbf5ee',
  },
  redAccent: {
    100: mode === 'light' ? '#f8dcdb' : '#2c100f',
    200: mode === 'light' ? '#f1b9b7' : '#58201e',
    300: mode === 'light' ? '#e99592' : '#832f2c',
    400: mode === 'light' ? '#e2726e' : '#af3f3b',
    500: mode === 'light' ? '#db4f4a' : '#db4f4a',
    600: mode === 'light' ? '#af3f3b' : '#e2726e',
    700: mode === 'light' ? '#832f2c' : '#e99592',
    800: mode === 'light' ? '#58201e' : '#f1b9b7',
    900: mode === 'light' ? '#2c100f' : '#f8dcdb',
  },
  blueAccent: {
    100: mode === 'light' ? '#e1e2fe' : '#151632',
    200: mode === 'light' ? '#c3c6fd' : '#2a2d64',
    300: mode === 'light' ? '#a4a9fc' : '#3e4396',
    400: mode === 'light' ? '#868dfb' : '#535ac8',
    500: mode === 'light' ? '#6870fa' : '#6870fa',
    600: mode === 'light' ? '#535ac8' : '#868dfb',
    700: mode === 'light' ? '#3e4396' : '#a4a9fc',
    800: mode === 'light' ? '#2a2d64' : '#c3c6fd',
    900: mode === 'light' ? '#151632' : '#e1e2fe',
  },
});

export const themeSettings = (mode: 'light' | 'dark') => ({
  palette: {
    mode,
    primary: {
      main: mode === 'light' ? '#141b2d' : '#141b2d',
    },
    secondary: {
      main: mode === 'light' ? '#4cceac' : '#4cceac',
    },
    neutral: {
      dark: mode === 'light' ? '#a3a3a3' : '#666666',
      main: mode === 'light' ? '#858585' : '#a3a3a3',
      light: mode === 'light' ? '#e0e0e0' : '#e0e0e0',
    },
    background: {
      default: mode === 'light' ? '#fcfcfc' : '#141b2d',
    },
  },
  typography: {
    fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
    fontSize: 12,
    h1: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 40,
    },
    h2: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 32,
    },
    h3: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 24,
    },
    h4: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 20,
    },
    h5: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 16,
    },
    h6: {
      fontFamily: ['Source Sans Pro', 'sans-serif'].join(','),
      fontSize: 14,
    },
  },
});
