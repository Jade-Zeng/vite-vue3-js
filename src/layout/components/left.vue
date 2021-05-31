<template>
    <div class="left">
        <el-menu
                class="el-menu-demo"
        >
            <el-menu-item
                    v-for="(route, i) in routes"
                    :key="i"
                    @click="navigate(route)"
            >
                {{route.meta.title}}
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script setup>
    import { computed } from 'vue'
    import { routes } from '@/route'
    import { useRouter } from 'vue-router'

    const router = useRouter()
    const navigate = (el) => {
        router.push({path: el.path})
    }
</script>

<style scoped>

</style>
