/*
 * 功能：
 *  # 集中管理状态
 *  # 触发事件分发
 */

const isDev = process.env.NODE_ENV === 'development'

const stateHandle = (stateTags = ['state']) => ({
    data() {
        // stateName[] => { stateName: false, }
        return stateTags.reduce((acc, tag) => (acc[tag] = false) || acc, {})
    },
    methods: {
        toggle(stateTag) {
            this[stateTag] = !this[stateTag]
        },
        handle(actionTag) {
            if (isDev && this.$listeners.handler === undefined) {
                console.error('no function named handler to deal actionTag:', actionTag)
                return
            }

            this.$listeners.handler(actionTag)
        },
    },
    render() {
        return this.$scopedSlots.default({
            toggle: this.toggle,
            handle: this.handle,
            state: {...this.$data}
        })
    }
})

export default stateHandle
