module.exports = {
  files: {
    javascripts: {joinTo: 'app.js'},
    stylesheets: {joinTo: 'app.css'}
  },
  server: {
    //PORT => 8080
    port: parseInt(process.env.PORT, 10),
    //IP => 0.0.0.0
    hostname: process.env.IP
  },
  plugins: {
    on: ['autoprefixer-brunch']
  }
};