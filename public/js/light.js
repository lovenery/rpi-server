$('#light').click(function () {
  $.ajax({
    url: '/light',
    method: 'POST',
    success: function (data) {
      console.log('light: ' + data)
      $('#light_text').text(data)
    },
    error: function (data) {
      console.log(data)
    }
  })
})
