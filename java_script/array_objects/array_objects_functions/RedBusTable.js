// red bus table
const redBusTableDatas=[
    {travelsName:"HetTravels",busType:"AC",busBrand:"VOLVO",price:2000,time:"18:00"},
    {travelsName:"AtharvaaTravels",busType:"NonAC",busBrand:"MercedesBenz",price:3000,time:"08:00"},
    {travelsName:"KashinathTravels",busType:"AC",busBrand:"TATA",price:1500,time:"10:00"},
    {travelsName:"SiddanthTravels",busType:"NonAC",busBrand:"VOLVO",price:800,time:"05:00"},
    {travelsName:"DigambarTravels",busType:"NonAC",busBrand:"MercedesBenz",price:1000,time:"14:30"},
    {travelsName:"RanjithTravels",busType:"AC",busBrand:"VOLVO",price:1300,time:"16:30"},
    {travelsName:"YashwanthTravels",busType:"NonAC",busBrand:"AshokLeyland",price:750,time:"00:11"},
    {travelsName:"HanumanthTravels",busType:"AC",busBrand:"VOLVO",price:2500,time:"11:11"},
    {travelsName:"AnjaliTravels",busType:"AC",busBrand:"BharathBenz",price:3000,time:"15:00"},
    {travelsName:"SwapnajaTravels",busType:"NonAC",busBrand:"TATA",price:1100,time:"20:30"}
];
let redBusTableBody=document.getElementById("red_bus_table_body");
let serialNumber=0;
// filteration with respect to busProperties
redBusTableDatas.filter(redBusTableData=>{
    if(redBusTableData.busBrand=="VOLVO"){
        redBusTableBody.innerHTML+=
        `
            <tr>
                <td style="padding:1px;">0${++serialNumber}</td>
                <td style="padding:1px;">${redBusTableData.travelsName}</td>
                <td style="padding:1px;">${redBusTableData.busType}</td>
                <td style="padding:1px;">${redBusTableData.busBrand}</td>
                <td style="padding:1px;">${redBusTableData.price}</td>
                <td style="padding:1px;">${redBusTableData.time}</td>
            </tr>
        `;
    }
});