<template>
    <!--表单的增删和修改-->
    <div class="hello">
        <table>
            <caption>麻将</caption>
            <thead>
            <tr>
                <th>条</th>
                <th>筒</th>
                <th>万</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(mj,index) in mjs">
                <td>
                    <input type="text" v-model="mj.tiao" v-if="edi===index">
                    <span v-else>{{mj.tiao}}</span>
                </td>
                <td>
                    <input type="text" v-model="mj.tong" v-if="edi===index">
                    <span v-else>{{mj.tong}}</span>
                </td>
                <td>
                    <input type="text" v-model="mj.wan" v-if="edi===index">
                    <span v-else>{{mj.wan}}</span>
                </td>

                <td>
                    <button @click="mod(index)">修改</button>
                    <button @click="save(index)">确定</button>
                    <button @click="del(index)">删除</button>
                </td>
            </tr>
            </tbody>
            <tfoot>
            <td colspan="4">
                <button @click="add">添加</button>
                <button @click="submit">保存</button>
            </td>
            </tfoot>
        </table>

    </div>
</template>

<script>
    export default {
        name: 'add',
        data () {
            return {
                edi:'',
                mjs: [
                    {tiao:'一条',tong:'一筒',wan:'壹万'},
                    {tiao:'二条',tong:'二筒',wan:'贰万'},
                    {tiao:'三条',tong:'三筒',wan:'叁万'},
                ]
            }
        },
        methods: {
            mod:function(index){
                this.edi=index;
            },
            del: function (index) {
                this.mjs.splice(index, 1);
            },
            save:function(index){
                this.edi=!index;
            },
            add:function(){
                this.mjs.push({tiao:'',tong:'',wan:''})
            },
            submit:function () {
                this.edi='';
                console.log(JSON.stringify(this.mjs))
            }
        }
    }
</script>

<style scoped>
    input{
        border:none;
        width:150px;
    }
    table{
        border-collapse: collapse;
        border:1px solid black
    }
    td{
        text-align: center;
        width: 150px;
        height:30px;
        border:1px solid black
    }
    button{
        border: none;
        background-color:deepskyblue;
        color:white;
    }
</style>
