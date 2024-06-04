export default function generatePass(passwordLenght :number) {
  let password: string = "";

  let NumPasswordLength = passwordLenght;
  let character: string = "Aa@$&#abcdefGIPOMSZ0321654987?!";

  for (let index = 0; index < NumPasswordLength; index++) {
    password += character.charAt(Math.floor(Math.random() * character.length));
  }

  return password;
}



