function sonic_init () {
    $.ajax({
        url: '/sonic',
        method: 'POST',
        beforeSend: function () {
            $('#sonic_text').text('...')
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
function temperature_init () {
    $.ajax({
        url: '/temperature',
        method: 'POST',
        beforeSend: function () {
            $('#temperature_text').text('...')
        },
        success: function (data) {
            console.log(data)
        },
        error: function (data) {
            console.log(data)
        }
    }).then(function (data) {
        $('#temperature_text').text(data)
    })
}
$('#sonic').click(function () {
    sonic_init()
})
$('#temperature').click(function () {
    temperature_init()
})
function sensor_init () {
    sonic_init()
    temperature_init()
}