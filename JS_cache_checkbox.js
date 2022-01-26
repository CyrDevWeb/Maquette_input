//fonction pour les bouton checkbox visible, non visible au click

function UncheckCaseParfait() {
    if (document.getElementById("input_parfait").checked = true) {
        document.getElementById("input_bien").checked = false;
        document.getElementById("input_insuffisant").checked = false;
    }
}

function UncheckCaseBien() {
    if (document.getElementById("input_bien").checked = true) {
        document.getElementById("input_parfait").checked = false;
        document.getElementById("input_insuffisant").checked = false;
    }
}

function UncheckCaseInsatisfied() {
    if (document.getElementById("input_insuffisant").checked = true) {
        document.getElementById("input_parfait").checked = false;
        document.getElementById("input_bien").checked = false;
    }
}

//fonction pour les bouton radio visible, non visible au click
function fonction_avis_input(){
    var avis1 = document.getElementById("avis1");
    var avis2 = document.getElementById("avis2");
    var avis3 = document.getElementById("avis3");
      if (avis1.checked === checked){
        avis2.checked = false;
        avis3.checked = false;
     }  
    if(avis2.checked === checked){
      avis1.checked = false;
      avis3.checked = false;
    }
    else{
      avis2.checked =  false;  
    }
  }