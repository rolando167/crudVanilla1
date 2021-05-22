

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
					<td>${post.state}</td>
					<td>${post.created_at}</td>
					<td class="text-center">
					<button type="button" class="btn btn-outline-success mr-1"><i class='bx bxs-edit'></i></button>
					<button type="button" class="btn btn-outline-danger"><i class='bx bx-stop-circle'></i></button>
					</td>
				`;

			tableRow.innerHTML = listItem ;
			// ------------
			// console.log(post);
			// ------------
			tableData.appendChild(tableRow);
		});
	}

	fetch(urlList)
		.then(res => res.json())
		.then(data => renderData(data.data) );
 

	// ===== GET DATA ===== -->
	
	// ===== GET DATA ===== -->
	
	// ===== GET DATA ===== -->
	
	// ===== GET DATA ===== -->
	
	// ===== GET DATA ===== -->
