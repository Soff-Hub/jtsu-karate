function getData(form) {
    var formData = new FormData(form);
    console.log("formData", formData);
  
    // iterate through entries...
    for (var pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
  
    // ...or output as an object
    console.log(Object.fromEntries(formData));
}

export default getData