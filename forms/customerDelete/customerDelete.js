
btnDeleteCus.onclick=function(){
  let userState = txtaState.value
  let queryDelete = customerSelect = "DELETE FROM customer WHERE name = " + '"' + delName + '"'
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ekr74869&pass=Boolarina18%&database=ekr74869&query=" + query)
  if (req1.status == 200) {
    if (req1.status == 500)
     alert("It's been successfully deleted!")
   else 
     alert("Error: It wasn't able to be deleted.")
   else
     alert("Error: " + req1.status)
}
