$('document').ready(function () {
//TEST DZIAŁANIA AJAX
    $.ajax({
        url: 'http://date.jsontest.com',
        type: 'GET',
        dataType: 'json'

    }).done(function (result) {
        console.log(result);
    });

    $.ajax({
        url: 'https://swapi.co/api/people/4/',
        type: 'GET',
        dataType: 'json'

    }).done(function (result) {
        console.log(result);
    });

});