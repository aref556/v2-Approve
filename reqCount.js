var request = require('request');
var f = require('fs');

var options = {
    'method': 'GET',
    'url': 'http://localhost:3001/api/approve-key/count',
    'headers': {
    }
};

request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    f.open('count.txt', 'w', (err, fd) => {
        f.writeFile(fd, response.body, `utf8`, (err) => {
            f.close(fd, (err) => {
                if (err) throw err;
            });
            if (err) throw err;
        });
        if (err) throw err;
    });
});
