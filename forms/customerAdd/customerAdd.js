
customerAdd.onshow=function(){
  let userState = txtaState.value
  let queryAdd = customerSelect = "INSERT INTO customer VALUES("Jesse Antiques", "1113 F St", "Omaha", "NE", "68178")";
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ekr74869&pass=Boolarina18%&database=ekr74869&query=" + query)
  if (req1.status == 200) {
    if (req1.status == 500)
     alert("It's been successfully added!")
   else 
     alert("Error: It wasn't able to be added.")
   else
     alert("Error: " + req1.status)
}
