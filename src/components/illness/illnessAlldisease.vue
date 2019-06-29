<template>
  <div class="alldisease">
    <p>{{alldiseaseMsg.title}}</p>
    <div class="allright" @click="handle">
      <i :style="{
            'background':'url('+alldiseaseMsg.icon+')'+'no-repeat',
            'backgroundSize':'cover'
            }"
      ></i>
      <p>{{alldiseaseMsg.select}}</p>
    </div>
    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '380px'}"
    >
      <!--科室分类-->
      <div class="titBox">
        <span>{{alldiseaseMsg.tit}}</span>
        <i :style="{
            'background':'url('+alldiseaseMsg.iconn+')'+'no-repeat',
            'backgroundSize':'cover'
            }"
           @click="Ishandle"></i>
      </div>
      <div :class="isAll?'active':'all'"
           @click="currentAll">
        {{alldiseaseMsg.all}}
      </div>
      <div class="classify">
        <p>{{alldiseaseMsg.desk}}</p>
        <ul class="uListall">
          <li v-for="(item,index) in alldiseaseMsg.own" :key="index" class="uList"
              :class="currentClass(index)"
              @click="currentInfo(index)">{{item}}
          </li>
        </ul>
      </div>
    </van-popup>
  </div>
</template>


<script>
  import {Popup} from 'vant';

  export default {
    name: "illnessAlldisease",
    data() {
      return {
        show: false,
        currentNumber: 0,
        isActive: false,
        isAll: true
      }
    },
    components: {
      "van-popup": Popup,
    },
    props: {
      alldiseaseMsg: {
        type: Object
      }
    },
    methods: {
      handle() {
        this.show = true;
      },
      Ishandle() {
        this.show = false;
      },
      currentInfo(index) {
        this.currentNumber = index;
        this.isAll = false
      },
      currentClass(index) {
        if (!this.isAll) {
          return [(this.currentNumber == index) ? 'allx' : 'uList'];
        }
      },
      currentAll() {
        this.isActive = true;
        this.isAll = true
      }
    }
  }
</script>
