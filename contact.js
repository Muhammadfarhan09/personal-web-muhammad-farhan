
function submitForm() {
    let name = document.getElementById('name').value
    console.log(name)
    let email = document.getElementById('email').value
    console.log(email)
    let phoneNumber = document.getElementById('phoneNumber').value
    console.log(phoneNumber)
    let subject = document.getElementById('subject').value
    console.log(subject)
    let massage = document.getElementById('massage').value
    console.log(massage)

    if( name == '' ) {
        alert("Isi Nama Terlebih Dahulu")
    }
    else if( email == '' ) {
        alert("Isi Email Terlebih Dahulu")
    }
    else if( phoneNumber =='' ) {
        alert("Isi Nomer Terlebih Dahulu")
    }
    else if( massage == '' ) {
        alert("Isi Pesan Terlebih Dahulu")
    }

    let reiceiverMail = 'm.farhan8417@gmail.com'    
    let a = document.createElement('a');
    
    a.href = 'mailto:' + reiceiverMail + '?subject=' + subject + '&body=Halo nama saya ' + name + ', ' + massage

    a.click()
}
