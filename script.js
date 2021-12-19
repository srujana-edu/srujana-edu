

let teamsAndHeros=Promise.all([
  fetch('json/heroes.json').then((response) => response.json()),
  fetch('json/teams.json').then((response) => response.json()),
]);

teamsAndHeros.then(data=>{
    printTeamsAndHeroes(data[0],data[1]);
});
function printTeamsAndHeroes(heroes,teams){
  console.log("heroes",heroes);
  console.log("teams",teams);
  let teamsAndheroesContainer=document.getElementById("teamsAndheroesContainer");
  teamsAndheroesContainer.style.width = "500px";
  teamsAndheroesContainer.style.height = "1000px";
  
  teamsAndheroesContainer.style.marginLeft="500px";
  teamsAndheroesContainer.style.border = "10px solid black";
  teamsAndheroesContainer.style.textAlign = "left";
  teamsAndheroesContainer.style.fontSize="1.2rem";
  teamsAndheroesContainer.style.textAlign="center";
  
    teams.forEach(team => {
    let teamHeader=document.createElement("h2");
    teamHeader.innerText=team.teamName;
    teamHeader.style.backgroundColor="lightblue";
    teamsAndheroesContainer.append(teamHeader);
     heroes.forEach(hero => {
      if(team.teamId == hero.teamId) {
        let heroHeader = document.createElement("h4");
        heroHeader.innerText = hero.heroName;
        teamsAndheroesContainer.append(heroHeader);
      }       
     });
    
  });

}
