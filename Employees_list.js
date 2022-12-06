let bdcv=document.getElementById('bdc');
function fillel(){ 
  let ar=JSON.parse(localStorage.getItem('employees'))||[]; 
   ar.map((r, i)=>{
    bdcv.innerHTML+=`
    <tr>
    <td scope='col'>${i+1}</td>
    <td scope='col'>${r.employee_name}</td>
    <td scope='col'>${r.employee_lName}</td>
    <td scope='col'>${r.employee_address}</td>
    <td scope='col'>${r.employee_email}</td>
    <td scope='col'>${r.employee_company}</td>  
    <td><button class="btn btn-success" onclick="openModal(${i})" data-bs-toggle="modal" data-bs-target="#modalf">Modify</button>
    <button class="btn btn-danger" onclick="deletion(${i})">Delete</button>
    </td>
    </tr>
    `;
  })}  
  function deletion(v) {
    let ct = JSON.parse(localStorage.getItem('employees')) || [];
    ct.splice(v, 1);
    localStorage.setItem('employees', JSON.stringify(ct));
    window.location.reload();
  }  
  let env = document.getElementById('en');
let elnv = document.getElementById('eln');
let emv = document.getElementById('em');
let eav = document.getElementById('ea');
let u = null;
function openModal(v){
  let ecv=document.getElementById('ec');
  let empl=JSON.parse(localStorage.getItem('companies'));
  empl.map((a, i)=>{
  ecv.innerHTML+=`<option value="${a.compa_name}">${a.compa_name}</option>`
  })
  let ct = JSON.parse(localStorage.getItem('employees')) || [];
  let ctv= ct[v];
  env.value = ctv.employee_name;
  elnv.value = ctv.employee_lName;
  eav.value = ctv.employee_address;
  emv.value = ctv.employee_email;
  u = v;}
let bv=document.getElementById('b');
bv.addEventListener('click', smc);
function smc(e){
  e.preventDefault();
  let smcv=true;
  if (env.value==''){
    env.classList.add('is-invalid');
    env.classList.remove('is-valid');
    smcv=false;
  }else {
    env.classList.add('is-valid');
    env.classList.remove('is-invalid');
  }
 if (elnv.value==''){
    elnv.classList.add('is-invalid');
    elnv.classList.remove('is-valid');
    smcv=false;
  }else {
    elnv.classList.add('is-valid');
    elnv.classList.remove('is-invalid');
  } 
 if (eav.value==''){
    eav.classList.add('is-invalid');
    eav.classList.remove('is-valid');
    smcv=false;
  }else {
    eav.classList.add('is-valid');
    eav.classList.remove('is-invalid');
  } 
if (emv.value=='' ||!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(cmv.value)){
    emv.classList.add('is-invalid');
    emv.classList.remove('is-valid');
    smcv=false;
  }else {
    emv.classList.add('is-valid');
    emv.classList.remove('is-invalid');
  }
  let cmm={  
    cmm1:env.value,
    cmm2:elnv.value,
    cmm3:eav.value,
    cmm4:emv.value   
  }
  if (smcv){
    let ct = JSON.parse(localStorage.getItem('employees')) || [];
    ct.splice(u, 1, cmm);
    localStorage.setItem('employees', JSON.stringify(ct));
    window.location.reload();
  }
}



