function setup() {
    noCanvas();
    
  var config = {
    apiKey: "AIzaSyAqFmfmNWi95nt6TemvBMjPepulwV5WyZg",
    authDomain: "define-web-ext.firebaseapp.com",
    databaseURL: "https://define-web-ext.firebaseio.com",
    projectId: "define-web-ext",
    storageBucket: "",
    messagingSenderId: "217235378805"
  };
  firebase.initializeApp(config);

 
  
    let bgpage = chrome.extension.getBackgroundPage();
    var word = bgpage.word.trim();
   
    let lowerWord = word.toLowerCase();  
    let url = `http://api.wordnik.com:80/v4/word.json/${lowerWord}/definitions?limit=200&includeRelated=true&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`
     url = url.replace(/\s+/g, '');
    loadJSON(url, gotData);
    uploadterm();
    
    function gotData(data) {
      createP(data[0].text ).style('font-size', '48pt');
    }
    function uploadterm(){
      var words = word;
      firebase.database().ref('words').push({
        term: words,
       
      });
    
    }
  
    
  }
