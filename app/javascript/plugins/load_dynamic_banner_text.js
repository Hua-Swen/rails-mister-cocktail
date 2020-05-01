import Typed from 'typed.js';

const typedNeeded = document.getElementById('banner-typed-text');

const loadDynamicBannerText = () => {
  if(typedNeeded) {
    new Typed('#banner-typed-text', {
      stringsElement: '#typed-strings',
      typeSpeed: 50,
      loop: false
    });
  }
}

export { loadDynamicBannerText };
