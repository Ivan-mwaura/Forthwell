const form = document.querySelector('#contactUs-support').addEventListener('submit', function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const data = {
      name,
      email,
      phone,
      message,
    };

    console.log(data)

    const newformData = new FormData();

     // Append each field from the form data object to the FormData object
    Object.entries(data).forEach(([key, value]) => {
        newformData.append(key, value);
      });

   try {
       
        axios.post("/api/v1/contactUs", newformData, { 
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then(function (response) {
            //handle success
        
            if(response.data.msg === 'submitted'){
              function showToast() {
                Toastify({
                  text: " Request sent successfully, we will reach out to you via email or phone number provided",
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
            
          }).catch(function (error) {
            //handle error
            const responseError = error.response.data.msg;

            document.getElementById("response-error").innerHTML = responseError;

            if(responseError === 'Duplicate email, please choose another Email'){
              function showToast() {
                Toastify({
                  text: "an error occurred during submission",
                  duration: 3000, // Duration in milliseconds
                  newWindow: true,
                  theme:"light",
                  close: true,
                  gravity: "top", // Position: "toast-top-left", "toast-top-right", "toast-bottom-left", "toast-bottom-right"
                  position: "center", // Alignment: "center", "left", "right"
                  //backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // Background color (incorrect)
                  stopOnFocus: true, // Prevents dismissing of toast on hover
                  backgroundColor: "linear-gradient(to right, red, #96c93d)", // Background color (incorrect)
                }).showToast();
              }
            }
            showToast();
            
          })
      
    } catch (error) {
         //handle error
         console.log(error);
         //showToast('error', 'Message sent successfully');
         alert("Form not Sent");
    }   
      
  })

 


