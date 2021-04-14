const friends = ["Cleetus", "Gus", "Bartholemue", "Kujo", "Pablo"];

for (let i = 0; i < friends.length; i++) {
  for (let x = 100; x > 0; x--)
    console.log(`${x} lines of code in the file, ${x} lines of code; ${friends[i]} strikes one out, clears it all out, ${x-1} lines of code in the file`);

}