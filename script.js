fetch('https://reqbin.com/echo/get/json', {
   headers: {
      'Accept': 'application/json'
   }
})
   .then(response => response.text())
   .then(text => console.log(text))