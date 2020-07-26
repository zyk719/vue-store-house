<template>
    <div class="layout">
        <div class="header"></div>
        <div class="body">
            <div class="side">1234</div>
            <RouterView class="content" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Layout'
    }
</script>

<style scoped lang="less">
    .layout {
        height: inherit;

        .header {
            height: 66px;
            background: #42b983;
            width: 100%;
        }
        .body {
            height: calc(100% - 66px);
            background: beige;
            // ⚠️ 设为 flex 后，子元素高度变成 100%
            display: flex;

            .side {
                flex: 0 0 180px;
                background: cadetblue;
            }
            .content {
                flex: 1 1 auto;
                background: lightsteelblue;
            }
        }
    }
</style>
