
customerSelect.onshow=function(){
  let userState = txtaState.value
  let query = customerSelect = "SELECT name FROM customer WHERE state = " + '"' + userState + '"';
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ekr74869&pass=Boolarina18%&database=ekr74869&query=" + query)
  if (req1.status == 200) {
      results = JSON.parse(req1.responseText)  
        console.log("The parsed JSON is " + results)
    let message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][0] + "\n"
        txtaState.value = message
} else

        NSB.MsgBox("Error code: " + req1.status)
}

btnCorpName.onclick=function(){
  let userState = txtaState.value
  let query = customerSelect = "SELECT name FROM customer WHERE state = " + '"' + userState + '"';
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ekr74869&pass=Boolarina18%&database=ekr74869&query=" + query)
  if (req1.status == 200) {
      results = JSON.parse(req1.responseText)
  if (results.length == 0)
        NSB.MsgBox("Error: there are no states like that.") 
    else {        
        var message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][0] + "\n"
        txtaState.value = message
        }
} else

        NSB.MsgBox("Error code: " + req1.status)
}



