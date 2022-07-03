/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/**/*.{ts,tsx}",
   ],
   theme: {
      extend: {
         screens: {
            mobile_max: { 'max': '768px' },
            desktop_xsm: { 'max': '980px' },
            desktop_xsm_sm: { 'min': '980px', 'max': '1080px' },
            desktop_sm_md: { 'min': '1080px', 'max': '1280px' },
         },
         backgroundImage: {
            header: 'url(/src/assets/menu/header.png)',
         },
         fontFamily: {
            sans: 'Italiana, sans-serif',
         },
         width: {
            25: '25rem',
         },
         minWidth: {
            25: '25rem',
         },
         padding: {
            horizontal_padding: '15.625rem',
            md_horizontal_padding: '12.5rem',
            sm_horizontal_padding: '9.375rem',
            mobile_horizontal_padding: '6.25rem',
         },
         colors: {
            dark: {
               900: '#242536',
               700: '#4c4d5e',
               500: '#92929d',
               300: '#e4e4e4',
               100: '#f6f6f6',
            },
            red: {
               901: '#c62a2a',
               500: '#d73b3b',
            },
            blue: {
               900: '#282b57',
            },
         },
      },
   },
   plugins: [],
}

// $padding-horizontal-mobile: 100px;
// $padding-horizontal-sm: 150px;
// $padding-horizontal-md: 200px;
// $padding-horizontal: 250px;
// $dark: #242536;
// $dark-grey: #92929d;
// $grey: #e4e4e4;
// $black: #4c4d5e;
// $light-grey: #f6f6f6;
// $blue: #282b57;
// $red: #d73b3b;
// $red-dark: #c62a2a;