var locationPath = location.pathname.replace(/\/[^\/]+$/, "");
window.dojoConfig = {
  packages: [{
      name: "bootstrap",
      location: "https://esri.github.io/calcite-maps/dist/vendor/dojo-bootstrap"
    },
    {
      name: "calcite-maps",
      location: "https://esri.github.io/calcite-maps/dist/js/dojo",
      main: "calcitemaps-v0.3"
    }, {
      name: 'chartjs',
      location: 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0',
      main: 'Chart.min'
    },
    {
      name: "app",
      location: locationPath + "app"
    }
  ]
};