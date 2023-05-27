// déclaration des variables :

let identifiant = document.getElementById('identifiant')
let password = document.getElementById('password')
let email = document.getElementById('email')
let emailConfirmation = document.getElementById('email-confirm')
let annee = document.getElementById('annee')
let age = document.getElementById('age')
let form = document.querySelector('form')

// la mise en place d'un controle d'identifiant: identifiant obligatoire.
		
function validIdentifiant(value) {
  if (value === '') {
        return 'l\'identifiant est obligatoire\n'
    }
        
    return '';
}

//Maintenant, ajoutez une vérification sur le mot de passe. 
//Il est obligatoire et doit comporter au moins 6 caractères pour des raisons de sécurité.


function validPassword(value) {
 if (value.length < 6) {
       return 'le mot de passe doit contenir au moins 6 caractères\n'
   }
           
   return '';
}

// Afin de s'assurer que l'utilisateur ne fasse pas d'erreurs, et que son e-mail puisse être utilisé pour lui envoyer une newsletter,
// il va falloir mettre en place une vérification sur les adresses e-mails saisies :
// elles doivent être identiques et remplis par l'utilisateur.


function validEmail(email, emailConfirmation) {
  if (email !== emailConfirmation) {
    return 'Les 2 adresses emails doivent être identiques\n'
    }
    
     return '';
}

//Rédigez un code regroupant tous les éléments de réponses des questions précédentes ainsi
// qu’un événement de type submit afin de valider le formulaire.


let error = '';
    
  function validIdentifiant(value) {
    if (value === '') {
      return 'l\'identifiant est obligatoire\n'
   }
        
    return '';
}
    
function validPassword(value) {
    if (value.length < 6) {
            return 'le mot de passe doit contenir au moins 6 caractères\n'
          }
    
      return '';
    }
        
function validEmail(email, emailConfirmation) {
    if (email !== emailConfirmation) {
       return 'Les 2 adresses emails doivent être identiques\n'
  }
        
    return '';
}
        
      form.addEventListener('submit', (event) => {
          error = ''
          error += validEmail(email.value, emailConfirmation.value)
          for(let count=0; count<form.elements.length; count++) {
           if (form.elements[count].name === 'identifiant') {
              error+= validIdentifiant(form.elements[count].value)
             } else if (form.elements[count].name === 'password'){
          error += validPassword(form.elements[count].value)
            }
 }
        
if (error !== '') {
      alert(error)
       event.preventDefault()
  }
})