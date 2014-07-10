$(document).ready(function(){
	$('.button').click(function(){
		$('.items').append($('<li>', {
			text: $('.texts').val()
	}))
		$('form').on('click', function(event){
			event.preventDefault();
			$('.texts').val('');
		})
	})

	$('ul').on('click', 'li', function(){
		$(this).toggleClass('complete');
	})
	$('div').on('click', '.delete', function(){
		$('li').hide();
	});
});