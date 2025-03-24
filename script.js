function showContent(){
    let game = document.getElementById("favoriteGame").value;
    let console = document.getElementById("favoriteConsole").value;
    let style = document.getElementById("favoriteStyle").value;
    document.getElementById("output").textContent = `Your favorite game is ${game}. 
    Your favorite console is ${console}. 
    Finally, your favorite style if game is ${style}.`
}