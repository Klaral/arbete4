window.onload = function(){
    
    var provider = new firebase.auth.GithubAuthProvider(); 
    var inputNamn = document.getElementById("inputNamn");
    var inputPris = document.getElementById("inputPris");
    var addButton = document.getElementById("addButton");
    var btnNamn = document.getElementById("btnNamn");
    var btnPris = document.getElementById("btnPris");
    let inputAntalResultat = document.getElementById('inputAntalResultat');
    
    
    /**lägga till**/
    addButton.addEventListener("click", function(event){
        console.log("Lagt till...");
        firebase.database().ref('Uppgift4/').push({
            namn: namn.value,
            pris: pris.value
        });
    });
    
    firebase.database().ref('Uppgift4/').on('child_added', function(snapshot, prevChildKey){
            console.log('Första gången eller ändring i databasen. prevChildKey: ' + prevChildKey);
				var data = snapshot.val();
            addToTable(data);
    });
    function addToTable(data) {
				var tr = document.createElement('tr');
				tr.innerHTML = `<td>${data.namn}</td> <td>${data.pris}</td> <td>${data.antal}</td> <td style="width: 50px; background-color: ${data.färg};"></td>`;
				tableVisaDjur.appendChild(tr);
			}
			
                                        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}