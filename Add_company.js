let form=document.querySelector('form');
form.addEventListener('submit',checkc);
let cnv=document.getElementById('cn');
let cav=document.getElementById('ca');
let cmv=document.getElementById('cm');

function checkc(e){
e.preventDefault();
let checkcv=true;
if (cnv.value==''){
  cnv.classList.add('is-invalid');
  cnv.classList.remove('is-valid');
  checkcv=false;
}else {
  cnv.classList.add('is-valid');
  cnv.classList.remove('is-invalid');
}
if (cav.value==''){
  cav.classList.add('is-invalid');
  cav.classList.remove('is-valid');
  checkcv=false;
}else {
  cav.classList.add('is-valid');
  cav.classList.remove('is-invalid');
}
if (cmv.value=='' ||(cmv.value!='')&&(cmv.value.match('/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'))){
  cmv.classList.add('is-invalid');
  cmv.classList.remove('is-valid');
  checkcv=false;
}else {
  cmv.classList.add('is-valid');
  cmv.classList.remove('is-invalid');
}

let company={
compa_name:cnv.value,
compa_add:cav.value,
compa_email:cmv.value
}
if (checkcv){
  let compa_arr=JSON.parse(localStorage.getItem('companies'))||[];
  compa_arr.push(company);
  localStorage.setItem('companies', JSON.stringify(compa_arr));
  window.location.href='Companies_list.html'
}
}