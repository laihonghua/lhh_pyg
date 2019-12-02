let id = location.search.substring(4);
// debugger;
// let target = phoneData.forEach(function (e) {
//     e.pID = id
//     return e.pID

// });
// console.log(target);

let target = phoneData.find(e => {
    // console.log(e);
    return e.pID == id;
})
let a = $('.dd>em').html(target.price)
// console.log(a);
$('.sku-name').text(target.name)
$('.preview-img>img').attr('src', target.imgSrc)


$('.choose-btns').on('click', function () {
    // console.log(1);
    1
    let num = $('.choose-number').val()


    if (num.trim().length === 0 || isNaN(num || parseInt(num) <= 0)) {
        alert('沙雕 错了')
        return;
    }

    let arr = kits.loadData('myKey')


    let exist = arr.find(e => {
        return e.pID == id
    });

    num = parseInt(num)
    if (exist) {
        exist.num += num
    } else {
        let obj = {

            pID: target.pID,
            imgSrc: target.imgSrc,
            name: target.name,
            price: target.price,
            // 件数要从输入框里面获取
            num: num,
            isChecked: true


        }
        arr.push(obj)
    }


    kits.saveData('myKey', arr)


    // console.log(arr);

    $(location).attr('href', "file:///C:/Users/laida/Desktop/my-pyg/cart.html");

})


