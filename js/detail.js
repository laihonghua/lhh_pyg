let id = location.search.substring(4);
debugger;
// let target = phoneData.forEach(function (e) {
//     e.pID = id
//     return e.pID

// });
// console.log(target);

let target = phoneData.find(e => {
    console.log(e);
    return e.pID == id;
})
let a = $('.dd>em').html(target.price)
// console.log(a);
$('.sku-name').text(target.name)
$('.preview-img>img').attr('src', target.imgSrc)


$('.choose-btns').on('click', function () {
    console.log(1);
    $(location).attr('href', "file:///C:/Users/laida/Desktop/my-pyg/cart.html");
})
