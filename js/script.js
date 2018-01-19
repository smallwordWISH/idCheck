$(document).ready(function() {

  $('#check-btn').click(function(){
    var code = $('#nric').val().split("");
    $('#result').html("")
    
    if (code == "") {
      alert("身分證字號不得為空，請重新輸入");
    } else if (!isNaN(code[0])) {
      alert("身分證字號開頭為英文，請重新輸入");
    } else if (code.length != 10) {
      alert("身分證字號長度不正確，請重新輸入");
    } else {
      if (code[1] == "1") {
        $('#result').html('某男通過驗證');
      } else if (code[1] == "2") {
        $('#result').html('某女通過驗證');
      } else {
        alert("身分證字號不正確，請重新輸入");
      }
    }   
    return false;
  });
});