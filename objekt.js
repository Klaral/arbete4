window.onload = function(){
    
    var provider = new firebase.auth.GithubAuthProvider(); 
    var inputNamn = document.getElementById("inputNamn");
    var inputPris = document.getElementById("inputPris");
    var addButton = document.getElementById("addButton");
    var btnNamn = document.getElementById("btnNamn");
    var btnPris = document.getElementById("btnPris");
    
    
    /**lägga till**/
    addButton.addEventListener("click", function(event){
        console.log("Lagt till...");
        firebase.database().ref('någonting/').push({
            namn: namn.value,
            pris: pris.value
        });
    });
    
    firebase.database().ref('någonting/').on('child_added', function(snapshot, prevChildKey){
        
    }
                                        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}