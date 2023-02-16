"use strict";

function resetForm() {

    let getSelectedRadio;
    let getSelectedBox;
    if(document.getElementById('male').checked) {
         document.getElementById('male').checked = false;
         getSelectedRadio = document.getElementById('male').value;
      }else if(document.getElementById('female').checked) {
         document.getElementById('female').checked = false;
         getSelectedRadio = document.getElementById('female').value;
      } 
      if(document.getElementById('create').checked) {
        document.getElementById('create').checked = false;
        getSelectedBox = document.getElementById('create').value;
      }
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("cname").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
     getSelectedRadio = "";
     getSelectedBox = "";

}






// _________________________________________________________________________

function validation(){

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var dob = document.getElementById('dob').value;
    var cname = document.getElementById('cname').value;
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;






    if(fname == ""){
        document.getElementById('fname-valid').innerHTML =" ** Please fill the first name field";
        return false;
    }
    if((fname.length <= 2) || (lname.length > 20)) {
        document.getElementById('fname-valid').innerHTML =" ** First name lenght must be between 2 and 20";
        return false;	
    }
    if(!isNaN(fname)){
        document.getElementById('fname-valid').innerHTML =" ** only characters are allowed";
        return false;
    }




    if(lname == ""){
        document.getElementById('lname-valid').innerHTML =" ** Please fill the last name field";
        return false;
    }
    if((lname.length <= 2) || (lname.length > 20)) {
        document.getElementById('lname-valid').innerHTML =" ** Last name lenght must be between 2 and 20";
        return false;	
    }
    if(!isNaN(lname)){
        document.getElementById('lname-valid').innerHTML =" ** only characters are allowed";
        return false;
    }



    
    let getSelectValue = document.querySelector( 
        'input[name="gender"]:checked'); 
      
    if(getSelectValue != null) { 
    //     document.getElementById("gender-valid").innerHTML 
    //         = "<p class=\"text-success\">"+getSelectValue.value 
    //         + " is your Gender" + "</p>"; 
    } 
    else { 
        document.getElementById("gender-valid").innerHTML 
            = "*You have not selected your Gender."; 
            return false;
    } 






    if(dob == ""){
        document.getElementById('dob-valid').innerHTML =" ** Please select the your Date of Birth field";
        return false;
    }
    
 



    if(cname == ""){
        document.getElementById('cname-valid').innerHTML =" ** Please fill the username field";
        return false;
    }
    if((cname.length <= 2) || (cname.length > 20)) {
        document.getElementById('cname-valid').innerHTML =" ** Username lenght must be between 2 and 20";
        return false;	
    }
    if(!isNaN(cname)){
        document.getElementById('cname-valid').innerHTML =" ** only characters are allowed";
        return false;
    }


    if(address == ""){
        document.getElementById('add-valid').innerHTML =" ** Please fill the username field";
        return false;
    }
    if((address.length <= 5) || (address.length > 20)) {
        document.getElementById('add-valid').innerHTML =" ** Username lenght must be between 2 and 20";
        return false;	
    }
    

    let create = document.querySelector( 
        'input[name="create"]:checked'); 
      
    if(create != null) { 
       
    } 
    else { 
    
            return false;
    } 


    if(phone == ""){
        document.getElementById('phone-valid').innerHTML =" ** Please fill the mobile NUmber field";
        return false;
    }
    if(isNaN(phone)){
        document.getElementById('phone-valid').innerHTML =" ** user must write digits only not characters";
        return false;
    }
    if(phone.length!=10){
        document.getElementById('phone-valid').innerHTML =" ** Mobile Number must be 10 digits only";
        return false;
    }



    if(email == ""){
        document.getElementById('email-valid').innerHTML =" ** Please fill the email idx` field";
        return false;
    }
    if(email.indexOf('@') <= 0 ){
        document.getElementById('email-valid').innerHTML =" ** @ Invalid Position";
        return false;
    }

    if((email.charAt(email.length-4)!='.') && (email.charAt(emails.length-3)!='.')){
        document.getElementById('email-valid').innerHTML =" ** . Invalid Position";
        return false;
    }

    return true;
}





//______________________________________________________________________________


//______________________________________________________________________________


