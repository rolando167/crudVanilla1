

	//  ===== VARIABLES =====  

	var tableData = document.getElementById('table-data').getElementsByTagName('tbody')[0];

	var urlList = 'https://higorr.pe/api/checkTestLista/55140268'; 
 
	// ===== GET DATA ===== -->
	// Method: GET

	const renderData = (data) => {

		alert('ssss');
	}

renderData('cas');

	fetch(urlList)
		.then(res => res.json())
		.then(data => renderData(data.data) );
 

	// ===== GET DATA ===== -->
	
	// ===== GET DATA ===== -->
	
	// ===== GET DATA ===== -->
	
	// ===== GET DATA ===== -->
	
	// ===== GET DATA ===== -->
