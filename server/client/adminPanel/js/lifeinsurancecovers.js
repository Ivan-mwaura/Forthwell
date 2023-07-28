
const covers = document.querySelector('#retrieve-life-insurance-covers').addEventListener('click', function retrieveCovers() {
    const url = '/api/v1/lifeInsuranceCovers';
    fetch(url)
        .then((res) => res.json())
        .then((data) => {

          //console.log(data.lifeInsuranceCovers)
            
          const targetData =  data.lifeInsuranceCovers.map((cover) => {

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

            localStorage.setItem('lifeInsuranceCover', JSON.stringify(targetData));

           
            window.location.href = "lifeinsurance.html";
        })
        .catch((err) => console.log(err));
})

