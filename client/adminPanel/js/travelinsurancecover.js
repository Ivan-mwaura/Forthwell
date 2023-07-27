const travelCovers = document.querySelector('#retrieve-travel-insurance-covers').addEventListener('click', function retrieveCovers() {
    const url = '/api/v1/travelInsuranceCovers';
    fetch(url)
        .then((res) => res.json())
        .then((data) => {

          //console.log(data.lifeInsuranceCovers)
            
          const targetData =  data.travelInsuranceCovers.map((cover) => {

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

            localStorage.setItem('travelInsuranceCover', JSON.stringify(targetData));
       
            window.location.href = "travelinsurance.html";
        })
        .catch((err) => console.log(err));
})

