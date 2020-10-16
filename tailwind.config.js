module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    fontFamily: {
      'main': ['Turret\\ Road'],
      'secondary': ['Ubuntu'],
      'display': ['Turret\\ Road'],
      'body': ['Ubuntu'],
    },
    extend: {
      colors: {
        'green-1000': 'hsl(125, 97%, 14%)',
        'green-900': 'hsl(125, 86%, 20%)',
        'green-800': 'hsl(125, 79%, 26%)',
        'green-700': 'hsl(122, 80%, 29%)',
        'green-600': 'hsl(122, 73%, 35%)',
        'green-500': 'hsl(123, 57%, 45%)',
        'green-400': 'hsl(123, 53%, 55%)',
        'green-300': 'hsl(124, 63%, 74%)',
        'green-200': 'hsl(127, 65%, 85%)',
        'green-100': 'hsl(125, 65%, 93%)',

        'red-1000': 'hsl(348, 94%, 20%)',
        'red-900': 'hsl(350, 94%, 28%)',
        'red-800': 'hsl(352, 90%, 35%)',
        'red-700': 'hsl(354, 85%, 44%)',
        'red-600': 'hsl(356, 75%, 53%)',
        'red-500': 'hsl(360, 83%, 62%)',
        'red-400': 'hsl(360, 91%, 69%)',
        'red-300': 'hsl(360, 100%, 80%)',
        'red-200': 'hsl(360, 100%, 87%)',
        'red-100': 'hsl(360, 100%, 87%)',

        'bscs-gray-1000': 'hsl(210, 24%, 16%)',
        'bscs-gray-900': 'hsl(209, 20%, 25%)',
        'bscs-gray-800': 'hsl(209, 18%, 30%)',
        'bscs-gray-700': 'hsl(209, 14%, 37%)',
        'bscs-gray-600': 'hsl(211, 12%, 43%)',
        'bscs-gray-500': 'hsl(211, 10%, 53%)',
        'bscs-gray-400': 'hsl(211, 13%, 65%)',
        'bscs-gray-300': 'hsl(210, 16%, 82%)',
        'bscs-gray-200': 'hsl(214, 15%, 91%)',
        'bscs-gray-100': 'hsl(216, 33%, 97%)',
      }
    },
  },
  variants: {},
  plugins: [],
}
