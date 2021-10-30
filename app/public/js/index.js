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
    postBook(evt) {
      if (this.selectedBook === null) {
          this.postNewBook(evt);
      } else {
          this.postEditBook(evt);
      }
    },
    selectBook(s) {
      this.selectedBook = s;
      // this.offers = [];
      this.offerForm= Object.assign({},this.selectedBook);
      // this.fetchOfferData(this.selectedBooks);
  },
    postEditBook(evt) {
      this.offerForm.ID = this.selectedBook.ID;
      // this.offerForm.id = this.selectedOffer.id;       
      
      console.log("Updating!", this.offerForm);

      fetch('api/books/update.php', {
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
          
          this.resetOfferForm();
        });
    },
    postDeleteBook(o) {
      if (!confirm("Are you sure you want to delete the offer from "+o.Title+"?")) {
          return;
      }
      
      fetch('api/books/delete.php', {
          method:'POST',
          body: JSON.stringify(o),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          // TODO: test a result was returned!
          this.books = json;
          
          this.resetOfferForm();
        });
    },
    selectOffer(o) {
      this.selectedOffer = o;
      this.offerForm = Object.assign({}, this.selectedOffer);
    },
    resetOfferForm() {
      this.selectedOffer = null;
      this.offerForm = {};
    }
    
},
  
  
  created() {
    this.fetchBookData();
  }
}

  
  

  
Vue.createApp(Offer).mount('#offerApp');
