Welcome to Namaste React Notes.

How to build a Production Ready App?

=> Hot Module Replacement (HMR): When we are working on a React application, HMR ensures that changes we make to your code are reflected instantly without requiring a full page reload.For example, if we modify a component, the UI updates immediately without manual refresh.
How It Works:
The application asks the HMR runtime to check for updates.
The runtime asynchronously downloads updates and notifies the application.
The application then applies the updates, ensuring a seamless development experience.

HMR keeps our React app in sync with our code changes, making development smoother and more efficient!

and for HMR Parcel uses File Watcher Algorithm.
=> File Watcher Algorithm: A file watcher algorithm monitors changes to files and directories, allowing applications to react dynamically when files are created, modified, or deleted.

When we work on a React project, we often make changes to our code (e.g., components, styles, or configuration files).
React leverages a file watcher to monitor these changes in real-time.
React’s development server (e.g., via tools like Webpack, Parcel, or Create React App) watches our files.
It automatically recompiles and reloads our application in the browser.
This rapid feedback loop speeds up development by showing our changes instantly.

Bundling :
Parcel automatically bundles our application for production.
It creates a single output file (or multiple files) that include all our JavaScript, CSS, HTML, and other assets.
This bundling process optimizes loading times by reducing the number of requests made by the browser.
Parcel also generates a modern JavaScript bundle using <script type="module"> for modern browsers and a fallback bundle using <script nomodule> for older browsers.

Minification : 
Parcel includes built-in minifiers for JavaScript, CSS, HTML, and SVG.
Minification reduces file sizes by removing unnecessary whitespace, renaming variables, and applying other optimizations.

Parcel performs additional optimizations like tree shaking (removing unused code), scope hoisting (improving runtime performance), and image optimization.
It also sets the NODE_ENV environment variable to “production,” allowing dead branches to be removed from our code during the build process.
By default, minification is enabled when we use the parcel build command.



Tree Shaking (Dead Code Elimination):
In production builds, Parcel statically analyzes our code and removes unused parts (dead code).
This reduces the bundle size, making our application load faster.

Parcel minifies JavaScript, CSS, HTML, and SVG files by default.
Minification removes unnecessary whitespace and optimizes variable names.
More about Parcel on Official Documentation: https://parceljs.org/features/development
