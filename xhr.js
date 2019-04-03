// Create Event Listener
document.getElementById('button').addEventListener('click', loadText);

function loadText() {
  console.log('in loadText: button clicked');
  // Create XHR Object
  let xhr = new XMLHttpRequest();
  // OPEN function: type, url/file, async (true or false)
  console.log(xhr);
  xhr.open('GET', 'sample.txt', true);

  // Used for loaders (optional)
  xhr.onprogress = function() {
    console.log('READYSTATE: ', xhr.readyState);
  }

  xhr.onload = function() {
    // Check for status of response
    // 200: OK
    // 403: Forbidden
    // 404: Not Found
    if(this.status == 200) {
      console.log(this.responseText);
      document.getElementById('text').innerHTML = this.responseText;
    } else if(this.status = 404) {
      document.getElementById('text').innerHTML = 'Not Found';
    }
  }

  xhronerror = function() {
    console.log('Request Error');
  }
  // Sends request
  xhr.send();
}
