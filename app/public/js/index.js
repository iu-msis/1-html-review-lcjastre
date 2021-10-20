const Offer = {
    data() {
      return {
        result: undefined,
        app: 0,
        books: [],
        offerForm:{}
            
           
        }
    },
    computed: {
      
    },
    methods: {
      
        
        fetchBookData() {
            fetch('/api/books/index.php')
            .then(response => response.json())
            .then((parsedJson) => {
                console.log(parsedJson);
                this.books = parsedJson
            })
            .catch( err => {
                console.error(err)
            })
        },
        postNewBook(evt) {
      
            console.log("Posting:", this.offerForm);
          // alert("Posting!");

            fetch('api/books/create.php', {
            method:'POST',
            body: JSON.stringify(this.offerForm),
            headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        // TODO: test a result was returned!
        this.books = json;
        
        // reset the form
        this.offerForm = {};
      });
     
    },
  
  },
  created() {
    this.fetchBookData();
  }
}
  
  

  
Vue.createApp(Offer).mount('#offerApp');
