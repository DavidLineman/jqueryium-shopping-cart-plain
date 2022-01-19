
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


// Get the value of quantity that is placed in the input box

// Multiply price * quantity on each item and display the number in the item total 

// Sum all of the item totals and display in the final price h1




// let cartTotal = function() {
//   let itemValues = [];

//   $('tr body').each(function(i, ele) {
//     let allSubTotals = getSubTotal(ele);
//     itemValues.push(allSubTotals);

//     let subTotalTotals = itemValues.reduce(sum);

//     $('.final-price').html(subTotalTotals);

//   })
// };
//   // let itemSubTotal = function(ele) {
//   //   let price = parseFloat($(ele).find('.price').text());
//   //   // let quantity = parseFloat($(ele).find('[name=quantity]').val());
//   //   console.log(price)
//   //   // let subTotal = price * quantity;
//   //   // console.log(subTotal);
//   //   // console.log(quantity);

//   //   $(ele).children('.subtotal').text(price);

//   // };

//   let getSubTotal = function(ele) {
//     let price = parseFloat($(ele).find('.price').text());
//     let quantity = parseFloat($(ele).find('.quantity input').val());
  
//     // market value is shares times market price per share
//     let subTotal = price * quantity;
//     $(ele).children('.item-subtotal').html('$' +subTotal);
  
//     console.log(subTotal);
//     return subTotal;

//   }
  


// $(document).ready(function () {

//   $('tbody tr').each(function(i, ele) {
//     getSubTotal(ele);
//     $('tr input').on('input', function(event) {
    
//       cartTotal();
      
//     })
//   });

  
    
//     // let price = $(ele).children('.price').text();
//     // console.log(price);
//     // $('tr input').on('input', function(event) {
//     //   let quantity = parseFloat($(ele).find('[name=quantity]').val());

//     //   console.log(price * quantity)
//     //   let subTotal = price * quantity;
//     //   $('.item-subtotal').text('$' + subTotal);
//     // })

  

 

//   // $('tr input').on('input', function(event) {
//   //   event.preventDefault();
//   //   let quantity = $(this).val();
//   //   console.log(quantity);
//   //   // $('item-')
//   // })

//   // $('tbody tr').each(function (i, ele) {
//   //   itemSubTotal(ele);
//   // });


 
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

//   // $('.quantity').on('input', function(event) {
//   //   // event.preventDefault();
//   //   $('tbody tr').each(function(i, ele) {
//   //     let price = parseFloat($(this).find('price').text());
//   //     let quantity = parseFloat($(this).find('.quantity input').val());
      
//   //     console.log(price)
//   //     let subTotal = price * quantity;
//   //     // console.log(subTotal);
//   //     // console.log(quantity);

//   //     $('.item-subtotal').html('$' + subTotal);
//   //   })
    
//   // });

  // This also works.

  


// });

// // let updateSubTotal = function (ele) {

// //   let price = parseFloat($(ele).children('.price').text());
// //   let quantity = parseFloat($(ele).children('.quantity input').val());
// //   let subTotal = price * quantity;
// //   $('.item-subtotal').text('$' + quantity);

// //   return subTotal;
// // };