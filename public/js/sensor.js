function sonic_init () {
    $.ajax({
        url: '/sonic',
        method: 'POST',
        beforeSend: function () {
            $('#sonic_text').text('...')
        }
    }).then(function (data) {
        console.log(data)
        $('#sonic_text').text(parseInt(data).toFixed(1))
    })
}
function temperature_init () {
    $.ajax({
        url: '/temperature',
        method: 'POST',
        beforeSend: function () {
            $('#temperature_text').text('...')
        }
    }).then(function (data) {
        console.log(data)
        $('#temperature_text').text(parseInt(data).toFixed(1))
    })
}
function humidity_init () {
    $.ajax({
        url: '/humidity',
        method: 'POST',
        beforeSend: function () {
            $('#humidity_text').text('...')
        }
    }).then(function (data) {
        console.log(data)
        $('#humidity_text').text(parseInt(data).toFixed(1))
    })
}
$('#sonic').click(function () {
    sonic_init()
})
$('#temperature').click(function () {
    temperature_init()
})
$('#humidity').click(function () {
    humidity_init()
})
function sensor_init () {
    sonic_init()
    temperature_init()
    humidity_init()
}