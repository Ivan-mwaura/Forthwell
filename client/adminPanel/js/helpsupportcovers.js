const helpsupportCovers = document.querySelector('#retrieve-helpsupport-insurance-covers').addEventListener('click', function retrieveCovers() {
    const url = '/api/v1/helpsupportInsuranceCovers';
    fetch(url)
        .then((res) => res.json())
        .then((data) => {

          //console.log(data.lifeInsuranceCovers)
            
          const targetData =  data.helpsupportInsuranceCovers.map((cover) => {
       
            return{
                id :cover._id,
                name :cover.name,
                email : cover.email,
                phone : cover.phone,
                message : cover.message,
                createdAt :cover.createdAt,
                updatedAt : cover.updatedAt,
                }

        });

            console.log(targetData);

            localStorage.setItem('helpsupportInsuranceCover', JSON.stringify(targetData));

   
           
            window.location.href = "helpSupport.html";
        })
        .catch((err) => console.log(err));
})

