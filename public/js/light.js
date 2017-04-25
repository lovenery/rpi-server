$('#light').click(function () {
  $.ajax({
    url: '/light',
    method: 'POST',
    success: function (data) {
      console.log(data)
    },
    error: function (data) {
      console.log(data)
    }
  })
})
