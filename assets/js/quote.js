function getQuote() {
  $.ajax({
    method: 'GET',
    url: 'http://api.icndb.com/jokes/random?limitTo=[nerdy]'
  }).then(function (data) {
    // var betterQuote = quote.replace("<p>", "");
    // var bestQuote = quote.replace("</p>", "");
    // var bestQuote = quote.replace(/[<p>\/]/g, '');
    // var p = $('<p>');

    // p.text('some text');
    // p.css('background', 'blue');

    // $('body').html(p);

    // $('#text').html(bestQuote);
    // console.log(data.value.joke);
    var quote = data.value.joke;
    // var text = $(quote).text();

    $('#text').html(quote);
  });
}

$('#get-quote').on('click', getQuote);

getQuote();





