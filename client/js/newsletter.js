const forms = document.querySelector('#news-letter').addEventListener('submit', function handleSubmit(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;


    const data = {
        email
    };


    const newformData = new FormData();

     // Append each field from the form data object to the FormData object
    Object.entries(data).forEach(([key, value]) => {
        newformData.append(key, value);
      });

    try {
       
        axios.post("/api/v1/newsletter", newformData, { 
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then(function (response) {
            //handle success
            console.log(response);
            if(response.data.msg === 'submitted'){
              function showToast() {
                Toastify({
                  text: " successfully subscribed to our newsletter",
                  duration: 3000, // Duration in milliseconds
                  newWindow: true,
                  theme:"light",
                  close: true,
                  gravity: "top", // Position: "toast-top-left", "toast-top-right", "toast-bottom-left", "toast-bottom-right"
                  position: "center", // Alignment: "center", "left", "right"
                  //backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // Background color (incorrect)
                  stopOnFocus: true, // Prevents dismissing of toast on hover
                }).showToast();
              }
            }
            showToast();
          })
          .catch(function (error) {
            //handle error
            const responseError = error.response.data.msg;

            document.getElementById("response-error").innerHTML = responseError;

            if(responseError === 'Duplicate email, please choose another Email'){
              function showToast() {
                Toastify({
                  text: "Email is already subscribed to our newsletter",
                  duration: 3000, // Duration in milliseconds
                  newWindow: true,
                  theme:"light",
                  close: true,
                  backgroundColor: "linear-gradient(to right, red, #96c93d)", // Background color (incorrect)
                  gravity: "top", // Position: "toast-top-left", "toast-top-right", "toast-bottom-left", "toast-bottom-right"
                  position: "center", // Alignment: "center", "left", "right"
                  //backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // Background color (incorrect)
                  stopOnFocus: true, // Prevents dismissing of toast on hover
                }).showToast();
              }
            }
            showToast();
            
          })
      
    } catch (error) {
         //handle error
         console.log(response);
         //showToast('error', 'Message sent successfully');
         alert("Form not Sent");
    }   
      
  })

 


