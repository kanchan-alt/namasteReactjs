- Explore all the ways of writing css

    - Native css file (index.css)
    - Inline css style={}
    - Component libraaries like material UI, Base UI, Ant, Chakre
    - Tailwind CSS Framework
    - Style-component
    - scss

- How do we configure tailwind?

    - 1.install Tailwind your tailwind.config.js file.

    ```
     npm install -D tailwindcss
     npx tailwindcss init
    ```

    - 2.Configure your template paths(configure tailwind)

     ```
            module.exports = {
            content: ["./src/**/*.{html,js}"],
             theme: {
                extend: {},
             },
             plugins: [],
             }
     ```

    - 3.Add to index.css

    ```
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        
    ```

    - 4. run nap start
    - 5. work with tailwind in your project


- In tailwind.config.js, what does all the keys mean( content, theme, extend,plugins)?

- The content section is where you configure the paths to all of your HTML templates, JS components, and any other files that contain Tailwind class names.

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  // ...
}
```

- The theme section is where you define your color palette, fonts, type scale, border sizes, breakpoints — anything related to the visual design of your site.

```
  /** @type {import('tailwindcss').Config} */
module.exports = {
  // ...
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}
```

- The plugins section allows you to register plugins with Tailwind that can be used to generate extra utilities, components, base styles, or custom variants.

```
   /** @type {import('tailwindcss').Config} */
module.exports = {
  // ...
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwindcss-children'),
  ],
}
```

- Why do we have .postcssrc file?

    - PostCSS is a tool for transforming CSS with plugins, like autoprefixer, Preset Env, and CSS Modules

    - It takes config which compiles tailwindCSS to Normal CSS

            ```
            {
            "plugins": {
                "tailwindcss": {}
            }
            }
            ```

<mark>***coding***</mark>

*Configure Tailwind and try to build your whole app using tailwind*
### References:
[styled-components](https://styled-components.com/)

[tailwindcss](https://tailwindcss.com/)

[getbootstrap](https://getbootstrap.com/)

[Material UI](https://mui.com/)