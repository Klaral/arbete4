window.onload = function(){
     
    var addButton = document.getElementById("addButton");
    var tableVisaNamn = document.getElementById("tableVisaNamn")
    var inputAntalResultat = document.getElementById('inputAntalResultat');
    
    
    /**lägga till**/
   /** addButton.addEventListener("click", function(event){
        console.log("Lagt till...");
        firebase.database().ref('Uppgift4/').push({
            namn: namn.value,
            pris: pris.value
        });
    });**/
    addButton.addEventListener("click", function(event){
     var pris = document.getElementById("inputPris");
  var fb = firebase.database();
  var btnNamn= document.getElementById("inputNamn");
  var btnPris = document.getElementById("btnPris");
 // var currDate = new Date();
  var uppgift4 = {
            namn: btnNamn.value,
            pris: Number(btnPris.value)
  }
  fb.ref('uppgift4/').push(uppgift4);
 
})
  
    
    firebase.database().ref('uppgift4/').on('child_added', function(snapshot, prevChildKey){
            console.log('Första gången eller ändring i databasen. prevChildKey: ' + prevChildKey);
				var data = snapshot.val();
            addToTable(data);
    });
    
    /**ny**/
    function orderBy(key){
  var outputNumber = document.getElementById("inputAntalResultat");
  var fb = firebase.database();
//do new stuff, put debugger before and then check on console
  fb.ref('uppgift4/').orderByChild(`${key}`).limitToFirst(Number(outputNumber.value)).once('value')//get once all values, read all orderByChild("name")
  .then(function(snapshot){
    //after snapshot that get all values then can clean
    var table = document.getElementById("tableVisaNamn");

    table.innerHTML = "";
    snapshot.forEach(function(child){
      var tr = document.createElement("tr");//child is a object, child.key to get id
      tr.innerHTML = `<td>${child.val().namn}</td>
      <td>${child.val().pris}</td>`
      table.appendChild(tr);
      console.log(child.val())//object child/hela object  child.val  object
    })
  })
  .catch(function(err){
  })
}                          
    
    
    
    
    
    
    
    
    
    
}