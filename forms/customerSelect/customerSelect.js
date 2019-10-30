
customerSelect.onshow=function(){
  let userState = txtaState.value
  let query = customerSelect = "SELECT name FROM customer WHERE state = " + '"' + userState + '"';
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ekr74869&pass=Boolarina18%&database=ekr74869&query=" + query)
}
