/**
 *
 */
const pkg = require("./package.json");

const banner = `/**
 * ${pkg.name} -  ${pkg.description}
 *
 *@version ${pkg.version}
 *@author ${pkg.author}
 *@link ${pkg.homepage}
 *@license ${pkg.license}
 */
`;

module.exports = {
    entry: "src/nut.js",
    banner,
    format: 'iife',
    moduleName: "nut",
    dest: "build/nut.js",
    external: ['root'],
    globals: {
        root: 'this'
    }
}
