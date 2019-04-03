<template>
    <el-aside width="200px" style="background-color: rgb(50, 65, 87);">
        <div class="logo-wraper">
            <img width="35%" src="https://www.fishqc.com/image/system/footer-logo-chs.png" alt="">
        </div>
        <el-menu :default-openeds="['aboutProduct']" :default-active="onRoutes" background-color="#324157" text-color="#969DA8" active-text-color="#64c8bc" unique-opened router style="border-right:none;">
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
            <!-- <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>导航一</template>
                <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                <el-menu-item index="2-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                </el-submenu>
            </el-submenu> -->
            <!-- <el-submenu index="3">
                <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                <el-menu-item index="3-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="3-4">
                <template slot="title">选项4</template>
                <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                </el-submenu>
            </el-submenu> -->
        </el-menu>
    </el-aside>
</template>

<script>
    import bus from '../common/bus';
    export default {
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(20).fill(item),
                tagsList: [],
                // collapse: false,
                items:[
                    {
                        icon:'el-icon-menu',
                        index: 'aboutProduct',
                        title: '产品洞察'
                    },
                    {
                        icon:'el-icon-menu',
                        index: 'tendency',
                        title: '行业趋势'
                    },
                    {
                        icon:'el-icon-menu',
                        index: 'material',
                        title: '原料洞察'
                    },
                    {
                        icon:'el-icon-menu',
                        index: 'sample',
                        title: '试样预估'
                    },
                    {
                        icon:'el-icon-menu',
                        index: 'myReport',
                        title: '我的报告'
                    },
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            // bus.$on('collapse', msg => {
            //     this.collapse = msg;
            // })
        }
    }
</script>

<style scoped>
    .logo-wraper{
        text-align: center;
        font-size: 0;
        padding: 40px 0;
    }
    .el-menu-item.is-active{
        background: #64c8bc;
    }
    /* .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
    .sidebar > ul {
        height:100%;
    } */
</style>
