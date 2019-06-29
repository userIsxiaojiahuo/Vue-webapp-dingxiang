<template>
  <div class="conPicFooter">
    <a href="" class="a-upload">
      <input type="file">
      <img src="../../assets/img/diagonseImg/ic_camera.png" alt="">
      <span>图片/视频</span>
    </a>
    <p>你上传的附件仅对的医生可见</p>
  </div>
</template>

<script>
  export default {
    name: "conPicFooter"
  }
</script>

<style scoped>
  .conPicFooter {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 40px 30px;
    margin-bottom: 175px;
  }

  .conPicFooter a {
    display: flex;
    flex-direction: column;
    width: 157px;
    height: 157px;
    background-color: #f4f4f4;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 72px;
    height: 60px;
    margin-bottom: 20px;
  }

  span {
    color: #999999;
    font-size: 22px;
  }

  p {
    margin-left: 40px;
    color: #9b9b9b;
    font-size: 24px;
  }


  .a-upload {
    padding: 4px 10px;
    line-height: 20px;
    position: relative;
    cursor: pointer;
    color: #888;
    background: #f4f4f4;
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;
    display: inline-block;
    width: 157px;
    height: 157px;
  }

  .a-upload input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
    filter: alpha(opacity=0);
  }


</style>
