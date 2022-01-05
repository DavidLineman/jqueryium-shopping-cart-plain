$(document).ready(function () {


  $('#addItem').on('submit', function (event) {
    event.preventDefault();

    let item = $(this).children('[name=item]').val()
    let price = $(this).children('[name=price]').val()

    $('tbody').append(
      '<tr>' +
        '<td class="item">' + item + '</td>' +
        '<td class="price">' + price + '</td>'  +
        '<td>QTY <input type="number" placeholder="0"> <button>Cancel</button></td>' +
        '<td class="item-total"></td>' +
      '</tr>'
    );

  })
});