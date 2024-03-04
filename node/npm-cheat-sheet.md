Command Description
npm init Initializes a new NPM project and creates a new package.json file in the directory.
npm install Installs all dependencies listed in the package.json file.
npm install [package] Installs a specific package and adds it to the list of dependencies in the package.json file.
npm install [package] --save-dev Installs a specific package as a development dependency.
npm uninstall [package] Removes a specific package from the node modules and the package.json file.
npm update Updates all packages to their latest versions, as specified by the version range in the package.json file.
npm update [package] Updates a specific package to its latest version.
npm ls Displays the dependency tree for the current project, showing all installed packages and their dependencies.
npm run [script] Runs a script defined in the scripts section of the package.json file.
npm test Runs the test script defined in the scripts section of the package.json file.
npm publish Publishes a package to the NPM registry.
npm version [update_type] Updates the version number in the package.json file, based on the specified update type (major, minor, or patch).
npm audit Checks for known vulnerabilities in your installed packages and suggests fixes.
npm cache clean --force Clears the NPM cache, often used to solve problems with installing packages.
npm outdated Checks for outdated packages.
npm root Displays the root directory of where your packages are stored.
npm config get prefix Gets the directory where global packages are installed.