function showData() {

    var employeeList;
    if (localStorage.getItem("employeeList") == null) {
        employeeList = [];
    }
    else {
        employeeList = JSON.parse(localStorage.getItem("employeeList"))
    }

    var html = "";

    employeeList.forEach(function (element, index) {

        console.log(index);
        // html += "<tr>";
        // html += "<td>" + index + "</td>";
        html += "<td>" + element.fname + "</td>";
        html += "<td>" + element.lname + "</td>";
        html += "<td>" + element.gender + "</td>";
        html += "<td>" + element.dob + "</td>";
        html += "<td>" + element.cname + "</td>";
        html += "<td>" + element.address + "</td>";
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.phone + "</td>";
        // html += "<td>" + element.inputDate + "</td>";
        html += '<td><a onClick="editData('+ index +')" class="badge bg-success text-decoration-none ">Edit <i class="fas fa-edit p-1"></i></a><a onClick="deleteData('+ index +')" class="badge bg-danger text-decoration-none">Delete <i class="fa-sharp fa-solid fa-trash p-1"></i></a></td>';
        html += "</tr>";
    });

    document.querySelector("#employeeList tbody").innerHTML = html;
}


document.onload = showData();



function addFormData(){


    if (validation()== true) {

    let getSelectedValue;
    if(document.getElementById('male').checked) {
         getSelectedValue = document.getElementById('male').value;
      }else if(document.getElementById('female').checked) {
        getSelectedValue = document.getElementById('female').value;
      }
    
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let gender = getSelectedValue;
    let dob = document.getElementById('dob').value;
    let cname = document.getElementById('cname').value;
    let address = document.getElementById('address').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;

    var employeeList;


    if (localStorage.getItem("employeeList") == null) {
        employeeList = [];
    }
    else{
        employeeList = JSON.parse(localStorage.getItem("employeeList"));
    }

    employeeList.push({
        fname : fname ,
        lname : lname,
        gender : gender , 
        dob : dob,
        cname : cname,
        address : address,
        email : email,
        phone : phone
    });

    localStorage.setItem("employeeList", JSON.stringify(employeeList));

    showData();
    resetForm();

    }

}





function deleteData(td) {

    var employeeList;

    if (localStorage.getItem("employeeList") == null) {
        employeeList = [];
    }
    else{
        employeeList = JSON.parse(localStorage.getItem("employeeList"));
    }

    employeeList.splice(td,1);

    localStorage.setItem("employeeList", JSON.stringify(employeeList));
    showData();



    // if (confirm('Are you sure to delete this record ?')) {
    //     row = td.parentElement.parentElement;
    //     document.getElementById("employeeList").deleteRow(row.rowIndex);
    //     resetForm();
    // }
}


function editData(index) {


    document.getElementById("Submit").style.display="none";
    document.getElementById("Update").style.display="block";

    var employeeList;

    if (localStorage.getItem("employeeList") == null) {
        employeeList = [];
    }
    else{
        employeeList = JSON.parse(localStorage.getItem("employeeList"));
    }

   
    let genSelect;
    if(document.getElementById('male').checked) {
        document.getElementById('male').checked = true;
        genSelect = document.getElementById('male').value;
      }else if(document.getElementById('female').checked) {
        document.getElementById('female').checked = true;
        genSelect = document.getElementById('female').value;
      }
    




    document.getElementById("fname").value = employeeList[index].fname;
    document.getElementById("lname").value = employeeList[index].lname;
    // document.getElementsByName("gender").value = employeeList[index].gender;
    genSelect = employeeList[index].gender;
    document.getElementById("dob").value = employeeList[index].dob;
    document.getElementById("cname").value = employeeList[index].cname;
    document.getElementById("address").value = employeeList[index].address;
    document.getElementById("email").value = employeeList[index].email;
     document.getElementById("phone").value = employeeList[index].phone;

    
    

  document.querySelector("#Update").onclick = function(){
    if(validation() == true){

        let getSelectedValue;
    if(document.getElementById('male').checked) {
         getSelectedValue = document.getElementById('male').value;
      }else if(document.getElementById('female').checked) {
        getSelectedValue = document.getElementById('female').value;
      }
    

        employeeList[index].fname =  document.getElementById("fname").value;
        employeeList[index].lname = document.getElementById("lname").value;
        employeeList[index].gender = getSelectedValue;
        employeeList[index].dob = document.getElementById("dob").value;
        employeeList[index].cname = document.getElementById("cname").value;
        employeeList[index].address = document.getElementById("address").value;
        employeeList[index].email = document.getElementById("email").value ;
        employeeList[index].phone = document.getElementById("phone").value;

        localStorage.setItem("employeeList", JSON.stringify(employeeList));

        showData();
        resetForm();


        document.getElementById("Submit").style.display="block";
        document.getElementById("Update").style.display="none";
    }
  }
}


