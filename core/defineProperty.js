// 追踪依赖
export default function defineProperty(data, key, val) {
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get() {
            return val
        },
        set: function (newValue) {
            if (val === newValue) {
                return
            }
            val = newValue
        }
    })
}
//test