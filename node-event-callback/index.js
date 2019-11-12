var events = require('events');
var eventEmitter = new events.EventEmitter();
var fs = require('fs');
var readFile = () =>
{
    fs.readFile('index.html', (err, data) =>
    {
        console.log('reading file...');
        if (err) return console.error(err);
        console.log(data);

    })

}




eventEmitter.on('go_read', readFile);

eventEmitter.emit('go_read');