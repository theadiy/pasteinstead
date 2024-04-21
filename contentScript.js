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
  console.log(blob.size);
  
  var reader = new FileReader();
  reader.onload = function(event) {
    console.log(event.target.result); // data url!
    //loadImage(event.target.result);
    const type = 'image/png';
    const file = new File([blob], 'image.png', { type });
    console.log(file.size);
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
    
    // Find the maximum number of upload_file element ID
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
  }
  
  reader.readAsDataURL(blob);
}
