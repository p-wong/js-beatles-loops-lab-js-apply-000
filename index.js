function theBeatlesPlay(musicians, instruments) {
  var myArray = []
  
  for (var i = 0; i < musicians.length; i++)
  {
    myArray.push(musicians[i] + " plays " + instruments[i])
  }
  return myArray
}

function johnLennonFacts(facts) {
  var output = []
  var i = 0
  while (i < facts.length)
  {
    output.push(facts[i] + "!!!")
    i++
  }
  return output
}