var led = 0
var gpio = 35
$('#test').click(function () {
    led = led ^ 1 // XOR
    let data = { led, gpio }
    $.ajax({
        url: '/led',
        method: 'POST',
        data: data,
        success: function (data) {
            console.log(data)
        },
        error: function (data) {
            console.log(data)
        }
    })
})