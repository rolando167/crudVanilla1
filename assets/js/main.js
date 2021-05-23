	
	var content = document.getElementsByTagName('body')[0];
	var darkMode = document.getElementById('dark-change');
	
	darkMode.addEventListener('click', function(){
		// darkMode.classList.toggle('active');
		
		content.classList.toggle('bg-light');
	});
	

	//  ===== VARIABLES =====  

	var tableData = document.getElementById('table-data').getElementsByTagName('tbody')[0];

	var urlList = 'https://higorr.pe/api/checkTestLista/55140268'; 
 
	// ===== GET DATA ===== -->
	// Method: GET

	const renderData = (data) =>{
		data.forEach((post, index) => {
			let tableRow = document.createElement('tr');
			tableRow.id = post.id;
			// ------------

			let listItem = `
					<th scope="row">${post.id}</th>
					<td>${post.nombre}</td>
					<td>${post.email}</td>
					<td>${post.monto}</td>
					<td class="text-center">${post.state}</td>
					<td class="text-center">${post.created_at}</td>
					<td class="text-center">
					<div class="btn-group">
					<button type="button" class="btn btn-outline-success mr-1"><i class='bx bxs-edit'></i></button>
					<button type="button" class="btn btn-outline-danger"><i class='bx bx-stop-circle'></i></button>
					</div>
					</td>
				`;

			tableRow.innerHTML = listItem ;
			// ------------
			// console.log(post);
			// ------------
			tableData.appendChild(tableRow);
		});
	}

 

	async function fetchData() {	
	  // const response = await fetch(urlList);
	  // waits until the request completes...
	  // console.log(response);

	  fetch(urlList)
		.then(res => res.json())
		.then(data => renderData(data.data) )
		.catch(function(error) {
			alert('Hubo un problema con la petición Fetch:' + error.message);
			console.log('Hubo un problema con la petición Fetch:' + error.message);
		});
	}

	fetchData();
	
	// ===== GET DATA ===== -->
	
	// ===== GET DATA ===== -->
	
	// ===== GET DATA ===== -->
	
	// ===== GET DATA ===== -->
	
	// ===== GET DATA ===== -->
