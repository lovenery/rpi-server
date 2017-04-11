$('.move').click(function () {
  // console.log(this.value, $(this).val())
  let direction = this.value
  let data = { direction }
  $.ajax({
    url: '/move',
    method: 'POST',
    data: data,
    success: function (data) {
      console.log(data)
    },
    error: function (data) {
      console.log(data)
    }
  })
});
