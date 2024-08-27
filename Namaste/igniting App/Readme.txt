Welcome to Namaste React Notes.

Caret (^) updates to all future (Minor and Patch versions) updates.
Tilde (~) accepts only Patch releases and avoids minor updates.


package-lock.json locks the version of dependecy.  
How to build a Production Ready App?

=> Hot Module Replacement (HMR): When we are working on a React application, HMR ensures that changes we make to our code are reflected instantly without requiring a full page reload.For example, if we modify a component, the UI updates immediately without manual refresh.
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
Parcel even renames the variable and function declarations to minimum words for faster execution (Minification).


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

#TRANSPILATION.
Transpilation bridges the gap by transforming modern code into a compatible format.

Parcel Entries (Targets)
Parcel can compile our source code in multiple different ways simultaneously. These are called targets. For example, we could have a “modern” target that targets newer browsers and a “legacy” target for older browsers.
“Entries” are the files that Parcel starts at when building your source code. They can be specified on the CLI, or using the source field in package.json.

When using Parcel, we can specify entry files using globs(globs are patterns used to specify sets of filenames with wildcard characters) to match multiple files at once.

Globs: Globs are commonly used to locate files on a filesystem. They allow us to match multiple files using a single pattern.

Examples:
*: Matches any string of any length (including empty) except for path separators (e.g., / in Unix or \\ in Windows).
?: Matches any single character. ?at: Matches “Cat,” “cat,” “Bat,” or “bat.”
[abc]: Matches one character from the specified set (e.g., [CB]at matches either “Cat” or “Bat”).
[a-z]: Matches one character from a locale-dependent range (e.g., [A-Z] matches uppercase letters).

=> The source field in package.json can specify one or more entry files.
{
  "source": ["src/a.html", "src/b.html"]
}     

Having multiple Targets:
{
  "targets": {
    "frontend": {
      "source": "app/index.html"
    },
    "backend": {
      "source": "api/index.js"
    }
  }
}
Multiple Targets: The configuration allows us to define separate entry points for different parts of our application, such as the front end and back end. This is particularly useful for large-scale applications with distinct frontend and backend components.

 Parcel's default behaviour is to build the first target listed in the target object. If we want to build a different target, we can specify it using the --target option in the command line:

parcel build --target backend


PARCEL BUILD.
To build our web application for production using Parcel we run this cmd 'npx parcel build index.html'. 

Parcel Build Process:
When we execute npx parcel build index.html, Parcel performs the following steps:
Bundling: Parcel analyzes our project’s dependencies, including HTML, CSS, JavaScript, and other assets referenced from index.html.
Optimization: It applies various optimizations, such as minification, scope hoisting, and tree shaking.
Output: Parcel generates a production-ready bundle (usually in a dist/ or build/ folder) containing all necessary files.
Scope Hoisting: Parcel optimizes the bundle by reducing the number of function closures, improving performance.
Cache Busting: It assigns unique filenames to assets to ensure proper cache invalidation when deploying updates.
parcel cleans our code like console.logs. etc. and caches frequently used files.

As we know static media takes time to load on the web app. Parcel caches while developing. It optimizes Images used by the web app.
Parcel adds polyfills (compatible with older browsers). Parcel uses parcel-cache.
Parcel manages our port numbers if more than one are being currently used.
Parcel uses consistent hashing algorithm to cache the things up. (For bundling)
Parcel orchestrates(arranges) things for us . Parcel has its own dependencies as well.

Direct-Dependencies : React and React-DOM are direct dependencies used by the project.
Babel is used for transpilation (browser compatible).

Transitive/ Indirect Dependencies: Package manager (Parcel) takes care of the transitive dependencies of our code.