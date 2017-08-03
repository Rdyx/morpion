//On initialise le nom des joueuers ainsi que le nombre de parties qu'on veut jouer et le score
var player1 = prompt("Nom du joueur 1");
var player2 = prompt("Nom du joueur2");
var nbParties = prompt("Combien de parties souhaitez-vous jouer ?");
var scoreP1 = 0;
var scoreP2 = 0;
//On défini ce qui va apparaître dans les cases
var play1 = '<img src="http://www.i2symbol.com/images/myspace/symbols/heavy_multiplication_x_u2716_icon_256x256.png" alt="x">';
var play2 = '<img src="http://odellya.com/wp-content/uploads/2015/03/SEO-29.png" alt="o">';

//On fait une fonction qui boucle tant que l'utilisateur n'a pas entré un chiffre dans nbParties
function parties() {
    while (true) {
        if (isNaN(nbParties) || nbParties == false) {
            nbParties = prompt("Il faut mettre un chiffre ! Combien de parties souhaitez-vous jouer ?")
        } else {
            return false;
        }
    }
};
//On call la fonction
parties();

//On met le nom du joueur qui commence
$("#player").html(player1);
//On affiche les noms et les scores
$("#scores").html(scoreP1 + " " + player1 + " - " + player2 + " " + scoreP2);



//On initialise une sorte de boucle avec un var = 0 qui sera incrémentée pour calculer et s'arrêter une fois le nb de parties atteint
var h = 0;

//Conditions de victoire
function verif(a, b, c) {
    //Tant qu'on a pas atteint le nombre de parties demandé, on vérifie les conditions de victoire
    if (h < nbParties) {
        //Si a == b et que a == c alors b == c
        if (a == b && a == c) {
            //Si a est égal à play1 alors player1 gagne
            if (a == play1) {
                //On reset le nombre de coups
                i = 0;
                //On incrément le nombre de parties jouées
                h++
                //On reset les cases
                $(".caseGo").html("");
                //On met à jour les scores
                $("#scores").html(++scoreP1 + " " + player1 + " - " + player2 + " " + scoreP2);
                //On annonce le vainqueur
                alert(player1 + " a gagné !")
            } //Si a est égal à play2 alors player2 gagne
            else if (a == play2) {
                i = 0;
                h++
                alert(player2 + " a gagné !");
                $(".caseGo").html("");
                $("#scores").html(scoreP1 + " " + player1 + " - " + player2 + " " + ++scoreP2);
            }
        }
    } //Si on atteint le nombre de parties demandées
    else if (h == nbParties) {
        //Si joueur 1 a un meilleur score
        if (scoreP1 > scoreP2) {
            //On annonce le gagnant et son score
            alert(player1 + " gagne la partie avec un score de " + scoreP1 + " ! Vous reprendrez bien un p'tit coup ?");
            //On demande le nombre de parties qu'on veut rejouer
            nbParties = prompt("Combien de parties souhaitez-vous jouer ?");
            //On relance la function pour être sûr d'avoir un chiffre
            parties();
        } //Si joueur 2 a un meilleur score
        else if (scoreP1 < scoreP2) {
            alert(player2 + " gagne la partie avec un score de " + scoreP2 + " ! Un p'tit whisky pour fêter ça ?");
            nbParties = prompt("Combien de parties souhaitez-vous jouer ?");
            parties();
        } //Si joueur 1 et joueur 2 on le même score
        else if (scoreP1 == scoreP2) {
            alert("Demn ! " + player1 + " et " + player2 + " n'ont pas réussi à être départagés ! Allez, cul sec pour chacun !");
            nbParties = prompt("Combien de parties souhaitez-vous jouer ?");
            parties();
        }
        //Reset des cases
        $(".caseGo").html("");
        //reset le compteur de parties, compteur de coups et scores
        h = i = scoreP1 = scoreP2 = 0;;
        //Reset du compteur de coups
        $("#scores").html(scoreP1 + " " + player1 + " - " + player2 + " " + scoreP2);
    }

};

//On initialise "i" en dehors de la fonction car sinon il sera remis à 0 à chaque clic
var i = 0;
//Et on incrémente "i" à chaque clique dans une case en se servant du modulo pour savoir qui doit jouer (tour pair/impair)
$(".caseGo").on("click", function () {
    //On défini si la case est vide et si player1 ou player2 va jouer
    if ($(this).html() == "") {
        //Si i est un chiffre pair, alors player1 joue
        if (i % 2 === 0) {
            //On affiche le pseudo du joueur
            $("#player").html(player1);
            //On injecte la valeur de play1 dans la case (de classe .caseGo)
            $(this).html(play1);
        } //Si i est un chiffre impair, alors player2 joue
        else {
            $("#player").html(player2);
            $(this).html(play2);
        };
        //On incrément le nombre de coups à chaque clique sur une case
        return i++
    }
});

//On vérifie les possibilités à chaque clic et on les retourne dans la fonction qui va déterminer si une correspond à une condition de win
$(".caseGo").on("click", function () {
    //top
    return verif($("#00").html(), $("#01").html(), $("#02").html())
        //right
        || verif($("#02").html(), $("#12").html(), $("#22").html())
        //bottom
        || verif($("#20").html(), $("#21").html(), $("#22").html())
        //left
        || verif($("#00").html(), $("#10").html(), $("#20").html())
        //top-left > bottom-right
        || verif($("#00").html(), $("#11").html(), $("#22").html())
        //top-mid > bottom-mid
        || verif($("#01").html(), $("#11").html(), $("#21").html())
        //top-right > bottom-left
        || verif($("#02").html(), $("#11").html(), $("#20").html())
        //mid-left > mid-right
        || verif($("#10").html(), $("#11").html(), $("#12").html());
});

//Un bouton reset useless pour les feignants 
$("#resetGame").on("click", function () {
    //reset l'intérieur des cases
    $(".caseGo").html("");
    //reset le compteur de parties, compteur de coups et scores
    h = i = scoreP1 = scoreP2 = 0;
    //reset affichage des scores
    $("#scores").html(scoreP1 + " " + player1 + " - " + player2 + " " + scoreP2);
    //Alert JMLP
    alert("Bah alors ?");
})

//Un bouton reset pour réinitialiser toutes les données de la partie (équivalent à un reload mais sans recharger la page)
$("#resetGame2").on("click", function () {
    $(".caseGo").html("");
    //reset le compteur de parties, compteur de coups et scores
    h = i = scoreP1 = scoreP2 = 0;
    //On redemande les noms des joueurs et le nombre de parties qu'on souhaite jouer
    player1 = prompt("Nom du joueur 1");
    player2 = prompt("Nom du joueur2");
    alert("Bah alors ? On s'enjaille !");
    nbParties = prompt("Combien de parties souhaitez-vous jouer ?");
    //On relance la function pour être sûrs d'avoir un chiffre
    parties();
    //On reset les scores
    $("#scores").html(scoreP1 + " " + player1 + " - " + player2 + " " + scoreP2);
})