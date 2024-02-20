function generateEmail(surname, name) {
    const email = name.toLowerCase() + surname.toLowerCase() + '@example.com';
    return email;
  }
  
  const surname = 'nfgdsg';
  const name = 'blass';
  console.log(generateEmail(surname, name)); 
  function generateRandomId(length) {
    let id = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
  }
  
  const idLength = 10;
  console.log(generateRandomId(idLength)); 
  function generateEmailWithRandomId(surname, name) {
    const email = generateEmail(surname, name) + '-' + generateRandomId(5) + '@example.com';
    return email;
  }