document.addEventListener('mousemove', function(e) {
    var x = e.clientX;
    var y = e.clientY;
    var flashlight = document.getElementById('flashlight');
    flashlight.style.left = x - 400 + 'px'; // Adjusted to better center the light
    flashlight.style.top = y - 400 + 'px';
  });