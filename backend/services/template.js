const fs = require('fs');
const util = require('util');
const Mustache = require('mustache');

module.exports = {
    tokenize: async (relativePathToTemplate, tokens) => {
        const readFileAsync = util.promisify(fs.readFile);
        const template = await readFileAsync(path.join(__dirname, relativePathToTemplate), 'utf8');
        return Mustache.render(template, tokens);
    }
}
