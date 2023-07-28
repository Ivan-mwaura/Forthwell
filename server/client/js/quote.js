const form = document.querySelector('#quotation-form').addEventListener('submit', function handleSubmit(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const people = document.getElementById("people").value;

      // Get all radio buttons with the name "insurance"
      const radioButtons = document.getElementsByName('insurance');
    
      // Loop through the radio buttons to find the selected one
      for (const radioButton of radioButtons) {
        if (radioButton.checked) {
          // Fetch the value of the selected radio button
          const insuranceType= radioButton.value;
          localStorage.setItem('selectedInsuranceType', insuranceType);
          break; // Exit the loop once we find the selected radio button
        }
      }

    const insuranceType = localStorage.getItem('selectedInsuranceType');
    
    const data = {
      firstName,
      lastName,
      email,
      phone,
      message,
      people,
      insuranceType
    };

    //console.log(data)


    const newformData = new FormData();

     // Append each field from the form data object to the FormData object
    Object.entries(data).forEach(([key, value]) => {
        newformData.append(key, value);
      });

    try {
       
        axios.post("/api/v1/quotes", newformData, { 
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
                  text: " Request sent successfully",
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

          });
      
    } catch (error) {
         //handle error
         console.log(response);
         //showToast('error', 'Message sent successfully');
         alert("Form not Sent");
    }   
      
  })

 


