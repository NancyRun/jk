<template>
    <!-- <el-container style="height: 100%;overflow:hidden;">
        <v-sidebar></v-sidebar>
  
        <el-container>
            
            <el-header>
                <v-header></v-header>
            </el-header>
            
            <el-main style="background:f8f8f8;">
                <transition name="move" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </el-main>
        </el-container>
    </el-container> -->

    <el-container style="height: 100%;">
        <v-sidebar></v-sidebar>
        
        <el-container>
            <el-header style="height: 70px;border-bottom:1px solid #eeeeee;">
                <v-header></v-header>
            </el-header>
            
            <el-main style="background:#f8f8f8;padding-right:100px;">
                <transition name="move" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import vHeader from './Header.vue';
    import vSidebar from './Sidebar.vue';
    // import vTags from './Tags.vue';
    // import bus from './bus';
    export default {
        data(){
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(20).fill(item),
                tagsList: [],
                collapse: false
            }
        },
        components:{
            vHeader,
            vSidebar, 
            // vTags
        },
        // created(){
        //     bus.$on('collapse', msg => {
        //         this.collapse = msg;
        //     })

        //     // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
        //     bus.$on('tags', msg => {
        //         let arr = [];
        //         for(let i = 0, len = msg.length; i < len; i ++){
        //             msg[i].name && arr.push(msg[i].name);
        //         }
        //         this.tagsList = arr;
        //     })
        // }
    }
</script>

<style>
  
</style>
