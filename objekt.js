/* window.onload = function(){
     
    var addButton = document.getElementById("addButton");
    var tableVisaNamn = document.getElementById("tableVisaNamn");
    var inputAntalResultat = document.getElementById("inputAntalResultat");
    
    
    /**lägga till**/
   
/* addButton.addEventListener("click", function(event){
    var pris = document.getElementById("inputPris");
    var fb = firebase.database();
    var btnNamn = document.getElementById("inputNamn");
    var btnPris = document.getElementById("btnPris");
   btnPris.addEventListener("click", function(event){var outputNumber = document.getElementById("inputAntalResultat");
    var fb = firebase.database();

  fb.ref('items/').orderByChild('namn').limitToFirst(Number(inputAntalResultat.value)).once('value')
  .then(function(snapshot){
    
    //var table = document.getElementById("tableVisaNamn");

    tableVisaNamn.innerHTML = "";
    snapshot.forEach(function(child){
      var tr = document.createElement("tr");//child is a object, child.key to get id
      tr.innerHTML = `<td>${child.val().namn}</td> <td>${child.val().pris}</td>`
      table.appendChild(tr);
     
    })
  })
  .catch(function(err){
  })
       })   
        
        

  var data = {
            namn: btnNamn.value,
            pris: Number(pris.value)
  }
  fb.ref('items/').push(data);
 
}) 
  
    
   /**ny**/
/*  var btn = document.getElementById("btnNamn");
       btn.addEventListener("click", function(event){
       
  
    
    
    
       })
}
 */


 window.addEventListener('load', function() {
			var namn = document.getElementById('inputNamn');
            var antal = document.getElementById('inputAntal');
            var addButton = document.getElementById('addButton');
			var tableVisaDjur = document.getElementById('tableVisaDjur');
			var btnSortNamn = document.getElementById('btnSortNamn');
            var btnSortAntal = document.getElementById('btnSortAntal');
            var inputAntalResultat = document.getElementById('inputAntalResultat');
			
			
			addButton.addEventListener('click', function(event) {
				console.log('Klickat lägga till djur');
				firebase.database().ref('djur/').push({
					namn: namn.value,
					antal: Number(antal.value)
					
				});
			});
			
			firebase.database().ref('djur/').on('child_added', function(snapshot, prevChildKey) {
				console.log('Första gången eller ändring i databasen. prevChildKey: ' + prevChildKey);
				var data = snapshot.val();
				//console.log('data:', data);
				addAnimalToTable(data);
			});
			function addAnimalToTable(data) {
				var tr = document.createElement('tr');
				tr.innerHTML = `<td>${data.namn}</td> <td>${data.familj}</td> <td>${data.antal}</td> <td style="width: 50px; background-color: ${data.färg};"></td>`;
				tableVisaDjur.appendChild(tr);
			}
			
			function sortFunction(button, sortKey) {
				button.addEventListener('click', function(event) {
					tableVisaDjur.innerHTML = '';
					//firebase.database().ref('djur/').off('value')
					firebase.database().ref('djur/').orderByChild(sortKey)
					.once('value', function(snapshot) {
						snapshot.forEach( animalRef => {
							addAnimalToTable(animalRef.val());
						})
					});
				})
			}
			sortFunction(btnSortNamn, 'namn');
			sortFunction(btnSortFamilj, 'familj');
			sortFunction(btnSortAntal, 'antal');
			sortFunction(btnSortFärg, 'färg');
			
			inputAntalResultat.addEventListener('keypress', function(event) {
				if( event.keyCode == 13 ) {
					var antal = Number(inputAntalResultat.value);
					tableVisaDjur.innerHTML = '';
					console.log('inputAntalResultat: antal=' + antal);
					if( isNaN(antal) ) {
						// varna användaren
					} else {
						firebase.database().ref('djur/').limitToFirst(antal)
						.once('value', function(snapshot) {
								snapshot.forEach( animalRef => {
									addAnimalToTable(animalRef.val());
								})
						});
					}
				}
			});
		});
	      
       
       
       