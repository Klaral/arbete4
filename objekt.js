window.onload = function(){
     
    var addButton = document.getElementById("addButton");
    var tableVisaNamn = document.getElementById("tableVisaNamn")
    var inputAntalResultat = document.getElementById('inputAntalResultat');
    
    
    /**lägga till**/
   
    addButton.addEventListener("click", function(event){
     var pris = document.getElementById("inputPris");
  var fb = firebase.database();
  var btnNamn= document.getElementById("inputNamn");
  var btnPris = document.getElementById("btnPris");
        
 // var currDate = new Date();
  var data = {
            namn: btnNamn.value,
            pris: Number(pris.value)
  }
  fb.ref('items/').push(data);
 
}) 
  
    
   /**ny**/
    function orderBy(key){
  var outputNumber = document.getElementById("inputAntalResultat");
  var fb = firebase.database();

  fb.ref('items/').orderByChild(`${key}`).limitToFirst(Number(outputNumber.value)).once('value')
  .then(function(snapshot){
    
    var table = document.getElementById("tableVisaNamn");

    table.innerHTML = "";
    snapshot.forEach(function(child){
      var tr = document.createElement("tr");//child is a object, child.key to get id
      tr.innerHTML = `<td>${child.val().namn}</td>
      <td>${child.val().pris}</td>`
      table.appendChild(tr);
      console.log(child.val())
    })
  })
  .catch(function(err){
  })
}                          
    
    
    
    
    
    
    
    
    
    
}