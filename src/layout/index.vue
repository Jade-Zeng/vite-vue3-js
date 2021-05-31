<template>
    <div>
        <Header/>
        <div class="contain">
            <el-row>
                <el-col :span="6">
                    <left/>
                </el-col>
                <el-col :span="18">
                    <router-view></router-view>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import Header from './components/header.vue'
    import left from "./components/left.vue";
    import right from "./components/right.vue";

    export default {
        name: 'headerView',
        components: {
            Header,
            left,
            right
        }
    }
</script>

<style scoped>

</style>
