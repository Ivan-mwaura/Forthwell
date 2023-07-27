const homeCovers = document.querySelector('#retrieve-home-insurance-covers').addEventListener('click', function retrieveCovers() {
    const url = '/api/v1/homeInsuranceCovers';
    fetch(url)
        .then((res) => res.json())
        .then((data) => {

          //console.log(data.lifeInsuranceCovers)
            
          const targetData =  data.homeInsuranceCovers.map((cover) => {

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

            console.log(targetData);

            localStorage.setItem('homeInsuranceCover', JSON.stringify(targetData));
       
            window.location.href = "homeinsurance.html";
        })
        .catch((err) => console.log(err));
})

