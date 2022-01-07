#! node

// Script qui affiche l'alphabet

const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let alphabet = ""

for (let a = 0; a < abc.length; a++) {
  alphabet += abc[a]
}

console.log(alphabet + "\n")
