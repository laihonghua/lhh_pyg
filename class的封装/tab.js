//  用class 关键词 设置一个对象
class Tab {
    // 设置一个构造函数
    constructor(options) {
        // 设置传参和不传参的结果
        options = options || {};
        this.itemClass = options.itemClass || '.item';
        this.eventType = options.eventType || 'mouseover';
        this.itemActiveClass = options.itemActiveClass || 'active';
        this.contentClass = options.contentClass || '.content';
        this.contentShowClass = options.contentShowClass || 'show';

        this.items = document.querySelectorAll(this.itemClass);
        this.contetns = document.querySelectorAll(this.contentClass);
        // this.addEvent()

    }
    // 封装方法
    addEvent() {
        // 遍历注册事件
        this.items.forEach((e, i) => {

            e.addEventListener(this.eventType, (e) => {
                let target = e.target;//  点击的item
                //  切换分类
                this.changeItems(target);
                // 切换内容
                this.changeContent(i);
            })



        })
    }
    // 排他切换分类
    changeItems(current) {
        this.items.forEach((e) => {
            e.classList.remove(this.itemActiveClass)

        });
        current.classList.add(this.itemActiveClass)
    }
    //排他切换内容
    changeContent(index) {
        this.contetns.forEach(e => {
            e.classList.remove(this.contentShowClass)
        })
        this.contetns[index].classList.add(this.contentShowClass);
    }
}
// console.dir(Tab);