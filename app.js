console.log("connected");
const presidents = [
    { name: "Donald Trump", terms: 1, party: "R" },
    { name: "Barack Obama", terms: 2, party: "D" },
    { name: "George W. Bush", terms: 2, party: "R" },
    { name: "Bill Clinton", terms: 2, party: "D" },
    { name: "George H.W. Bush", terms: 1, party: "R" },
    { name: "Ronald Reagan", terms: 2, party: "R" },
    { name: "Jimmy Carter", terms: 1, party: "D" },
    { name: "Gerlad Ford", terms: 1, party: "R" },
    { name: "Richard Nixon", terms: 2, party: "R" },
    { name: "John F. Kennedy", terms: 1, party: "D" },
    { name: "Lyndon Johnson", terms: 2, party: "D" },
    { name: "Dwight Eisenhower", terms: 2, party: "R" }
  ];
  //Challenge Questions
  //1) Filter all presidents, leaving only the Democratic ones
  const Democrats = presidents.filter(function(presidents) {
    return presidents.party == "D";
  });
  console.log(Democrats)
  //2)Filter all presidents to leave only one term Republican presidents HINT use If statement
  const RepublicanOne = presidents.filter(function(presidents) {
    if(presidents.terms == 1)
    return presidents.party == "R";
  });
  console.log(RepublicanOne)
  //3) return only the last three presidents
   const LastThree = presidents.slice(9,13);
   console.log(LastThree)

  //4) log all dems who served 2 terms. HINT use chain filter, filter and slice
  const DemTwo = presidents.filter(function(presidents) {
    if(presidents.terms == 2)
    return presidents.party == "D";
  });
   console.log(DemTwo)
  //BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"
  const LBJ = [
    {name: "LeBron James", Term: 1}
  ]
  if(LBJ.Term == 2){
    alert("LBJ served two terms")
  }else alert("LBJ was one and done")