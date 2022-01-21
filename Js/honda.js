var honda = [

    {
        "imgaddress":"imagecamp/honda/",
        "Name":"honda Avanza 2nd Generation",
        "Prize" : "2,966,565",
        "view" : "viewmore.html"
    },
    {
        "imgaddress":"imagecamp/honda/",
        "Name":"honda Camry XV70.jpg",
        "Prize" : "25,966,565",
        "view" : "viewmore.html"
    },
    {
        "imgaddress":"imagecamp/honda/",
        "Name":"honda Camry XV70.jpg",
        "Prize" : "205,966,565",
        "view" : "viewmore.html"
    },

    {
        "imgaddress":"imagecamp/honda/",
        "Name":"honda Avanza 2nd Generation",
        "Prize" : "2,966,565",
        "view" : "viewmore.html"
    },
    {
        "imgaddress":"imagecamp/honda/",
        "Name":"honda Camry XV70.jpg",
        "Prize" : "25,966,565",
        "view" : "viewmore.html"
    },
    {
        "imgaddress":"imagecamp/honda/",
        "Name":"honda Camry XV70.jpg",
        "Prize" : "205,966,565",
        "view" : "viewmore.html"
    },
    {
        "imgaddress":"imagecamp/honda/",
        "Name":"honda Camry XV70.jpg",
        "Prize" : "25,966,565",
        "view" : "viewmore.html"
    },
    {
        "imgaddress":"imagecamp/honda/",
        "Name":"honda Camry XV70.jpg",
        "Prize" : "205,966,565",
        "view" : "viewmore.html"
    },
];


for(var i = 0; i<honda.length;i++)
{
    document.getElementById("hondacard").innerHTML+=
    `
    
    <div class="col-3 mx-auto">
    <div class="card ">
        <img src="${honda[i].imgaddress}" alt="">
        <div class="card-body">
            <h3 class="card-title">${honda[i].Name}</h3>
            <p class="card-text">
            ${honda[i].Prize}
            </p>

            <a class="btn btn-primary btn-block" href="${honda[i].view}">View</a>
            
        </div>
    </div>
</div>
    
    `
}