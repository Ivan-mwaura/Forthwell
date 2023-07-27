const indemnityCovers = document.querySelector('#retrieve-indemnity-insurance-covers').addEventListener('click', function retrieveCovers() {
    const url = '/api/v1/indemnityInsuranceCovers';
    fetch(url)
        .then((res) => res.json())
        .then((data) => {

          //console.log(data.lifeInsuranceCovers)
            
          const targetData =  data.indemnityInsuranceCovers.map((cover) => {

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

            localStorage.setItem('indemnityInsuranceCover', JSON.stringify(targetData));
       
            window.location.href = "indemnityinsurance.html";
        })
        .catch((err) => console.log(err));
})

