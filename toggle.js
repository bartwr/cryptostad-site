var toggleButton = document.getElementById('toggle-button');
var nav = document.getElementById('nav');
var IsNavVisible = true;

var toggleNav = function(){
  document.body.className = IsNavVisible ? 'hidden-nav' : '';
  IsNavVisible = !IsNavVisible
}

toggleButton.addEventListener('click', toggleNav);
