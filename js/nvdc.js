$(function() {
	
});

$("input").change(function() {
	var filename = $(this).val();
	filename = filename.substr(filename.lastIndexOf("/")+1);
	filename = filename.substr(filename.lastIndexOf("\\")+1);
	$("label").html(filename);
});