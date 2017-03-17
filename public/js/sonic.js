function sonic_init () {
    $.ajax({
        url: '/sonic',
        method: 'POST',
        beforeSend: function () {
            $('#sonic_text').text('Loading')
        },
        success: function (data) {
            console.log(data)
        },
        error: function (data) {
            console.log(data)
        }
    }).then(function (data) {
        $('#sonic_text').text(data)
    })
}

//function sonic () {
    $('#sonic').click(function () {
        sonic_init()
    })
//}
