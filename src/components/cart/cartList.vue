<template>
  <ul class="cartList">
    <van-swipe-cell :on-close="onClose" v-for="(itme,index) in drugList" :key="index">
      <li class="cartListLi" ref="drugDelete">
        <div class="cartList_input">
          <img :src="isCheck?pics:pic" @click="clickPic(index,itme)" ref="ischeck">
        </div>
        <div class="cartListDrug">
          <div class="cartList_img">
            <img :src="itme.med_img"/>
          </div>
          <div class="cartList_text">
            <h2 class="cartList_med_name">药品名: {{itme.med_name}}</h2>
            <span class="cartList_packing_size">药品规格: {{itme.packing_size}}</span>
            <div class="cartList_list_price">
              <span class="cartList_price">￥{{itme.price}}</span>
              <div class="cartList_num_btu">
                <img @click.stop="btuReduce(itme.c_med_id,itme.c_med_num,itme.price,index)"
                     class="cartList_num_btu_reduce" src="../../assets/onLineImg/ic_cut_drug.png">
                <span ref="drugNum">{{itme.c_med_num}}</span>
                <!-- DrugNum?DrugNum:itme.c_med_num -->
                <img @click.stop="btuAdd(itme.c_med_id,itme.c_med_num,itme.price,index)" class="cartList_num_btu_add"
                     src="../../assets/onLineImg/ic_add_drug.png">
              </div>
            </div>
          </div>
        </div>
      </li>
      <van-button
        square
        slot="right"
        type="danger"
        @click="deleteDrug(itme,index)"
        text="删除"
        :style="{height:'100%'}"
      />
    </van-swipe-cell>
  </ul>
</template>

<script>
  import common from "../../assets/js/common.js"
  /* 购物车列表 */
  export default {
    name: "CartList",
    props: ["drugList", "drugIdArr"],
    data() {
      return {
        DrugNum: 0,
        pic: require('../../assets/onLineImg/ic_checkbox_n.png'),
        pics: require('../../assets/onLineImg/ic_checkbox_s.png'),
        isCheck: true,
        arr: this.drugIdArr
      }
    },
    created() {
    },
    methods: {
      onClose(clickPosition, instance) {
        switch (clickPosition) {
          case 'cell':
          case 'outside':
            instance.close();
            break;
          case 'right':
            this.cartDelete();
            break;
        }
      },
      deleteDrug(itme, index) {
        let tar = this;
        let token = common.getCookie("token");
        this.$store.dispatch('GetInfo', true)
        this.$axios({
          method: 'get',
          url: 'http://121.199.63.71:9006/del_cart/?token=' + token + '&med_id=' + itme.c_med_id,
        })
          .then(function (response) {
            if (response.data.code == 200) {
              tar.$store.dispatch('GetInfo', false)
              tar.$notify({
                message: '删除成功',
                duration: 1000,
                background: '#28b7a3'
              })
              tar.$refs.drugDelete[index].remove();
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      tolabPirces() {
        let sum = 0;
        for (let i = 0; i < this.drugList.length; i++) {
          if (this.$refs.ischeck[i].src == this.pics) {
            sum = sum + this.$refs.drugNum[i].innerText * this.drugList[i].price;
          }
        }
        return sum;
      },
      btuAdd(index, num, price, indexs) {
        let tar = this;
        num++;
        if (num <= 20) {
          this.$store.dispatch('GetInfo', true)
          let token = common.getCookie("token");
          this.$axios({
            method: 'get',
            url: 'http://121.199.63.71:9006/add_cart/?token=' + token + '&med_id=' + index,
          })
            .then(function (response) {
              if (response.data.code == 200) {
                tar.$refs.drugNum[indexs].innerText = response.data.data[0].c_med_num;
                tar.DrugNum = response.data.data[0].c_med_num;
                let sum = tar.tolabPirces();
                tar.$emit("tolaPirce", [true, sum])
                tar.$store.dispatch('GetInfo', false)
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      },
      btuReduce(index, num, price, indexs) {
        let tar = this;
        let token = common.getCookie("token");
        num--;
        if (num >= 0) {
          this.$store.dispatch('GetInfo', true)
          this.$axios({
            method: 'get',
            url: 'http://121.199.63.71:9006/sub_cart/?token=' + token + '&med_id=' + index,
          })
            .then(function (response) {
              if (response.data.code == 200) {
                tar.$refs.drugNum[indexs].innerText = response.data.data[0].c_med_num;
                tar.DrugNum = response.data.data[0].c_med_num;
                let sum = tar.tolabPirces();
                tar.$emit("tolaPirce", [true, sum])
                tar.$store.dispatch('GetInfo', false)
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        }
// 				if(num == 0){
// 					this.$refs.drugDelete[indexs].remove();
// 				}
      },
      clickPic(index, itme) {
        this.$store.dispatch('GetInfo', true)
        let tar = this;
        let token = common.getCookie("token");
        this.$axios({
          method: 'get',
          url: 'http://121.199.63.71:9006/is_select/?token=' + token + '&med_id=' + itme.c_med_id
        })
          .then(function (response) {
            if (response.data.code == 200) {
              tar.$store.dispatch('GetInfo', false)
              if (response.data.is_select == 1) {
                tar.$refs.ischeck[index].src = require('../../assets/onLineImg/ic_checkbox_s.png');
                tar.arr.splice(index, 0, itme.c_med_id)
              }
              if (response.data.is_select == 0) {
                tar.$refs.ischeck[index].src = require('../../assets/onLineImg/ic_checkbox_n.png');
                for (let i = 0; i < tar.arr.length; i++) {
                  if (tar.arr[i] == itme.c_med_id) {
                    tar.arr.splice(index, 1)
                  }
                }
              }
              let sum = tar.tolabPirces();
              tar.$emit("tolaPirce", [true, sum])
              tar.$emit("isDrugId", tar.arr)
            }
          })
          .catch(function (error) {
            console.log(error);
          })
      }
    }
  }
</script>

<style>
</style>
