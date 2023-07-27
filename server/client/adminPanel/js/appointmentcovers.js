const appointmentCovers = document.querySelector('#retrieve-appointment-insurance-covers').addEventListener('click', function retrieveCovers() {
    const url = '/api/v1/appointmentInsuranceCovers';
    fetch(url)
        .then((res) => res.json())
        .then((data) => {

          //console.log(data.lifeInsuranceCovers)
            
          const targetData =  data.appointmentInsuranceCovers.map((cover) => {

            return{
            id :cover._id,
            name :cover.name,
            email : cover.email,
            phone : cover.phone,
            serviceType : cover.serviceType,
            message : cover.message,
            createdAt :cover.createdAt,
            updatedAt : cover.updatedAt,
            }

        });

           // console.log(targetData);

            localStorage.setItem('appointmentInsuranceCover', JSON.stringify(targetData));

   
           
            window.location.href = "appointment.html";
        })
        .catch((err) => console.log(err));
})

