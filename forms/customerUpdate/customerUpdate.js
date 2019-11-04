
btnUpdate.onclick=function(){
    var oldName = inptPrevInfo.value
    var updtName = inptUpdtInfo.value
    var queryUpdate = "UPDATE customer SET name =" + '"' + updtName + '"' + " WHERE name = " + '"' + oldName + '"'

      req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ekr74869&pass=Boolarina18%&database=ekr74869&query=" + queryUpdate)

      if (req1.status == 200) { 
        if (req1.responseText == 500) 
            NSB.MsgBox("The company name has been successfully updated: " + updtName)
            var message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][0] + "\n"
        txtaResult.value = message
        else
            NSB.MsgBox(oldName + " could not be updated in the database.")
      } else {

        NSB.MsgBox("Error: " + req1.status);
      }  
}
