function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+?";
  const passNum = document.getElementById("passNum"); // number of length
  const passwordGenerated = document.getElementById("passwordGenerated"); // result of password below button

  let allowedChars = "";
  let password = "";
  // if some of these const are true, we want to take the corresponding set of characters, and concat it into allowedChars, concat is +=
  allowedChars += includeLowerCase ? lowercaseChars : ""; // concat lowercaseCHARS if includeLowercase is true, if not, empty
  allowedChars += includeUpperCase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  // at this point the strings aren't randomized

  if (passNum.value <= 0) {
    passwordGenerated.innerHTML = `Password length must be at least 1`;
    return; // Exit the function if the password length is invalid
  }
  if (allowedChars.length === 0) {
    passwordGenerated.innerHTML = `At least 1 set of characters must be selected`;
    return; // Exit the function if no character set is selected
  }

  // Use a for loop to create a randomized password
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex]; // string concat
  }

  // Update the label with the generated password
  passwordGenerated.innerHTML = `Generated password:  ${password}`;
}

// Update the onclick attribute of the button to call the generatePassword function
document.getElementById("passwordGenerator").onclick = function () {
  const passwordLength = `${passNum.value}`;
  const includeLowerCase = true;
  const includeUpperCase = true;
  const includeNumbers = true;
  const includeSymbols = true;

  generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);
};
