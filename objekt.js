 window.addEventListener('load', function() {
     var namn = document.getElementById('inputNamn');
     var antal = document.getElementById('inputPris');
     var addButton = document.getElementById('addButton');
     var tableVisaNamn = document.getElementById('tableVisaNamn');
     var btnSortNamn = document.getElementById('btnSortNamn');
     var btnSortPris = document.getElementById('btnSortPris');
     var inputAntalResultat = document.getElementById('inputAntalResultat');
			
			
			addButton.addEventListener('click', function(event) {
				console.log('Namn lagts till');
				firebase.database().ref('items/').push({
					namn: namn.value,
					antal: Number(antal.value)
					
				});
			});
			
			firebase.database().ref('items/').on('child_added', function(snapshot, prevChildKey) {
				console.log('Första gången eller ändring i databasen. prevChildKey: ' + prevChildKey);
				var data = snapshot.val();
				
				addToTable(data);
			});
			function addToTable(data) {
				var tr = document.createElement('tr');
				tr.innerHTML = `<td>${data.namn}</td> <td>${data.antal}</td>`;
				tableVisaNamn.appendChild(tr);
			}
			
			function sortFunction(button, sortKey) {
				button.addEventListener('click', function(event) {
					tableVisaNamn.innerHTML = '';
					
					firebase.database().ref('items/').orderByChild(sortKey)
					.once('value', function(snapshot) {
						snapshot.forEach( itemRef => {
							addToTable(itemRef.val());
						})
					});
				})
			}
			sortFunction(btnSortNamn, 'namn');
			sortFunction(btnSortPris, 'antal');
			
			function limitToFirst(){
			inputAntalResultat.addEventListener('keypress', function(event) {
				if( event.keyCode == 13 ) {
					var antal = Number(inputAntalResultat.value);
					tableVisaNamn.innerHTML = '';
					console.log('inputAntalResultat: antal=' + antal);
					if( isNaN(antal) ) {
						
					} else {
						firebase.database().ref('items/').limitToFirst(antal)
						.once('value', function(snapshot) {
								snapshot.forEach( itemRef => {
									addToTable(itemRef.val());
								})
						});
					}
                    
                }
                
				})
			}
		});
	      
       
       
       