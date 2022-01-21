var suzuki = [

    {
        "imgaddress":"imagecamp/suzuki/",
        "Name":"suzuki Avanza 2nd Generation",
        "Prize" : "2,966,565",
        "view" : "viewmore.html"
    },
    {
        "imgaddress":"imagecamp/suzuki/",
        "Name":"suzuki Camry XV70.jpg",
        "Prize" : "25,966,565",
        "view" : "viewmore.html"
    },
    {
        "imgaddress":"imagecamp/suzuki/",
        "Name":"suzuki Camry XV70.jpg",
        "Prize" : "205,966,565",
        "view" : "viewmore.html"
    },

    {
        "imgaddress":"imagecamp/suzuki/",
        "Name":"suzuki Avanza 2nd Generation",
        "Prize" : "2,966,565",
        "view" : "viewmore.html"
    },
    {
        "imgaddress":"imagecamp/suzuki/",
        "Name":"suzuki Camry XV70.jpg",
        "Prize" : "25,966,565",
        "view" : "viewmore.html"
    },
    {
        "imgaddress":"imagecamp/suzuki/",
        "Name":"suzuki Camry XV70.jpg",
        "Prize" : "205,966,565",
        "view" : "viewmore.html"
    },
    {
        "imgaddress":"imagecamp/suzuki/",
        "Name":"suzuki Camry XV70.jpg",
        "Prize" : "25,966,565",
        "view" : "viewmore.html"
    },
    {
        "imgaddress":"imagecamp/suzuki/",
        "Name":"suzuki Camry XV70.jpg",
        "Prize" : "205,966,565",
        "view" : "viewmore.html"
    },
];


for(var i = 0; i<suzuki.length;i++)
{
    document.getElementById("suzukicard").innerHTML+=
    `
    
    <div class="col-3 mx-auto">
    <div class="card ">
        <img src="${suzuki[i].imgaddress}" alt="">
        <div class="card-body">
            <h3 class="card-title">${suzuki[i].Name}</h3>
            <p class="card-text">
            ${suzuki[i].Prize}
            </p>

            <a class="btn btn-primary btn-block" href="${suzuki[i].view}">View</a>
            
        </div>
    </div>
</div>
    
    `
}