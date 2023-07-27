const carCovers = document.querySelector('#retrieve-car-insurance-covers').addEventListener('click', function retrieveCovers() {
    const url = '/api/v1/carInsuranceCovers';
    fetch(url)
        .then((res) => res.json())
        .then((data) => {

          
            
          const targetData =  data.carInsuranceCovers.map((cover) => {

            return{
            id :cover._id,
            firstName :cover.firstName,
            lastName : cover.lastName,
            email : cover.email,
            phone : cover.phone,
            message: cover.message,
            createdAt :cover.createdAt,
            updatedAt : cover.updatedAt,
            }

        });

           //console.log(targetData);

            localStorage.setItem('carInsuranceCover', JSON.stringify(targetData));

   
           
            window.location.href = "carinsurance.html";
        })
        .catch((err) => console.log(err));
})

