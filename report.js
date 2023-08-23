const newman = require('newman');

newman.run({
    collection: require('./collection/simpleBookCollection.json'), // pointing to local JSON file.
    //environment: require('./collection/customer_api_env.json'), 
    iterationCount: 1,
    reporters: ['cli','htmlextra'],
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }

}, function (err) {
    if (err) { throw err; }
    console.log('Collection run complete!');
});