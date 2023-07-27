const newsletterCovers = document.querySelector('#retrieve-newsletter-insurance-covers').addEventListener('click', function retrieveCovers() {
    const url = '/api/v1/newsletterInsuranceCovers';
    fetch(url)
        .then((res) => res.json())
        .then((data) => {

          //console.log(data.lifeInsuranceCovers)
            
          const targetData =  data.newsletterInsuranceCovers.map((cover) => {

            return{
            id :cover._id,
            email : cover.email,
            createdAt :cover.createdAt,
            updatedAt : cover.updatedAt,
            }

        });

           // console.log(targetData);

            localStorage.setItem('newsletterInsuranceCover', JSON.stringify(targetData));

   
           
            window.location.href = "newsletter.html";
        })
        .catch((err) => console.log(err));
})

