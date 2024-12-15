module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#f42c37',
        secondary:'f42c37',
        brandYellow:'#fdc626',
        brandGreen:'#2dcc6f',
        brandBlue:'#1376f4',
        brandWhite:'#eeeeee'
      },
      container:{
        center:true,
        padding:{
          DEFAULT:'1rem',
          sm:'3rem'
        }
      }
    },
  },
  plugins: [],
}
