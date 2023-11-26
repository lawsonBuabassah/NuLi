$(document).ready(function () {
  $('.form1').on('submit', function () {

    var prompt = $('.form1 #about');
    var requestData = { prompt: prompt.val() };
    var sendBtn = $('.form1 button');

    sendBtn.text('Loading...');

    $.ajax({
      type: 'POST',
      url: '/gpt',
      data: requestData,
      success: function (data) {
        // Update the content of the response area
        $('#responseArea').text(data);
        sendBtn.text('Send');
      },
      error: function (error) {
        console.error(error);
        sendBtn.text('Send');
      },
    });

    return false;

  });
  $('.form2').on('submit', function () {
    var description = $('.form2 #description');
    var requestData = { description: description.val() };
    var generateButton = $('.form2 button'); 

    generateButton.text('Generating...');

    $.ajax({
        type: 'POST',
        url: '/generate',
        data: requestData,
        success: function (data) {
            // Assuming 'data' is the image URL
            $('#imageArea').attr('src', data);
            generateButton.text('Generate');
        },
        error: function (error) {
            console.error(error);
            generateButton.text('Generate');
        },
    });

    return false;
});

});


