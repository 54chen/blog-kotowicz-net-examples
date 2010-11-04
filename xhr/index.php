<?php setcookie('secret','1'); ?>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>XHR</title>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.4.3.min.js"></script>
<script type="text/javascript">
$(function() {
    $('form').submit(function() {
        $.ajax({
            type: "post",
            dataType: 'html',
            url: $('#address').val(),
            success: function() {
                $('#result').val(arguments[0]);
                $('body').append(arguments[0]);
            },
            error: function(xhr, status, error) {
                alert('!', status);
                console.log(xhr,error);
            }
         });
        return false;
    })
});
</script>
</head>
<body>
<form onsubmit="return false"><input id="address" /><button type="submit" id="go">Go!</button></form>
<textarea rows="20" cols="80" id="result"></textarea>
</body>
</html>