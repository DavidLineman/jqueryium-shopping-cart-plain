
  // let itemSubTotal = function(ele) {
  //   let price = parseFloat($(ele).find('.price').text());
  //   // let quantity = parseFloat($(ele).find('[name=quantity]').val());
  //   console.log(price)
  //   // let subTotal = price * quantity;
  //   // console.log(subTotal);
  //   // console.log(quantity);

  //   $(ele).children('.subtotal').text(price);

  // };
  


$(document).ready(function () {

  $('tbody tr').each(function(ele, i) {
    console.log($(ele).children('.item').text())

    console.log(price);
  })

 

  // $('tr input').on('input', function(event) {
  //   event.preventDefault();
  //   let quantity = $(this).val();
  //   console.log(quantity);
  //   // $('item-')
  // })

  // $('tbody tr').each(function (i, ele) {
  //   itemSubTotal(ele);
  // });


 
// This works!

  // $('.quantity-one').on('input', function(event) {
  //   event.preventDefault();
  //   let price = parseFloat($('.price-one').text());
  //   let quantity = $(this).children('[name=quantity-one]').val();
    
  //   let subTotal = price * quantity;
  //   console.log(subTotal);
  //   console.log(quantity);

  //   $('.item-subtotal-one').text('$' + subTotal);
  // });

  // $('.quantity').on('input', function(event) {
  //   // event.preventDefault();
  //   $('tbody tr').each(function(i, ele) {
  //     let price = parseFloat($(this).find('price').text());
  //     let quantity = parseFloat($(this).find('.quantity input').val());
      
  //     console.log(price)
  //     let subTotal = price * quantity;
  //     // console.log(subTotal);
  //     // console.log(quantity);

  //     $('.item-subtotal').html('$' + subTotal);
  //   })
    
  // });

  // This also works.

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
  });


});

// let updateSubTotal = function (ele) {

//   let price = parseFloat($(ele).children('.price').text());
//   let quantity = parseFloat($(ele).children('.quantity input').val());
//   let subTotal = price * quantity;
//   $('.item-subtotal').text('$' + quantity);

//   return subTotal;
// };