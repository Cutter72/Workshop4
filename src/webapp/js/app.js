$('document').ready(function () {
    getAllBooks();
    var ul = $('#book-list');
    ul.on('click', 'li', function () {
        $(this).next().slideToggle('slow');
    });

});

function getAllBooks() {
    $.ajax({
        url: 'http://localhost:8282/books',
        type: 'GET',
        dataType: 'json'
    }).done(function (result) {
        display(result);
    });
    getBook(1);
}

function display(bookList) {
    var ul = $('#book-list');
    for (var i = 0; i < bookList.length; i++) {
        var newLi = $('<li>').text(bookList[i].title).attr('data-id', [i]);
        ul.append(newLi);
        var newDiv = $('<div>').attr('data-id', [i]).html(bookList[i].isbn+'<br/>'+
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
        showMore(result);
        console.log(result);
    });
}

function showMore(book) {

}
