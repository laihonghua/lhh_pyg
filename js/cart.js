
// 获取本地存储的数据
let arr = kits.loadData('myKey')
// console.log(arr);
// 预设置一个字符串
let html = ``;
// 遍历生成一个符合格式的字符串
arr.forEach(e => {
  html += `


    <div class="item" data-id="${e.pID}">
              <div class="row">
                <div class="cell col-1 row">
                  <div class="cell col-1">
                    <input type="checkbox" class="item-ck" checked="${e.isChecked}">
                  </div>
                  <div class="cell col-4">
                    <img src="${e.imgSrc}" alt="">
                  </div>
                </div>
                <div class="cell col-4 row">
                  <div class="item-name">${e.name}</div>
                </div>
                <div class="cell col-1 tc lh70">
                  <span>￥</span>
                  <em class="price">${e.price}</em>
                </div>
                <div class="cell col-1 tc lh70">
                  <div class="item-count">
                    <a href="javascript:void(0);" class="reduce fl ">-</a>
                    <input autocomplete="off" type="text" class="number fl" value="${e.num}">
                    <a href="javascript:void(0);" class="add fl">+</a>
                  </div>
                </div>
                <div class="cell col-1 tc lh70">
                  <span>￥</span>
                  <em class="computed">${e.num * e.price}</em>
                </div>
                <div class="cell col-1">
                  <a href="javascript:void(0);" class="item-del">从购物车中移除</a>
                </div>
              </div>
            </div>
    
    
    
    `
  console.log(e);
});
// console.log(html);
// 然后在父元素中生成HMTL样式
$('.item-list').append(html);
// console.log($('.item-list'));
// 把该收的收  该藏的藏
if (arr.length != 0) {
  $(".empty-tip").hide();
  $('.cart-header ').show();
  $('.total-of').show();
}
// console.log($('.item'));
// 调用find方法返回符合条件的数组内元素 并赋值
let noCkall = arr.find(e => {
  //  条件  不等于默认值的   也就是不没有勾选点选框的
  return !e.isChecked;
})
// console.log(noCkall);

//   设置全选框的动态状态
$('.pick-all').prop('checked', !noCkall)


$('.pick-all').on('click', function () {
  // debugger;


  let status = $(this).prop('checked');
  $('.item-ck').prop('checked', status);
  $('.pick-all').prop('checked', status);
  arr.forEach(e => {
    e.isChecked = status;

  });
  kits.saveData('myKey', arr);


});




// $('.item-list').on('click', 'item-ck', function () {
$('.item-list').on('click', '.item-ck', function () {
  // debugger;

  let ckall = $('.item-ck').lengt === $('.item-ck:checked').length
  $('.pick-all').prop('checked', ckall);
  let pID = $(this).parents('.item').attr('data-id');
  console.log(pID);
  let isChecked = $(this).prop('checked');
  arr.forEach(e => {
    if (e.pID == pID) {
      e.isChecked = isChecked;
    };

  });

  kits.saveData('myKey', arr)


  calcTotal()
});

// 设置计算函数
function calcTotal() {

  let totalCount = 0; // 总件数
  let totalMoney = 0; // 总价格

  arr.forEach(e => {
    // 判断商品是否被勾选
    if (e.isChecked) {
      //  总件数赋值
      totalCount += e.num;
      //  总价格赋值

      totalMoney += e.num * e.price;
    }
  });
  // 修改页面数据
  $('.selected').text(totalCount);
  $('.total-money').text(totalMoney);
};
calcTotal();



// 给按键添加点击增加数量事件



// 给商品注册委派事件
$('.item-list').on('click', '.add', function () {
  // debugger;
  // 获取件数的标签赋值给变量
  let prev = $(this).prev();
  // 获取件数的样式赋值给变量
  let current = prev.val();
  // 触发条件  件数加一
  prev.val(++current);
  // 获取商品的ID
  let id = $(this).parents('.item').attr('data-id')
  // console.log(id);
  // 用ID找出商品的数据
  let obj = arr.find(e => {
    return e.pID == id
  })
  // console.log(obj);
  // 更新件数
  obj.num = current;
  // 本地存储
  kits.saveData('myKey', arr);
  // 计算商品的总数量和总价
  calcTotal();
  // 更新右边的总价格表示
  $(this).parents('.item').find('.computed').text(obj.num * obj.price);



});


// 给按键添加点击减少数量事件


$('.item-list').on('click', '.reduce', function () {
  // debugger;
  // 获取件数的标签赋值给变量
  let prev = $(this).next();
  // 获取件数的样式赋值给变量
  let current = prev.val();
  // 触发条件  件数加一

  if (current == 1) {
    alert('一件都不买你勾什么勾')
    return;
  } else {
    prev.val(--current);
  }
  // 获取商品的ID
  let id = $(this).parents('.item').attr('data-id')
  // console.log(id);
  // 用ID找出商品的数据
  let obj = arr.find(e => {
    return e.pID == id
  })
  // console.log(obj);
  // 更新件数
  obj.num = current;
  // 本地存储
  kits.saveData('myKey', arr);
  // 计算商品的总数量和总价
  calcTotal();
  // 更新右边的总价格表示
  $(this).parents('.item').find('.computed').text(obj.num * obj.price);



});




//  注册事件委派事件
$('.item-list').on('focus', '.number', function () {
  console.log(1);
  let old =$(this).val()

  $


});




