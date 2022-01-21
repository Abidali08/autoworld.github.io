var toyota = [

    {
        "imgaddress":"imagecamp/toyota/ToyotaAvanza2ndGeneration.jpg",
        "Name":"Toyota Avanza 2nd Generation",
        "Prize" : "2,966,565",
        "view" : "viewmore.html"
    },
    {
        "imgaddress":"imagecamp/toyota/ToyotaCamryXV70.jpg",
        "Name":"Toyota Camry XV70.jpg",
        "Prize" : "25,966,565",
        "view" : "viewmore.html"
    },
    {
        "imgaddress":"imagecamp/toyota/ToyotaCorolla11thGeneration.jpg",
        "Name":"Toyota Camry XV70.jpg",
        "Prize" : "205,966,565",
        "view" : "viewmore.html"
    },

    {
        "imgaddress":"imagecamp/toyota/ToyotaAvanza2ndGeneration.jpg",
        "Name":"Toyota Avanza 2nd Generation",
        "Prize" : "2,966,565",
        "view" : "viewmore.html"
    },
    {
        "imgaddress":"imagecamp/toyota/ToyotaCamryXV70.jpg",
        "Name":"Toyota Camry XV70.jpg",
        "Prize" : "25,966,565",
        "view" : "viewmore.html"
    },
    {
        "imgaddress":"imagecamp/toyota/ToyotaCorolla11thGeneration.jpg",
        "Name":"Toyota Camry XV70.jpg",
        "Prize" : "205,966,565",
        "view" : "viewmore.html"
    },
    {
        "imgaddress":"imagecamp/toyota/ToyotaCamryXV70.jpg",
        "Name":"Toyota Camry XV70.jpg",
        "Prize" : "25,966,565",
        "view" : "viewmore.html"
    },
    {
        "imgaddress":"imagecamp/toyota/ToyotaCorolla11thGeneration.jpg",
        "Name":"Toyota Camry XV70.jpg",
        "Prize" : "205,966,565",
        "view" : "viewmore.html"
    },
];


for(var i = 0; i<toyota.length;i++)
{
    document.getElementById("toyotacard").innerHTML+=
    `
    
    <div class="col-3 mx-auto">
    <div class="card ">
        <img src="${toyota[i].imgaddress}" alt="">
        <div class="card-body">
            <h3 class="card-title">${toyota[i].Name}</h3>
            <p class="card-text">
            ${toyota[i].Prize}
            </p>

            <a class="btn btn-primary btn-block" href="${toyota[i].view}">View</a>
            
        </div>
    </div>
</div>
    
    `
}