images = [
'achievement.png',
'businessman-success.png',
'trophy.png',
'woman-with-medal.png',
'succes-team.png',
'achievement2.png',
'medal-with-star.png'
];
var i=0;
var container = document.getElementById("container")
var items10 = setInterval(function(){
	j = images[i%images.length];
	container.insertAdjacentHTML('beforeend', '<div class="circ"><img src="images/' + j + '"> <div class="num"></div></div>');
	i++;
	if(i==10)clearInterval(items10);
}, 2000);