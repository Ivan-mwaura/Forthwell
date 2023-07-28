const quotes = document.querySelector('#retrieve-quotes-insurance-covers').addEventListener('click', function retrieveQuotes() {
    const url = '/api/v1/quotes';
    fetch(url)
        .then((res) => res.json())
        .then((data) => {

         // console.log(data.quotation)
            
          const targetData =  data.quotation.map((cover) => {

            return{
            id :cover._id,
            firstName :cover.firstName,
            lastName : cover.lastName,
            email : cover.email,
            phone : cover.phone,
            message: cover.message,
            people : cover.people,
            insuranceType : cover.insuranceType,
            createdAt :cover.createdAt,
            updatedAt : cover.updatedAt,
            }

        });

            //console.log(targetData);

            localStorage.setItem('quote', JSON.stringify(targetData));
       
            window.location.href = "quotes.html";
        })
        .catch((err) => console.log(err));
})

