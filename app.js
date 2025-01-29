const request = require('request');

const url = 'https://reqres.in/api/users?page=2';

request({ url: url }, (error, response) => {
    if (error) {
        console.error('Error fetching data:', error);
        return;
    }

    const datas = JSON.parse(response.body);

    datas.data.forEach(function(item) {
        console.log('This is the email address: ' + item.email);
    });


});
