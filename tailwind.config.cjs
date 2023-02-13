/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Roboto', 'sans-serif'],
      'body': ['Oswald', 'sans-serif']
    },
    screens: {
      
      'tablet': '600px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        'the-plant': "url('/hero_banner.jpg')",
        'about-cover': "url('/about_cover.jpg')",
        'pixil-art-house' : "url('/pixil_art_house.jpg')",
        'pixil-forest' : "url('/pink_forest.png')"
      },
      colors: {
        'baby-blue': '#D4F1F4',
        'blue-green': '#75E6DA',
        'blue-grotto': '#189AB4',
        'navy-blue' : '#05445E',
        'viking': '#5BB5DE', 
        'viking-lite': '#E1E2DA' ,
        'blue-violet': '#5D4FB2',
        'brandy-rose': '#BD9581',
        'mirage' : '#1C152A',
        'trendy-green' : '#868A1F',
        'publeo' : '#79240C',
        'grenadier': '#DC3A05',
        'jacko-bean': '#2E1505',
        'lynch':'#7782A4',
        'heavy-metal': '#383936',
        'enury' : '#D6B1A4',
        'dark-blue': '#050A30',
        'yellow-title' : '#FFFDD0',
        'theme-black': '#00000066',
      },
      keyframes: {
        slideInTop : {
            '0%' : { transform: 'translateY(-100%)' , opacity : '0' },
            '100%' : { transform: 'translateY(0%)' , opacity:'1' }
        },
        slideInRight : {
            '0%' : { transform: 'translateX(-100%)' , opacity : '0' },
            '100%' : { transform: 'translateX(0%)' , opacity:'1' }
        },
        slideInLeft : {
            '0%' : { transform: 'translateX(200%)' , opacity : '0' },
            '100%' : { transform: 'translateX(0%)' , opacity:'1' }
        },
        popIn :{
          '0%' : {transform : 'scale(2)'}
        }
      },
      animation: {
        'slide-in-down' : 'slideInTop 1000ms ease-in-out forwards',
        'slide-in-right' : 'slideInRight 1000ms ease-in-out forwards',
        'slide-in-left' : 'slideInLeft 1000ms ease-in-out forwards',
      }
    },
  },
  plugins: [],
};
