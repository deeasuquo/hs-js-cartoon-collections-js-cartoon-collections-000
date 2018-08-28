function dwarfRollCall(dwarves) { 
  var dwarfnames= ""
  for(var i=dwarves.length/2;i<dwarves.length;i++){
    dwarfnames= dwarfnames + `${i+1}. ${dwarves[i]} `
   }
   return dwarfnames
  }

function summonCaptainPlanet(planeteerCalls){
  var newArray= planeteerCalls
  for(var i=0; i<newArray.length;i++){
     newArray[i].toUpperCase();
      newArray[i]= newArray[i] + "!"
  }
  return newArray
}

function longPlaneteerCalls(words) {
 if(words.length>4){
   return true
 }
 else{
   return false
 }
}

function findTheCheese (foods) {
  for(var i=0; i<foods.length;i++){
    if(foods[i]=="cheddar"|| foods[i]=="gouda"||foods[i]=="camembert"){
      return foods[i]
    }
  }
    return "no cheese!"
}

function wordswithB(words){
  var namesstartingwithB=""
  for(var i=0; i<words.length; i++){
    if (words[i].startswith"B")
  }
}