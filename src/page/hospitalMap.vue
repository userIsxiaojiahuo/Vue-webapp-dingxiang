<template>
  <div class="hospitalMap">
    <dxHeaderReturn :headerReturnTitle="headerReturnTitle"></dxHeaderReturn>
    <div id="container"></div>
  </div>
</template>

<script>
  /**
   * 地图
   */
  import dxHeaderReturn from '../components/public/dxHeaderReturn'

  // import MapLoader from '../assets/js/Amap.js'

  export default {
    name: "hospitalMap",
    components: {
      dxHeaderReturn
    },
    data() {
      return {
        headerReturnTitle: {
          title: "返回"
        },
        map: null
      }
    },
    methods: {
      amapView() {
        const map = new AMap.Map('container', {});
        AMap.service("AMap.Geocoder", function () {
          var geocoder = new AMap.Geocoder({
            radius: 1000,
            extensions: "all",
          });
          geocoder.getAddress([116.473083, 39.993762], function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
              console.log(result)
            }
          });
        });
        let geocoder, marker;
        if (!geocoder) {
          geocoder = new AMap.Geocoder({});
        }
        let address = this.$route.query.hospitalSite;
        geocoder.getLocation(address, (status, result) => {
          if (status === 'complete' && result.geocodes.length) {
            if (!marker) {
              marker = new AMap.Marker();
              map.add(marker);
            }
            marker.setPosition(result.geocodes[0].location);
            map.setFitView(marker);
          } else {
            log.error('根据地址查询位置失败');
          }
        });
      }

    },
    mounted() {
      this.amapView()
    }
  }
</script>


<style scoped>
  .hospitalMap {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .mapContent {
    flex: 1;
  }

  #container {
    height: 100%;
  }
</style>
