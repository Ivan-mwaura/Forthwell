const login = document.querySelector('#signin-form').addEventListener('submit', function handleSubmit(event) {
    
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const data = {
        email,
        password,
    }

    console.log(data)

    const newformData = new FormData();

    // Append each field from the form data object to the FormData object
   Object.entries(data).forEach(([key, value]) => {
       newformData.append(key, value);
     });

    try {

        axios.post("/api/v1/signup", newformData, {

            headers: {
                "Content-Type": "multipart/form-data",
            }

        }).then(function (response) {
            console.log(response)

            const responseMessage = response.data.msg;
            const {token} = response.data;

            if(response.data.msg === "Account created successfully"){
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

            console.log(token)

            if(token){
                localStorage.setItem('token', token);
                window.location.href = "index.html";
            }
        }).catch(function (error) {
            
            const responseError = error.response.data.msg;
            console.log(responseError)

            if(responseError){
                document.getElementById("response-error").innerHTML = responseError;
            }

        })
        
    } catch (error) {
        console.log(error)
    }
});