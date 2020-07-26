<template>
    <StateHandle @handler="doSmt" ref="stateHandle">
        <template #default="{ toggle, handle, state }">
            <div>
                <div>{{ state.modal }}{{ state.search }}</div>
                <Button @click="toggle('modal')">切换</Button>
                <Button @click="toggle('search')">切换</Button>
                <Button @click="handle('modal')">触发</Button>
                <Button @click="handle('search')">触发</Button>
            </div>
        </template>
    </StateHandle>
</template>

<script>
    import stateHandle from '@/views/StateHandle/stateHandle.js'

    const StateHandle = stateHandle(['modal', 'search'])

    export default {
        name: 'RenderLess',
        components: { StateHandle, },
        data() {
            return {
                key: 'value'
            }
        },
        created() {
            console.log(this)
        },
        methods: {
            doSmt(type) {
                this.$refs.stateHandle.toggle('modal')
                console.log(type)
            }
        },
    }
</script>

<style scoped>

</style>
