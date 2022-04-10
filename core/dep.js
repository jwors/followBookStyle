// 存储收集到的依赖
export default class Dep {
    constructor() {
        //  这里可以考虑换掉 使用map 类型
        this.subs = []
    }

    addSub(sub) {
        this.subs.push(sub)
    }

    removeSub(sub) {
        remove
    }

    depend() {
        if (window.target) {
            this.addSub(window.target)
        }
    }

    notify() { // 通知
        const subs = this.subs.slice()

        for (let i = 0; i < subs.length; i++) {

            // 对应的出发
            subs[i].uodata()
        }
    }
}
// test
function remove(arr, item) {
    if (arr.length) {
        const index = arr.indexOf(item)
        if (index > -1) {
            return arr.splice(index, 1)
        }
    }
}