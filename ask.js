// GLOBAL VARIABLES
	// Isolate the targeted div, define the class, and have fun with variables.
const answerBox = document.getElementById("answerer");
const beyond = Infinity + 1;
const toyStory = (2*Infinity) + beyond;
// require('classList.js');
const classList = ["Bowie","Steve","Lynn","JoEllen","Heather E","Anna","Sully","Mike G","Peri","Madeline","Kris","Jordan","Trevor","Phil","Todd","Amanda","Erich","Paul","Soledad","Rick","Tod","Laura","Jason Brezina","Kayla","Sara","Gretchen","Heather N","Elizabeth","Lisa","Nicole W","Nicole H","Sara","Eve","Jennifer","Amber","Mike C","Nate","Brian","Bradley","Melissa","James","Anita","Rachael","Jessa","PB","Molly","Matthew","Dane","Tiffany","Alex","Luca",];
let answerer = classList.slice();
let alreadyAsked = [];

console.log(classList.sort()); //output: [ 'foo', 'bar', 3 ]

// Function which chooses the name displayed in the visible button.
function changeAnswerer() {
		let randomized = Math.floor(Math.random()*answerer.length);
		let asked = answerer.splice(randomized, 1);
		alreadyAsked.push(asked[0]);
		answerBox.innerHTML = "<p>"+asked[0]+"<p>";
		console.log(asked[0]);
};

// Click handler which triggers the changeAnswerer function: when you click a name, it gives you a new unchosen name.
answerBox.addEventListener("click", function(){
	// If the length of alreadyAsked is the same as the classList: start over.
	if (answerer.length === 0){
		answerer = classList.slice();
		alreadyAsked = [];
		changeAnswerer();
		console.log(classList);	
			
	}
	// Otherwise, we're going to:
		// choose a random element
		// remove the element from the array
		// push it to alreadyAsked
		// and present it on the visible page.
	else {
		changeAnswerer();
	}
});
