const d = document;
function hamburguerMenu(panelBtn, panel, menuLink) {
  d.addEventListener("click", e => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");
    }
    if (e.target.matches(menuLink)) {
      d.querySelector(panel).classList.remove("is-active");
      d.querySelector(panelBtn).classList.remove("is-active");

    }
  })
}


d.addEventListener("DOMContentLoaded" , e => { 
  hamburguerMenu(".hamburger", ".panel", ".menu a");
});

const n = navigator,
ua = n.userAgent,
$info = d.querySelector(".info");

function userDeviceInfo(id) {
  
  const $id = d.getElementById(id),
  isMobile = {
    android: () => ua.match(/android/i),
    ios: () => ua.match(/iphone|ipad|ipod/i),
    windows: () => ua.match(/windows phone/i),
    any: function () {
      return this.android() || this.ios() || this.windows()
    }
  },
  isDesktop = {
    linux: () => ua.match(/linux/i),
    mac: () => ua.match(/mac os/i),
    windows: () => ua.match(/windows nt/i),
    
    any: function () {
      return this.linux() || this.mac() || this.windows()
    }
  },
  isBrowser = {
    chrome: () => ua.match(/chrome/i),
    safari: () => ua.match(/safari/i),
    firefox: () => ua.match(/firefox/i),
    opera: () => ua.match(/opera|opera mini/i),
    ie: () => ua.match(/msie|iemobile/i),
    edge: () => ua.match(/edge/i),
    
    any: function () {
      return this.chrome() || this.safari() || this.firefox() || this.opera() || this.ie() || this.edge();
    }
  };

  $info.textContent = `User Agent =  ${ua}   Platform: ${isMobile.any()? isMobile.any() : isDesktop.any()}  Navigator = ${isBrowser.any()}`;

  /*$id.innerHTML = `
  <ul>
    <li>User Agent: <b>${ua}</b></li> 
    <li>Plataforma: <b>${isMobile.any()? isMobile.any() : isDesktop.any()}</b></li> 
    <li>Navegador: <b>${isBrowser.any()}</b></li> 
  </ul>`;*/
}

userDeviceInfo("dispositivo");