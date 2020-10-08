/*$('#signup').click(function() {
    $('.pinkbox').css('transform', 'translateX(80%)');
    $('.signin').addClass('nodisplay');
    $('.signup').removeClass('nodisplay');
  });
  
  $('#signin').click(function() {
    $('.pinkbox').css('transform', 'translateX(0%)');
    $('.signup').addClass('nodisplay');
    $('.signin').removeClass('nodisplay');
  });
*/

  function upmyfunction(){
      document.getElementById("pinkbox").css('transform', 'translateX(80%)');
      document.getElementById("signin").addClass('nodisplay');
      document.getElementById("signup").addClass('nodisplay');

  }

  function inmyfunction(){
    document.getElementById("pinkbox").css('transform', 'translateX(0%)');
    document.getElementById("signup").addClass('nodisplay');
    document.getElementById("signin").addClass('nodisplay');

}

