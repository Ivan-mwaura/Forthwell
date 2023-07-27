const registeredclients = document.querySelector('#retrieve-registeredclients-insurance-covers').addEventListener('click', function retrieveCovers() {
    const url = '/api/v1/registeredClients';
    fetch(url)
        .then((res) => res.json())
        .then((data) => {

          //console.log(data.lifeInsuranceCovers)
            
          const targetData =  data.registeredclients.map((cover) => {

            return{
            id :cover._id,
            email : cover.email,
            createdAt :cover.createdAt,
            updatedAt : cover.updatedAt,
            }

        });

           // console.log(targetData);

            localStorage.setItem('registeredclients', JSON.stringify(targetData));

   
           
            window.location.href = "registeredclients.html";
        })
        .catch((err) => console.log(err));
})

