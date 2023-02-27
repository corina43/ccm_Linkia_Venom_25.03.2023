// Función para mostrar el video
function showVideo() {
    var video = document.getElementById("video");
    var image = document.getElementById("image");
    video.style.display = "block";
    image.style.display = "none";
    video.play();
  }
  
  // Función para ocultar el video y mostrar la imagen
  function hideVideo() {
    var video = document.getElementById("video");
    var image = document.getElementById("image");
    video.style.display = "none";
    image.style.display = "block";
  }
  
  // Agregar un listener para el evento 'ended' del video
  var video = document.getElementById("video");
  video.addEventListener("ended", hideVideo);
  

  
