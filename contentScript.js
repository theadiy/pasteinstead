// Function to handle upload button click

/* document.onpaste = function(event){
  var items = (event.clipboardData || event.originalEvent.clipboardData).items;
  console.log(JSON.stringify(items)); // will give you the mime types
  var blob = items[0].getAsFile();
  console.log(blob.size);
  
  var reader = new FileReader();
  reader.onload = function(event){
    console.log(event.target.result); // data url!
    //loadImage(event.target.result);
	const type = 'image/png';
	const file = new File([blob], 'image.png', { type });
	console.log(file.size);
	const dataTransfer = new DataTransfer();
	dataTransfer.items.add(file);
	const fileInput = document.getElementById('upload_file0');
	fileInput.files = dataTransfer.files
	fileInput.dispatchEvent(new Event('change'));
  }
  
  reader.readAsDataURL(blob);
} */



document.onpaste = function(event) {
  var items = (event.clipboardData || event.originalEvent.clipboardData).items;
  console.log(JSON.stringify(items)); // will give you the mime types
  var blob = items[0].getAsFile();
  console.log(items[0]);
  console.log(items[1]);
  //console.log(blob.size);
  // Assuming items is an array of DataTransferItems
	for (let i = 0; i < items.length; i++) {
	  const item = items[i];
	  // Check if the item type is 'image/png'
	  if (item.type === 'image/png') {
		// Convert the item to a Blob

		console.log('Blob:', blob);
		blob = item.getAsFile();
		// Exit the loop since we found the desired item
		break;
	  }
	}
  
  
  var reader = new FileReader();
  reader.onload = function(event) {
    console.log(event.target.result); // data url!
    //loadImage(event.target.result);
    const type = 'image/png';
    const file = new File([blob], 'image.png', { type });
    console.log(file.size);
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
    
    //upload for POC section
	// Find the maximum number of upload_file element ID for POC 
    let maxNumber = -1;
    document.querySelectorAll('[id^="upload_file"]').forEach(function(element) {
      const idNumber = parseInt(element.id.replace('upload_file', ''));
      if (!isNaN(idNumber) && idNumber > maxNumber) {
        maxNumber = idNumber;
      }
    });
    
    const nextUploadFileId = 'upload_file' + (maxNumber);
    const fileInput = document.getElementById(nextUploadFileId);
    if (fileInput) {
      fileInput.files = dataTransfer.files;
      fileInput.dispatchEvent(new Event('change'));
    } else {
      console.error('No upload file element found with ID:', nextUploadFileId);
    }
	
	// upload for ticket section
	const fileInput2 = document.querySelector('#add_req > div > div > div.modal-body.p-4 > div > div:nth-child(4) > div > div:nth-child(6) > input');
	if(fileInput2){
		fileInput2.files = dataTransfer.files;
      fileInput2.dispatchEvent(new Event('change'));
	}else {
		console.error('No upload file element found or Not in Ticket section.');
	}
	
	//upload for ticket details section 
	const fileInput3 = document.getElementById('getFile');
	if(fileInput3){
		fileInput3.files = dataTransfer.files;
      fileInput3.dispatchEvent(new Event('change'));
	}else {
		console.error('No upload file element found or Not in Ticket section.');
	}
	
  }
  
  reader.readAsDataURL(blob);
}
