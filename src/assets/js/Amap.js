const MapLoader = () => {
  return new Promise((resolve, reject) => {
    if (window.AMap) {
      resolve(window.AMap)
    } else {
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src =
        'https://webapi.amap.com/maps?v=1.4.15&key=bf0b1bc63b996a57e5abb55f6966ac31';
      script.onerror = reject;
      document.head.appendChild(script)
    }
    window.initAMap = () => {
      resolve(window.AMap)
    }
  })
};

export default {MapLoader}
