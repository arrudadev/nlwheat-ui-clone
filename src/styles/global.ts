import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #121214;
    --green: #04d361;
    --green-light: #4fe090;
    --green-low: #11251c;
    --carbon: #3c3c42;
    --red: #ce4a4a;
    --orange: #ff7a29;
    --yellow: #ffcd1e;
    --attention: #332616;
    --primary: #8257e5;
    --primary-hover: #9466ff;
    --primary-border: #6833e4;
    --primary-shape: #734bd1;
    --purple-low: #2d264a;
    --purple-low-text: #e2d6ff;
    --text-purple: #e2d6ff;
    --gray: #e1e1e6;
    --text: #a8a8b3;
    --support: #737380;
    --shape: #202024;
    --shape-hover: #29292e;
    --icons: #3f4f63;
    --attention: #fd951f;
    --borders: #323238;
    --experts: #d6ac4e;
    --react: #2ac7e3;
    --reactnative: #4763ff;
    --node: #8cc84b;
    --elixir: #b13af0;
    --flutter: #0389ff;
    --black: #09090a;
    --white: #fff;
    --scrollbar: #4d4d57;
    --scrollbar-background: transparent;
    --gradient: linear-gradient(89.11deg,rgba(113,104,212,0.16) 1.53%,rgba(43,200,227,0.16) 98.35%);
    --gradient-started: linear-gradient(90deg,rgba(4,211,97,0.61),rgba(130,87,230,0.61))
  }

  html {
      font-family: Roboto, sans-serif;
      background: var(--background);
      color: var(--text)
  }

  body {
      scrollbar-width: thin;
      scrollbar-color: var(--scrollbar) var(--scrollbar-background)
  }

  blockquote,
  body,
  dd,
  dl,
  dt,
  fieldset,
  figure,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  html,
  iframe,
  legend,
  li,
  ol,
  p,
  pre,
  textarea,
  ul {
      margin: 0;
      padding: 0
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
      font-size: 100%;
      font-weight: 400
  }

  ul {
      list-style: none
  }

  button,
  input,
  select,
  textarea {
      margin: 0;
      padding: 0;
      font-family: Roboto,sans-serif
  }

  *, :after, :before {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box
  }

  img, video {
      height: auto;
      max-width: 100%
  }

  iframe {
      border: 0
  }

  a, button {
      cursor: pointer
  }

  a, a:hover {
      text-decoration: none
  }

  @media (min-width: 320px) {
      :root {
          --font-text:15px
      }
  }

  @media (min-width: 576px) {
      :root {
          --font-text:16px
      }
  }

  ::-webkit-scrollbar,::-webkit-scrollbar-track {
      background: var(--scrollbar-background)
  }

  ::-webkit-scrollbar {
      width: 6px
  }

  ::-webkit-scrollbar-thumb {
      background: var(--scrollbar)
  }
`;
