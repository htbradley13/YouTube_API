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
	url = "https://www.googleapis.com";

	$.getJSON(url, params, function(data){
		showResults(data.Search);
	});
}

function showResults(results){
	var html = " ";
	$.each(results, function(index,value){
		html += "<p>" + value.Title + '</p>';
		console.log(value.Title);
	});
	$("#search-results").html(html);
}