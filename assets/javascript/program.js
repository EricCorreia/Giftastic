$(document).ready(function(){

	$('button').on('click', function(){

		var animal = $(this).data('name');
		var queryURL = 'https://api.giphy.com/v1/gifs/serach?q=';

		$.ajax({
			url: queryURL;
			method: 'get'
		});
			.done(function(response){
				
				console.log(response);
				var results = response.data;
				for (var i = 0; i < results.length; i++){

					var animalDiv = $('<div>');
					var p = $('<p>');
					p.text(results[i].rating);
					var animalImage = $('<img>');
					animalImage.addClass('animalImg');
					animalImage.attr('src', results[i].images.fixed_height.url):
					animalImage.attr('data-still', results[i].images.fixed_height_still.url);
					animalImage.attr('data-animate', results[i].images.fixed_height.url);
					.attr('data-state', 'still');
					animalDiv.append(p);
					animalDiv.append(animalImage);
					animalDiv.prependTo($('#gifs'));
				};

				$('.animalImg').on('click', function(){

					var state = $(this).attr('data-state');
					console.log(this);

					if (state == 'still'){
						$(this).attr('src', $(this).data('animate'));
						$(this).attr('data-state', 'animate');
					}

					else {
						$(this).attr('src', $(this).data('still'));
						$(this).attr('data-state', 'still');
					}
				});
			});
	});




})