let customers = []

btnDeleteCus.onclick=function(){
    let nameDel = inptName.value 
    let returned = false
    for (i = 0; i <= customers.length - 1; i++) {
        if (nameDel == customers[i][1])
            returned = true
 }
    if (returned == false) 
       NSB.MsgBox("That name is not available since it is not in the database.")
    else if (returned == true) {
    let queryDelete = customerSelect = "DELETE FROM customer WHERE name = " + '"' + delName + '"'
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ekr74869&pass=Boolarina18%&database=ekr74869&query=" + query)
  if (req1.status == 200) {
     if (req1.responseText == 500) 
            NSB.MsgBox("The following company has been deleted: " + nameDel)
            var message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][0] + "\n"
        txtaDelete.value = message
        else
            NSB.MsgBox("The follow company was not deleted from the database: " + nameDel + ".")
      else {

        NSB.MsgBox("Error: " + req1.status);
      }  
  } 
}
