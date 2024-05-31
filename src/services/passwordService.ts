export default function generatePass() {
  let password: string = "";

  let passwordLength = 8;
  let character: string = "Aa@$&#abcdefGIPOMSZ0321654987?!";

  for (let index = 0; index < passwordLength; index++) {
    password += character.charAt(Math.floor(Math.random() * character.length));
  }

  return password;
}
