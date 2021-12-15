
let inputBox = document.querySelector(".search-bar__input1");
let icon = document.querySelector(".material-icons");
let table=document.querySelector(".tb")
table.style.display="none";



icon.addEventListener("click", () => {

    
    if (inputBox.value.length == 6) {
        table.style.display="block";
        console.log(inputBox.value);
        console.log(inputBox.value.length);
      

        let d = new Date();
        const [dd, mm, yyyy] = [d.getDate(), d.getMonth() + 1, d.getFullYear()]
        // FOR d.getMonth and d.getday(i.e sunday monday) counting start from 0 
        // so for january month d.getMonth=0
        console.log([dd, mm, yyyy])


        // let para=`${date.getDate()-date.getMonth()-date.getFullYear()}`
        // console.log(para)
        // console.log(date)
        fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${inputBox.value}&date=${dd}-${mm}-${yyyy}`)
            .then(response => { return response.json() })
            .then(data => {

                let pin=document.querySelector(".pincodedetails");
                let pin_d=document.querySelector(".pincodedetails2");

                pin.classList.add("state_name")
                pin_d.classList.add("district_name")

                state_name=document.querySelector(".state_name")
                district_name=document.querySelector(".district_name")
                
               
                district_name.innerHTML=`<b><center>District Name</b>- ${data["sessions"][0]["district_name"]}</center><center> <br><br> Slots for Date - ${dd}-${mm}-${yyyy}</center>`;
                state_name.innerHTML=`<b><center>State Name </b>- ${data["sessions"][0]["state_name"]}</center> `;

                for (i = 0; i < data["sessions"].length; i++) {

                    var mtb = document.getElementById("mtb");
                    var m = mtb.insertRow();

                    m.insertCell(0);   // this is filling column 0 i.e country name
                    j = i + 1;
                    // <tr>
                    //     <td></td>
                    // </tr>
                    // Here tr means insertRow and td means insert cell  : cell[0] is column 0 and cell[1] is column 1 
                    mtb.rows[j].cells[0].innerHTML = data["sessions"][i]["center_id"];
                    // document.getElementById("flag")
                    mtb.rows[j].cells[0].style.background = 'rgb(0, 0, 0)';

                    m.insertCell(1);

                    mtb.rows[j].cells[1].innerHTML = data["sessions"][i]["name"];;
                    mtb.rows[j].cells[1].style.background = 'rgb(0, 0, 0)';

                    m.insertCell(2);
                    mtb.rows[j].cells[2].innerHTML = data["sessions"][i]["vaccine"];;
                    mtb.rows[j].cells[2].style.background = 'rgb(0, 0, 0)';

                    m.insertCell(3);
                    mtb.rows[j].cells[3].innerHTML = data["sessions"][i]["available_capacity_dose1"];;
                    mtb.rows[j].cells[3].style.background = 'rgb(0, 0, 0)';

                    m.insertCell(4);
                    mtb.rows[j].cells[4].innerHTML = data["sessions"][i]["available_capacity_dose2"];;
                    mtb.rows[j].cells[4].style.background = 'rgb(0, 0, 0)';

                    m.insertCell(5);
                    mtb.rows[j].cells[5].innerHTML = `${data["sessions"][i]["fee_type"]}<br>  Rs - ${data["sessions"][i]["fee"]}`;
                    mtb.rows[j].cells[5].style.background = 'rgb(0, 0, 0)';

                    m.insertCell(6);
                    mtb.rows[j].cells[6].innerHTML = data["sessions"][i]["address"];;
                    mtb.rows[j].cells[6].style.background = 'rgb(0, 0, 0)';


                }

              
                let cowin=document.querySelector(".cowin");
                 cowin.classList.add("cowin_class")
                 cowin.innerHTML=`<bold>Due to security reasons we advise you to book slot using official website <bold> 
                                    <br>
                                    <a href="https://www.cowin.gov.in/" target=_blank style="color:red;"> Cowin Website</a><br><br><br>
                                    `
            });

    }
    else{  
     
    }
})


// When user presses enter 
inputBox.addEventListener("keyup", (event) => {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13){
            document.querySelector(".material-icons").click();
    }
})