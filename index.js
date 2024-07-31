
const modal= document.getElementById('modal')
const closeBtn =document.getElementById('cross-sign')
const consentForm = document.getElementById('consent-form')
const modalText =document.getElementById('modal-txt')
const decline = document.getElementById('decline-btn')
const modalChoiceBtns = document.getElementById('modal-choice-btns')
decline.addEventListener( 'mouseenter', function(){
  modalChoiceBtns.classList.toggle('reverse')
} )
setTimeout(function(){
modal.style.display='inline';
},1500)


closeBtn.addEventListener('click', function(){
    modal.style.display='none';
})


consentForm.addEventListener('submit', function(e){
    e.preventDefault()
    const  consentFormData = new FormData(consentForm)
    const name = consentFormData.get('userName')
    const email = consentFormData.get('userEmail')
     console.log(name,email)
      modalText.innerHTML = `
    <div class="modal-inner-loading">
     <img src="img/loading.svg" class="loading">
      <p id="uploadText">
          Uploading your data to the dark web...
      </p>
    </div>`
    setTimeout(function(){
           document.getElementById('uploadText').innerText="Making the sale...";
          },1500)
   
    setTimeout(function(){
          document.getElementById('modal-inner').innerHTML = `
          <h2>Thanks <span class="modal-name-display">${name}</span> you sucker! </h2>
          <p>We just sold the rights to your eternal soul.</p>
          <div class="idiot-gif">
          <img src="img/pirate.gif">
          </div>`
           
     closeBtn.disabled= false    
     }, 3000)


    })
    
 