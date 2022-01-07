
$('.quantity-one input').on('input', function() {
  console.log($('.quantity-one').val());
})


$(document).ready(function () {
  $('tbody tr').each(function (i, ele) {

    let price = parseFloat($(ele).find('.price').text());
    let quantity = parseFloat($(ele).find('.quantity').val());
    console.log(price)
    let subTotal = price * quantity;
    // console.log(subTotal);
    console.log(quantity);

    $('.item-subtotal').text('$' + quantity);
  });

  let itemSubTotal = function(ele) {
    let price = parseFloat($(ele).find('.price').text());
    let quantity = parseFloat($(ele).find('.quantity').val());
    console.log(price)
    let subTotal = price * quantity;
    // console.log(subTotal);
    console.log(quantity);

    $(ele).children('.subtotal').html('$' + subTotal);

  }
  
 

  $('.quantity-one').on('input', function(event) {
    event.preventDefault();
    let price = parseFloat($('.price-one').text());
    let quantity = $(this).children('[name=quantity-one]').val();
    
    let subTotal = price * quantity;
    console.log(subTotal);
    console.log(quantity);

    $('.item-subtotal-one').text('$' + subTotal);
  })


  $('#addItem').on('submit', function (event) {
    event.preventDefault();

    let item = $(this).children('[name=item]').val()
    let price = $(this).children('[name=price]').val()

    $('tbody').append(
      '<tr>' +
        '<td class="item">' + item + '</td>' +
        '<td class="price">' + '$' + price + '.00' + '</td>'  +
        '<td>QTY <input type="number" placeholder="0"> <button>Cancel</button></td>' +
        '<td class=item-total>$--.--</td>' +
      '</tr>'
    );

    

  })


});