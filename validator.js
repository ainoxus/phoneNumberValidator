function telephoneCheck(str) {
  let regex = /^1*\s*[0-9]{3}-*\s*[0-9]{3}-*\s*[0-9]{4}$|^1*\s*[(][0-9]{3}[)]-*\s*[0-9]{3}-*\s*[0-9]{4}$/;
  return regex.test(str);
}
