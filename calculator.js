function insertNumber(num){
      // alert(num)
      var existingNumber=$('#result').val()
      $('#result').val(existingNumber+num)
}


function clearResult(){
      $('#result').val('')
}

function calculate(){
      var result =eval($('#result').val())    ;
      $("#result").val(result) ;
}

function deleteNumber(){
      var presentValue=$('#result').val();
if(presentValue!=''){
      $('#result').val($('#result').val().slice(0,-1))
}
}