export const COLOR = {
  text_1: '#235474',
  text_2: '#929295',
  text_3: '#54aa98',
  text_alert: '#f44335',
  hover: '#6dd0cd',
  black: '#333333',
  white: '#fff',
  dark_primary: '#00000033',
  light_primary: '#e0e9ef',
  bg_primary: '#fff',
  bg_secondary: '#f7f7f7',
  bg_mask: '#c7c1c178',
  btn_primary: '#6dd0cd',
  btn_secondary: '#dea8a8',
};

export const FONT = {
  logo: '30px',
  lg: '24px',
  md: '18px',
  sm: '16px',
  xs: '14px',
  xss: '12px',
};

export const DISTANCE = {
  xl: '80px',
  lg: '60px',
  md: '30px',
  sm: '20px',
  xs: '10px',
};

export const MEDIA_QUERY_MD = {
  md: '@media scream and (min-width: 768px)',
};

export const MEDIA_QUERY_LG = {
  lg: '@media scream and (min-width: 1000px)',
};

export const EFFECT = {
  shadowDark: `0px 2px 0.5px ${COLOR.dark_primary}`,
  shadowLight: `0px 1px 4px ${COLOR.light_primary}`,
  shadowHover: `0px 1.5px 0.3px ${COLOR.hover}`,
  shadowInput: `0px 0px 2px 0.5px ${COLOR.dark_primary}`,
  block: `
    display: block;
    color: ${COLOR.dark_primary};
    width: 100%;
    padding: 10px;
    border: 3px solid ${COLOR.dark_primary};
    background: transparent;
    box-shadow: 0px 1px 4px ${COLOR.dark_primary}30;
  `,
};
