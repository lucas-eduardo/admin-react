import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
      --white-50: #fff;
      --white-100: #d8dbe4;
      --white-200: #c0c3d0;
      --white-300: #a7aabd;
      --white-400: #9397ac;
      --white-500: #80859d;
      --white-600: #70768b;
      --white-700: #5e6274;
      --white-800: #4c4f5e;
      --white-900: #383a46;

      --black-50: #f7f9fa;
      --black-100: #f0f1f3;
      --black-200: #e6e7e9;
      --black-300: #d6d7d8;
      --black-400: #b2b3b4;
      --black-500: #929394;
      --black-600: #6a6b6c;
      --black-700: #565759;
      --black-800: #242526;
      --black-900: #18191a;

      --red-50: #ffe9ec;
      --red-100: #ffc7cc;
      --red-200: #f7908e;
      --red-300: #ee6161;
      --red-400: #f73538;
      --red-500: #fb0b13;
      --red-600: #ed0016;
      --red-700: #db0011;
      --red-800: #ce0007;
      --red-900: #c10000;

      --blue-50: #e4f3ff;
      --blue-100: #bee0ff;
      --blue-200: #95ceff;
      --blue-300: #6bbbff;
      --blue-400: #4cabff;
      --blue-500: #349dff;
      --blue-600: #328ef0;
      --blue-700: #2d7cdd;
      --blue-800: #2a6bcb;
      --blue-900: #234cab;

      --green-50: #e7f7e6;
      --green-100: #c6eac1;
      --green-200: #a0dc99;
      --green-300: #76cf6e;
      --green-400: #53c44b;
      --green-500: #2ab923;
      --green-600: #1da919;
      --green-700: #019706;
      --green-800: #008600;
      --green-900: #006700;

      --orange-50: #faf1df;
      --orange-100: #f2dbb0;
      --orange-200: #eac37d;
      --orange-300: #e3ac4b;
      --orange-400: #de9b26;
      --orange-500: #da8c06;
      --orange-600: #d68102;
      --orange-700: #d07300;
      --orange-800: #ca6500;
      --orange-900: #bf4e00;

      --main-color-blue: var(--blue-500);
      --second-color-blue: var(--blue-300);

      --main-color-red: var(--red-500);
      --second-color-red: var(--red-300);

      --main-color-green: var(--green-500);
      --second-color-green: var(--green-300);

      --main-color-orange: var(--orange-500);
      --second-color-orange: var(--orange-300);

      --sidebar-width: 72px;
      --sidebar-full-width: 280px;

      --border-radius-02: 2px;
      --border-radius-04: 4px;
      --border-radius-06: 6px;
      --border-radius-08: 8px;
      --border-radius-10: 10px;
      --border-radius-12: 12px;
      --border-radius-14: 14px;
      --border-radius-16: 16px;
      --border-radius-18: 18px;
      --border-radius-20: 20px;

      --transition-cubic: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Roboto", sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    letter-spacing: 0.7px;
  }

  [data-theme='light'] {
    --primary-dark: var(--black-200);
    --primary-main: var(--white-50);
    --primary-light: var(--white-100);

    --color-dark: var(--black-50);
    --color-main: var(--black-500);
    --color-light: var(--black-900);

    --box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  [data-theme='dark'] {
    --primary-dark: var(--black-900);
    --primary-main: var(--black-800);
    --primary-light: var(--black-700);

    --color-dark: var(--white-300);
    --color-main: var(--white-200);
    --color-light: var(--white-50);

    --box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 10px;
  }

  .theme-color-blue {
    --main-color: var(--main-color-blue);
    --second-color: var(--second-color-blue);

    --primary-50: #e4f3ff;
    --primary-100: #bee0ff;
    --primary-200: #95ceff;
    --primary-300: #6bbbff;
    --primary-400: #4cabff;
    --primary-500: #349dff;
    --primary-600: #328ef0;
    --primary-700: #2d7cdd;
    --primary-800: #2a6bcb;
    --primary-900: #234cab;

    --main-50: #fff8e4;
    --main-100: #ffedba;
    --main-200: #ffe28e;
    --main-300: #ffd864;
    --main-400: #ffce49;
    --main-500: #ffc53e;
    --main-600: #ffb83a;
    --main-700: #ffa636;
    --main-800: #ff9634;
    --main-900: #fc7a30;
  }

  .theme-color-red {
    --main-color: var(--main-color-red);
    --second-color: var(--second-color-red);

    --primary-50: #ffe9ec;
    --primary-100: #ffc7cc;
    --primary-200: #f7908e;
    --primary-300: #ee6161;
    --primary-400: #f73538;
    --primary-500: #fb0b13;
    --primary-600: #ed0016;
    --primary-700: #db0011;
    --primary-800: #ce0007;
    --primary-900: #c10000;

    --main-50: #d8fffb;
    --main-100: #9afdf5;
    --main-200: #0bfbf3;
    --main-300: #00f5f1;
    --main-400: #00efed;
    --main-500: #00e9ef;
    --main-600: #00d7db;
    --main-700: #00c0bf;
    --main-800: #00aba5;
    --main-900: #008575;
  }

  .theme-color-green {
    --main-color: var(--main-color-green);
    --second-color: var(--second-color-green);

    --primary-50: #e7f7e6;
    --primary-100: #c6eac1;
    --primary-200: #a0dc99;
    --primary-300: #76cf6e;
    --primary-400: #53c44b;
    --primary-500: #2ab923;
    --primary-600: #1da919;
    --primary-700: #019706;
    --primary-800: #008600;
    --primary-900: #006700;

    --main-50: #f6e6f6;
    --main-100: #e8c0ea;
    --main-200: #da96dd;
    --main-300: #ca6acf;
    --main-400: #be47c4;
    --main-500: #b223b9;
    --main-600: #a320b3;
    --main-700: #8f1aac;
    --main-800: #7e16a4;
    --main-900: #5e0e98;
  }

  .theme-color-orange {
    --main-color: var(--main-color-orange);
    --second-color: var(--second-color-orange);

    --primary-50: #faf1df;
    --primary-100: #f2dbb0;
    --primary-200: #eac37d;
    --primary-300: #e3ac4b;
    --primary-400: #de9b26;
    --primary-500: #da8c06;
    --primary-600: #d68102;
    --primary-700: #d07300;
    --primary-800: #ca6500;
    --primary-900: #bf4e00;

    --main-50: #e8ebfb;
    --main-100: #c3cbf4;
    --main-200: #9baaed;
    --main-300: #6e89e6;
    --main-400: #486ee1;
    --main-500: #0654da;
    --main-600: #004bcf;
    --main-700: #0041c3;
    --main-800: #0036b7;
    --main-900: #0022a5;
  }

  a {
    text-decoration: none;

    color: unset;

    transition: color 0.5s;
  }

  button {
    cursor: pointer;

    border: 0;

    outline: 0;

    color: var(--color-light);
  }

  ul {
    list-style-type: none;
  }

  input {
    border: 2px solid transparent;

    outline: 0;
  }
`;

export { GlobalStyle };
