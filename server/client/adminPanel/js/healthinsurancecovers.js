const healthCovers = document.querySelector('#retrieve-health-insurance-covers').addEventListener('click', function retrieveCovers() {
    const url = '/api/v1/healthInsuranceCovers';
    fetch(url)
        .then((res) => res.json())
        .then((data) => {

                  
          const targetData =  data.healthInsuranceCovers.map((cover) => {

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

          // console.log(targetData);

            localStorage.setItem('healthInsuranceCover', JSON.stringify(targetData));

   
           
            window.location.href = "healthinsurance.html";
        })
        .catch((err) => console.log(err));
})

