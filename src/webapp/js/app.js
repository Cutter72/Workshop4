$('document').ready(function () {
    getAllBooks();
    getBook(2);


});

function getAllBooks() {
    $.ajax({
        url: 'http://localhost:8282/books',
        type: 'GET',
        dataType: 'json'
    }).done(function (result) {
        displayAll(result);
    });
    var ul = $('#book-list');
    ul.on('click', 'li', function () {
        $(this).next().slideToggle('slow');
    });
}

function displayAll(bookList) {
    var ul = $('#book-list');
    for (var i = 0; i < bookList.length; i++) {
        var newLi = $('<li>').text(bookList[i].title).attr('data-id', [i]+1);
        ul.append(newLi);
        var newDiv = $('<div>').attr('data-id', [i]+1).html(bookList[i].isbn+'<br/>'+
        bookList[i].author+'<br/>'+bookList[i].publisher).hide();
        ul.append(newDiv);
        console.log(bookList[i]);
    }
}

function getBook(id) {
    $.ajax({
        url: 'http://localhost:8282/books/'+id,
        type: 'GET',
        dataType: 'json'
    }).done(function (result) {
        display(result);
    });
}

function display(bookId) {
    var ul = $('#book-list');
        var newLi = $('<li>').text(bookId.title).attr('data-id', bookId.id);
        ul.append(newLi);
        var newDiv = $('<div>').attr('data-id', bookId.id).html(bookId.isbn+'<br/>'+
            bookId.author+'<br/>'+bookId.publisher).hide();
        ul.append(newDiv);
        console.log(bookId);
}
