var hyundai = [

    {
        "imgaddress":"imagecamp/hyundai/",
        "Name":"hyundai Avanza 2nd Generation",
        "Prize" : "2,966,565",
        "view" : "viewmore.html"
    },
    {
        "imgaddress":"imagecamp/hyundai/",
        "Name":"hyundai Camry XV70.jpg",
        "Prize" : "25,966,565",
        "view" : "viewmore.html"
    },
    {
        "imgaddress":"imagecamp/hyundai/",
        "Name":"hyundai Camry XV70.jpg",
        "Prize" : "205,966,565",
        "view" : "viewmore.html"
    },

    {
        "imgaddress":"imagecamp/hyundai/",
        "Name":"hyundai Avanza 2nd Generation",
        "Prize" : "2,966,565",
        "view" : "viewmore.html"
    },
    {
        "imgaddress":"imagecamp/hyundai/",
        "Name":"hyundai Camry XV70.jpg",
        "Prize" : "25,966,565",
        "view" : "viewmore.html"
    },
    {
        "imgaddress":"imagecamp/hyundai/",
        "Name":"hyundai Camry XV70.jpg",
        "Prize" : "205,966,565",
        "view" : "viewmore.html"
    },
    {
        "imgaddress":"imagecamp/hyundai/",
        "Name":"hyundai Camry XV70.jpg",
        "Prize" : "25,966,565",
        "view" : "viewmore.html"
    },
    {
        "imgaddress":"imagecamp/hyundai/",
        "Name":"hyundai Camry XV70.jpg",
        "Prize" : "205,966,565",
        "view" : "viewmore.html"
    },
];


for(var i = 0; i<hyundai.length;i++)
{
    document.getElementById("hyundaicard").innerHTML+=
    `
    
    <div class="col-3 mx-auto">
    <div class="card ">
        <img src="${hyundai[i].imgaddress}" alt="">
        <div class="card-body">
            <h3 class="card-title">${hyundai[i].Name}</h3>
            <p class="card-text">
            ${hyundai[i].Prize}
            </p>

            <a class="btn btn-primary btn-block" href="${hyundai[i].view}">View</a>
            
        </div>
    </div>
</div>
    
    `
}