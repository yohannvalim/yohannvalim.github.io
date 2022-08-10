$(document).ready(() => {
    $('section').load('pages/home.html');
    $('#menuHome').addClass('active');

    function clearClass() {
        $('#menuHome').removeClass('active')
        $('#menuAbout').removeClass('active')
        $('#menuProcedures').removeClass('active')
        $('#menuContact').removeClass('active')
    }

    $('#menuHome').click(() => {
        clearClass();
        $('#menuHome').addClass('active');
        $('section').load('pages/home.html');
    })

    $('#menuAbout').click(() => {
        clearClass();
        $('#menuAbout').addClass('active');
        $('section').load('pages/about.html');
    })

    $('#menuProcedures').click(() => {
        clearClass();
        $('#menuProcedures').addClass('active');
        $('section').load('pages/procedures.html');
    })

    $('#menuContact').click(() => {
        clearClass();
        $('#menuContact').addClass('active');
        $('section').load('pages/contact.html');
    })

    $('#agende').click(() => {
        clearClass();
        $('section').load('pages/appointment.html', () => {
            $('#confirm').click(() =>{
                alert('Obrigado!');
                $('section').load('pages/home.html');
                $('#menuHome').addClass('active');
            })
        });
    })

    

    
})

