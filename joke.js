function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

async function fetchJokes () {
  const loader = document.getElementById("loader");
  //console.log(loader);
  loader.classList.remove("d-none");
  try{
    const response = await fetch ("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    
    document.getElementById("setup").textContent = data.setup;
    document.getElementById("punchline").textContent = "loading...";
    
    setTimeout(function() {document.getElementById("punchline").textContent = data.punchline;}, 3000);
    
  } catch (error) {
    console.log(error)
  } finally {
    loader.classList.add("d-none");
  }
}