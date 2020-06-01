// https://learn.jquery.com/using-jquery-core/document-ready/
$(function() {
    // window, document
    // let masthead = document.getElementById('masthead');
    // let masthead = document.querySelector('#masthead');
    let masthead = $('#masthead');
    masthead.find('h1 > a').text('New Title');

    $('.social-icons').fadeOut(2000, function () {
        // alert('Element completely hidden.');
    });

    $('.social-icons a').on('click', function(ev) {
        ev.preventDefault();
    });

    // let $contactForm = $('#contact-form');
    $('#contact-form').on('submit', function(event) {
        event.preventDefault();
       
        let $form = $(this),
            $alert = $('.alert.alert-danger'),
            $userName = $form.find('input[name="full_name"]'),
            email = $form.children('input[type="email"]').val();

        if ($userName.val() === '') {
            $alert.text('Your name is required.').removeClass('d-none');
            return false;
        }

        $.ajax({
            url: $form.prop('action'),
            method: 'post',
            data: $form.serializeArray(),
            dataType: 'json'
        }).done(function (resp) {
            if (resp.status === 'success') {
                $form.fadeOut(2000, function () {
                    alert('Your message has been received. Thank you!');
                });
            } else {
                $alert.text('Something went completely wrong.').removeClass('d-none');
            }
        });
        // .fail(function () {})
        // .always(function () {});

        return false;
    });
});
