const friends = ["Cleetus", "Gus", "Bartholemue", "Kujo", "Pablo"];

// for (let i = 0; i < friends.length; i++) {
//   for (let x = 100; x > 0; x--)
//     console.log(`${x} lines of code in the file, ${x} lines of code; ${friends[i]} strikes one out, clears it all out, ${x-1} lines of code in the file`);

// }


let singBtn = document.querySelector("#sing-btn");
singBtn.addEventListener("click", () => {
  for (let i = 0; i < friends.length; i++) {
    let div1 = document.createElement("div")
    div1.className = "Friend";
    document.body.appendChild(div1)
    let h3 = document.createElement("h3");
    let h3Text = document.createTextNode(friends[i]);
    h3.appendChild(h3Text)
    div1.appendChild(h3)

    for (let x = 100; x > 0; x--) {
      let paragraph = document.createElement("p");
      let paragraphText = document.createTextNode(`${x} lines of code in the file, ${x} lines of code; ${friends[i]} strikes one out, clears it all out, ${x-1} lines of code in the file`)
      paragraph.appendChild(paragraphText);
      div1.appendChild(paragraph);

    }

    // console.log(`${x} lines of code in the file, ${x} lines of code; ${friends[i]} strikes one out, clears it all out, ${x-1} lines of code in the file`);


  }
})