var events = require('events');
var eventEmitter = new events.EventEmitter();
var fs = require('fs');
var readFile = () =>
{
    fs.readFile('index.html', (err, data) =>
    {
        console.log('reading file...');
        if (err) return console.error(err);
        console.log(data.toString());

    })
    eventEmitter.emit('go_read_next');
}
var readJsFile = () =>
{
    fs.readFile('index.js', (err, data) =>
    {
        console.log('reading file...');
        if (err) return console.error(err);
        console.log(data.toString());
        console.log('done!');
    })

}

eventEmitter.on('go_read', readFile);
eventEmitter.on('go_read_next', readJsFile);
eventEmitter.emit('go_read');