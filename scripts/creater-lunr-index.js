const data = require('../static/data.json');
const fs = require('fs');
const lunr = require('lunr');
const path = require('path');

const staticPath = path.join(path.dirname(__dirname), 'static');

const lunrIndex = lunr(function() {
    this.ref('page');
    this.field('text');

    data.forEach(message => this.add(message), this);
});

fs.writeFile(path.join(staticPath, 'index.json'), JSON.stringify(lunrIndex), error => {
    if(error) {
        console.error('ERROR writing lunrIndex index to file.', error);
    }
});
