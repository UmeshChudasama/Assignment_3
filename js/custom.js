
  var fileInput = document.getElementById('upload');
  var noFileSelectedText = 'No file selected';
  fileInput.addEventListener('change', function(e) {
      var fileName = '';
      if (this.files && this.files.length > 1) {
          fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
      } else {
          fileName = e.target.value.split('\\').pop();
      }
      if (fileName) {
          document.getElementById('filename').innerHTML = fileName;
      } else {
          document.getElementById('filename').innerHTML = noFileSelectedText;
      }
  });


// var fileInput = document.getElementById('upload');
// var noFileSelectedText = 'no file selected';
// fileInput.addEventListener('change', function(e)
// {
//     var filename='';
//     if(this.files && this.files.length >1)
//     {
//         filename =(this.getAttribute('data-multiple-caption') || '').replace('{count}',this.files.length);

//     }
//     else{
//         filename = e.targe
//     }
// })

function myFunction() {
    location.replace("/innerpage.html")
  }