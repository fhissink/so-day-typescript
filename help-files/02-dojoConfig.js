var locationPath = location.pathname.replace(/\/[^\/]+$/, "");
window.dojoConfig = {
  packages: [{
      name: 'chartjs',
      location: 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0',
      main: 'Chart.min'
    }, {
      name: "app",
      location: locationPath + "app"
    }
  ]
};