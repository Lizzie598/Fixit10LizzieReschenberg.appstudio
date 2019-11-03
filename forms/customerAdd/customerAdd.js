
btnAddName.onclick=function(){
    let customerName = inptCustName.value
    let queryAdd = "INSERT INTO customer VALUES("Jesse Antiques", "1113 F St", "Omaha", "NE", "68178")"

    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ekr74869&pass=Boolarina18%&database=ekr74869&query=" + query)
  if (req1.status == 200) { 

        results = JSON.parse(req1.responseText)
    if (results.length == 0)
        NSB.MsgBox("Error: there are no names like that.") 
    else {        
        var message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][1] + "\n"
        txtaReturn.value = message
      } 
    else

        NSB.MsgBox("Error code: " + req1.status)
}
