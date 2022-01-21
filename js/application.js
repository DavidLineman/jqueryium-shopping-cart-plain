
let sum = function (acc, x) { return acc + x};

let getSubTotal = function(ele) {
  let price = parseFloat($(ele).find('.price').text());
  let quantity = parseFloat($(ele).find('.quantity input').val());

  let subTotal = price * quantity;
  if(isNaN(quantity)) {
    parseFloat($(ele).find('.quantity input').val(""));
  } 

  if(isNaN(subTotal)) {
    $(ele).children('.item-subtotal').html('$0');
  } else {
    $(ele).children('.item-subtotal').html('$' + subTotal);
  }

  return subTotal;
}

let getTotalPrice = function() {
  let allSubTotals = [];

  $('tbody tr').each(function (i, ele) {
    let itemSubTotal = getSubTotal(ele);
    
    allSubTotals.push(itemSubTotal);
    console.log(allSubTotals)
    let totalPrice = allSubTotals.reduce(sum);
    console.log(totalPrice);

    if(isNaN(totalPrice)) {
      $('.final-price').html('$0')
    } else {
      $('.final-price').html('$' + totalPrice);
    }
    
  }); 
}

// Get each value of price

$(document).ready(function () {
  getTotalPrice();

  
  $('#addItem').on('submit', function (event) {
    event.preventDefault();
  
    let item = $(this).children('[name=item]').val()
    let price = $(this).children('[name=price]').val()
  
    $('tbody').append(
      '<tr>' +
        '<td class="item">' + item + '</td>' +
        '<td class="price">' + price + '.00' + '</td>'  +
        '<td class="quantity"><label>QTY</label><input type="number" name="quantity" value="0"><button>Remove</button></td>' +
        '<td class="item-subtotal">$0</td>' +
      '</tr>');
  
    getTotalPrice();
    $(this).children('[name=item]').val('')
    $(this).children('[name=price]').val('');
    
  });

  $(document).on('click', 'button', function (event) {
    $(this).closest('tr').remove();
    getTotalPrice();
  });

  $(document).on('input', 'tr input', function(event) {
    getTotalPrice();
    console.log($('#boogers').val())
  })

});



  

 

