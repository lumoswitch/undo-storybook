import { create } from '@storybook/theming';

// export default create({
//   base: 'light',
//   brandTitle: 'undo',
//   brandUrl: 'https://undo.com',
//   brandImage: 'https://raw.githubusercontent.com/lumoswitch/undo-storybook/main/logo.svg?token=GHSAT0AAAAAABUFNHFWY5R6I5C3UICTUF3YYV7KTQQ',
//   brandTarget: '_self',
// });

export default create({
    base: 'light',

    colorPrimary: '#5E35B1',
    colorSecondary: '#21BCCD',

    // UI
    appBg: 'white',
    appContentBg: 'white',
    appBorderColor: 'grey',
    appBorderRadius: 4,

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: 'black',
    textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    barTextColor: '#FEFBFF',
    barSelectedColor: '#ffffff',
    barBg: '#6271C6',

    // Form colors
    inputBg: 'white',
    inputBorder: 'silver',
    inputTextColor: 'black',
    inputBorderRadius: 4,

    brandTitle: 'undo',
    brandUrl: 'https://undo.com',
    brandImage: 'https://raw.githubusercontent.com/lumoswitch/undo-storybook/c389c495f3e9902fd9e8cf12327c9a9414a23140/logo.svg?token=AHCT5HQ7VYNS4BF3HF4RJKTCX5NQE',
    brandTarget: '_self',
});