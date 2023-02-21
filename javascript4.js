let favouriteFilms = [
	{
		name: 'Interstallar',
		mainActor: 'Matthew McConaughey',
		duration: 169,
		genre: 'Adventure, Action'
	},
	{
		name: 'The Truman Show',
		mainActor: 'Jim Carrey',
		duration: 103,
		genre: 'Comedy, Drama'
	}, 
	{
		name: 'Se7en',
		mainActor: 'Brad Pitt, Morgan Freeman',
		duration: 127,
		genre: 'Crime, Drama, Thriller'
	},
	{
		name: 'The Pursuit of Happyness',
		mainActor: 'Whill Smith',
		duration: 117,
		genre: 'Biography, Drama'
	}
	]
	let s = 0;
	for (let i = 0; i < favouriteFilms.length; i++) {
		s += favouriteFilms[i]['duration']
	}
	avg = s / favouriteFilms.length;
	for (let i = 0; i < favouriteFilms.length; i++) {
		document.write("<h5>Film: " + favouriteFilms[i]["name"] + "</h5>");
		document.write("<h5>Actor: " + favouriteFilms[i]["mainActor"] + "</h5>");
		document.write("<h5>Genre: " + favouriteFilms[i]["genre"] + "</h5>");
		document.writeln("")
	}
	document.write("<h5>Average duration: " + avg + " minutes</h5>")

	function re(item){
		return console.log(item);
	}
	re(favouriteFilms); 

if(confirm("Could you please remove me from the blacklist?")){
	alert("Thank you teacher!");
}else{
	alert(":(")
}

	

