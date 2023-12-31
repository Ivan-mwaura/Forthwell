const adminRoute = document.querySelector('#adminlogin-form').addEventListener('submit', function handleSubmit(event) {
    
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const data = {
        email,
        password,
    }

    //console.log(data)

    const newformData = new FormData();

    // Append each field from the form data object to the FormData object
   Object.entries(data).forEach(([key, value]) => {
       newformData.append(key, value);
     });

    try {

        axios.post("/api/v1/adminLogin", newformData, {

            headers: {
                "Content-Type": "multipart/form-data",

            }

        }).then(function (response) {
            //console.log(response)

            const responseMessage = response.data.msg;
            const {token} = response.data;

             localStorage.setItem('adminToken', token);

           // console.log({token: token})

            if(responseMessage){
                function showToast() {
                    Toastify({
                      text: responseMessage,
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

            //console.log(token)

           // const loginToken = localStorage.getItem('token');

            if(token){
                localStorage.setItem('adminToken', token);
                window.location.href = "../adminPanel/pages/adminPanel.html";
            }
            else{
                function showToast() {
                    Toastify({
                      text: "Not Authorized",
                      duration: 3000, // Duration in milliseconds
                      newWindow: true,
                      theme:"light",
                      close: true,
                      backgroundColor:"red",// Background color (incorrect)
                      gravity: "top", // Position: "toast-top-left", "toast-top-right", "toast-bottom-left", "toast-bottom-right"
                      position: "center", // Alignment: "center", "left", "right"
                      //backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // Background color (incorrect)
                      stopOnFocus: true, // Prevents dismissing of toast on hover
                    }).showToast();
                  }
            }
            showToast();

            
        }).catch(function (error) {

            console.log(error)

            const responseError = error.response.data.msg;

            if(responseError){
                document.getElementById("response-error").innerHTML = responseError;

                function showToast() {
                    Toastify({
                      text: responseError,
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
        
    } catch (error) {
        console.log(error)
    }
});