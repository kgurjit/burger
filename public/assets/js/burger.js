$(document).ready(function(){
	$(".form-link").on("click", function(e){
		var link = $(this);
		$(link.data('frm')).submit();
		e.preventDefault();
	});

	$(".add-form").submit(function(){
		if($.trim($("#burgerName").val()) === '') {
			alert("Burger name can't be empty");
			return false;
		}
		return true;
	});
});