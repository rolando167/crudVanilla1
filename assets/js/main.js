	//////////////////////
	///// DARK MODE
	//////////////////////
	
	var content = document.getElementsByTagName('body')[0];
	var darkMode = document.getElementById('dark-change');
	
	darkMode.addEventListener('click',  () => {
		darkMode.classList.toggle('active');

		content.classList.toggle('bg-dark');
		// Guardar en localstorage
		if(content.classList.contains('bg-dark')){
			localStorage.setItem('dark-mode', 'true');
			darkMode.firstChild.classList.remove('bxs-moon');
			darkMode.firstChild.classList.add('bxs-sun');

		}else{
			localStorage.setItem('dark-mode', 'false');
			darkMode.firstChild.classList.add('bxs-moon');
			darkMode.firstChild.classList.remove('bxs-sun');
		}

	});

	if(localStorage.getItem('dark-mode') === 'true'){
		content.classList.add('bg-dark');
		darkMode.classList.add('active');
		darkMode.firstChild.classList.remove('bxs-moon');
		darkMode.firstChild.classList.add('bxs-sun');
	}else{
		content.classList.remove('bg-dark');
		darkMode.classList.remove('active');
		darkMode.firstChild.classList.add('bxs-moon');
		darkMode.firstChild.classList.remove('bxs-sun');
	}
	

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
