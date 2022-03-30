function dedupe(list) {
  let IDSobject = new Object();

  for (let l of list) {
    let ID = l.id;
    IDSobject[ID] = "";
  }
  // console.log("IDSobject", IDSobject);

  for (let l of list) {
    IDSobject[l.id] = { ...IDSobject[l.id], ...l };
  }
  // console.log("IDSobject", IDSobject);

  let final = Object.entries(IDSobject);

  return final;
}

//TEST
console.log("======================== ");

console.log(
  dedupe([
    {
      id: 2,
      name: "John",
      car: "mercedes",
    },
    {
      id: 2,
      surname: "Williams",
      othercar: "porsche",
    },
    {
      id: 3,
      name: "Samuel Soe",
      phone: "+12223334444",
      car: "ferrari",
    },
    {
      id: 4,
      name: "Ana Parker",
      car: "audi",
    },
    {
      id: 3,
      name: "Milenia Miau",
      car: "small",
    },
  ])
); //
