let h2 = document.querySelector("h2");
h2.addEventListener("click",()=> {
  h2.textContent = "This Is A Mandatory Field";
  h2.style.color = "red";
  h2.style.fontsize = "20px"
});

class FormValidate {
  constructor(myForm, name, email, password) {
    this.myForm = myForm;
    this.name = name;
    this.email = email;
    this.password = password;
  }
  formContent = () => {
    document.getElementById(this.myForm).addEventListener("submit", this.dealSubmit)
  }
  dealSubmit = (e) => {
    let nN = document.getElementById(this.name).value.trim();
    let eE = document.getElementById(this.email).value.trim();
    let pP = document.getElementById(this.password).value.trim();
    let isOk = true;
    if(nN === "" || eE === "" || pP === "") {
      isOk = false;
    } if(isOk === false) {
      e.preventDefault()
      alert("Enter All the fields");
      return;
    }
  }
}
const vForm = new FormValidate ("myForm","name","email","password");
vForm.formContent();