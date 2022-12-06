let form=document.querySelector('form');
form.addEventListener('submit', checke);
let env=document.getElementById('en');
let elv=document.getElementById('el');
let emv=document.getElementById('em');
let eav=document.getElementById('ea');
let ecv=document.getElementById('ec');

function fillcase(){
  let empl=JSON.parse(localStorage.getItem('companies'));
  empl.map((a, i)=>{
  ecv.innerHTML+=`<option value="${a.compa_name}">${a.compa_name}</option>`
  })
}
function checke(e){
  e.preventDefault();
  let checkev=true;
  if (env.value==''){
    env.classList.add('is-invalid');
    env.classList.remove('is-valid');
    checkev=false;
  }else {
    env.classList.add('is-valid');
    env.classList.remove('is-invalid');
  }
  if (elv.value==''){
    elv.classList.add('is-invalid');
    elv.classList.remove('is-valid');
    checkev=false;
  }else {
    elv.classList.add('is-valid');
    elv.classList.remove('is-invalid');
  }
  if (emv.value==''||(emv.value!='')&&(emv.value.match('/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'))){
    emv.classList.add('is-invalid');
    emv.classList.remove('is-valid');
    checkev=false;
  }else {
    emv.classList.add('is-valid');
    emv.classList.remove('is-invalid');
  }
  if (eav.value==''){
    eav.classList.add('is-invalid');
    eav.classList.remove('is-valid');
    checkev=false;
  }else {
    eav.classList.add('is-valid');
    eav.classList.remove('is-invalid');
  }
  let employee={
    employee_name:env.value,
    employee_lName:elv.value,
    employee_address:eav.value,
    employee_email:emv.value,
    employee_company:ecv.value
  }
  if (checkev){
    let arr_empl=JSON.parse(localStorage.getItem('employees'))||[];
    arr_empl.push(employee);
    localStorage.setItem('employees', JSON.stringify(arr_empl));
    window.location.href='Employees_list.html'
  }  
}