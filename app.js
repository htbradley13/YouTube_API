$(function(){
	$("#search-term").submit(function(event){
		event.preventDefault();
		var searchTerm = $("#query").val();
		getRequest(searchTerm);
	});
});

function getRequest(searchTerm){
	var params = {
		part: "snippet",
		key: "AIzaSyAQDoOJWWH3haXx-jKkZW6OmN-9SUWvbFI",
		q: searchTerm,
		//r: "json"
	};
	url = "https://www.googleapis.com/youtube/v3/search";

	$.getJSON(url, params, function(data){
		showResults(data.items);
	});
}
 
function showResults(results){
	var html = " ";
	$.each(results, function(index,value){
		var videoID = value.id.videoId;
		html += '<a href="https://www.youtube.com/watch?v=' + videoID + '"><img src="' + value.snippet.thumbnails.default.url + '"/></a><br>';
		console.log(value.Title);
	});
	$("#search-results").html(html);
}

