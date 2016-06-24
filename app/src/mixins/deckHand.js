export let pageNumber = 1;
export default {
  data() {
    return {
      query: '',
      dataTray: '',
      showBackButton: null,
      loaded: false
    };
  },
  methods: {
    getJSON(category, pageNumber) {
      // Oh, 'Access-Control-Allow-Origin' header not present, np!
      this.$http.get(`http://cors.io/?u=https://lobste.rs/${category}.json?page=${pageNumber}`).then(function(res) {
        this.dataTray = res.data;
        this.loaded = true;
      }).catch(function(err) {
        console.error(err);
      });
    },
    turnPage(category, place) {
      //Increment or discernment page number
      if (place == 'forward') {
        pageNumber++; 
      } else if (place == 'backward') {
        pageNumber--;
      }
      this.showBackButton = (pageNumber > 1) ? true : false;
      this.getJSON(category, pageNumber);
    }
  }
};