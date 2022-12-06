let bdcv=document.getElementById('bdc');
function fillcl(){ 
  let ar=JSON.parse(localStorage.getItem('companies')); 
   ar.map((r, i)=>{
    bdcv.innerHTML+=`
    <tr>
    <td scope='col'>${i+1}</td>
    <td scope='col'>${r.compa_name}</td>
    <td scope='col'>${r.compa_add}</td>
    <td scope='col'>${r.compa_email}</td>
    <td scope='col'>${rech(r.compa_name)}</td>
    <td scope="col">
    <button class="btn btn-success" onclick="openModal(${i})" data-bs-toggle="modal" data-bs-target="#modalf">Modify</button>
    <button class="btn btn-danger" onclick="deletion(${i})">Delete</button>
    </td>
    </tr>
    `;
  })      
    function rech(ch){ 
    let emp=JSON.parse(localStorage.getItem('employees'))||[]; 
    let emp2=[];
    let j=0;
    for (let i=0; i<emp.length; i++){
      if (emp[i].employee_company==ch){
        emp2[j]=emp[i]. employee_lName;
        j++;}  
    }
    ch2=JSON.stringify(emp2);
    return (ch2);
    }
}
function deletion(v) {
  let ct = JSON.parse(localStorage.getItem('companies')) || [];
  ct.splice(v, 1);
  localStorage.setItem('companies', JSON.stringify(ct));
  window.location.reload();
}
let cnv = document.getElementById('cn');
let cav = document.getElementById('ca');
let cmv = document.getElementById('cm');
let u = null;
function openModal(v) {  
  let ct = JSON.parse(localStorage.getItem('companies')) || [];
  let ctv= ct[v];
  cnv.value = ctv.compa_name;
  cav.value = ctv.compa_add;
  cmv.value = ctv.compa_email;  
  u = v;
}
let bv=document.getElementById('b');
bv.addEventListener('click', smc);
function smc(e){
  e.preventDefault();
  let smcv=true;
  if (cnv.value==''){
    cnv.classList.add('is-invalid');
    cnv.classList.remove('is-valid');
    smcv=false;
  }else {
    cnv.classList.add('is-valid');
    cnv.classList.remove('is-invalid');
  }
  if (cav.value==''){
    cav.classList.add('is-invalid');
    cav.classList.remove('is-valid');
    smcv=false;
  }else {
    cav.classList.add('is-valid');
    cav.classList.remove('is-invalid');
  }
  if (cmv.value=='' ||!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(cmv.value)){
    cmv.classList.add('is-invalid');
    cmv.classList.remove('is-valid');
    smcv=false;
  }else {
    cmv.classList.add('is-valid');
    cmv.classList.remove('is-invalid');
  }
  let cmm={
    cmm1:cnv.value,
    cmm2:cav.value,
    cmm3:cmv.value      
  }
  if (smcv){
    let ct = JSON.parse(localStorage.getItem('companies')) || [];
    ct.splice(u, 1, cmm);
    localStorage.setItem('companies', JSON.stringify(ct));
    window.location.reload();
  }
}
