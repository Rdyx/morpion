//On charge le modal au lancement de la page
$(window).on('load', function () {
    $('#myModal').modal('show');
});

//On initialise le nom des joueuers ainsi que le nombre de parties qu'on veut jouer et le score en cliquant sur #saveInfos
var player1 = "";
var player2 = "";
var nbParties = 0;
//Au clic sur #saveInfos (dans le modal), on injecte les nouvelles valeurs des var correspondantes

var scoreP1 = 0;
var scoreP2 = 0;
//On défini ce qui va apparaître dans les cases
var play1 = '<img src="x.png" alt="x">';
var play2 = '<img src="o.png" alt="o">';

//On fait une fonction qui boucle tant que l'utilisateur n'a pas entré un chiffre dans nbParties
function parties() {
    while (isNaN(nbParties) || !nbParties || nbParties < 0) {
        nbParties = Infinity;
    }
};
//On call la fonction
parties();

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
                //On affiche le modal
                $('#modalWin').modal('show');
                //On reset le nombre de coups
                i = 0;
                //On accorde l'affichage du nom du joueur avec le compteur de coups
                $("#player").html("A " + player1 + " de jouer !");
                //On incrément le nombre de parties jouées
                h++
                //On reset les cases
                $(".caseGo").html("");
                //On met à jour les scores
                $("#scores").html("(" + ++scoreP1 + ") " + player1 + " - " + player2 + " (" + scoreP2 + ")");
                //On annonce le vainqueur
                $("#winner").html(player1 + " a gagné la manche ! Félicitations !");
                //On affiche le texte du bouton #contOrReset
                $("#contOrReset").html("Continuer");
            } //Si a est égal à play2 alors player2 gagne
            else if (a == play2) {
                $('#modalWin').modal('show');
                i = 0;
                $("#player").html("A " + player1 + " de jouer !");
                h++
                $(".caseGo").html("");
                $("#scores").html("(" + scoreP1 + ") " + player1 + " - " + player2 + " (" + ++scoreP2 + ")");
                $("#winner").html(player2 + " a gagné la manche ! Félicitations !");
                $("#contOrReset").html("Continuer");
            }
        }
    } //Si on atteint le nombre de parties demandées
    else if (h == nbParties) {
        //On affiche le modal
        $('#modalWin').modal('show');
        //Si joueur 1 a un meilleur score
        if (scoreP1 > scoreP2) {
            //On annonce le gagnant et son score et on demande combien de parties ils veulent faire en récupérant la valeur de l'input #nbParties
            $("#winner").append('<p>' + player1 + ' gagne la partie avec un score de ' + scoreP1 + ' !<br> Vous reprendrez bien un p\'tit coup ?</p>');
        } //Si joueur 2 a un meilleur score
        else if (scoreP1 < scoreP2) {
            $("#winner").append('<p>' + player2 + ' gagne la partie avec un score de ' + scoreP2 + ' !<br> Un p\'tit whisky pour fêter ça ?</p>');
        } //Si joueur 1 et joueur 2 on le même score
        else if (scoreP1 == scoreP2) {
            $("#winner").append('<p>Demn ! ' + player1 + ' et ' + player2 + ' n\'ont pas réussi à être départagés !<br> Allez, cul sec pour chacun !</p>');
        }
        //On accorde l'affichage du nom du joueur avec le compteur de coups
        $("#player").html("A " + player1 + " de jouer !");
        //On change le texte du bouton
        $("#contOrReset").html("Rejouer");
        //Reset des cases
        $(".caseGo").html("");
        //reset le compteur de parties, compteur de coups et scores
        h = i = scoreP1 = scoreP2 = 0;;
        //Reset du compteur de coups
        $("#scores").html("(" + scoreP1 + ") " + player1 + " - " + player2 + " (" + scoreP2 + ")");
    }
};

//On initialise "i" en dehors de la fonction car sinon il sera remis à 0 à chaque clic
var i = 0;
//Et on incrémente "i" à chaque clique dans une case en se servant du modulo pour savoir qui doit jouer (tour pair/impair)
$(".caseGo").on("click", function () {
    //On défini si la case est vide et si player1 ou player2 va jouer
    if (!$(this).html()) {
        //Si i est un chiffre pair, alors player1 joue
        if (i % 2 === 0) {
            //On affiche le pseudo du joueur
            $("#player").html("A " + player2 + " de jouer !");
            //On injecte la valeur de play1 dans la case (de classe .caseGo)
            $(this).html(play1);
        } //Si i est un chiffre impair, alors player2 joue
        else {
            $("#player").html("A " + player1 + " de jouer !");
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
        || verif($("#12").html(), $("#11").html(), $("#10").html());
});

//Lors du clic sur le bouton #saveInfos on reset la grille et on récupère la valeur des inputs
$("#saveInfos").on("click", function () {
    $(".caseGo").html("");
    player1 = $("#player_1").val();
    player2 = $("#player_2").val();
    nbParties = parseInt($(".nbParties").val());
    //On accorde l'affichage du nom du joueur avec le compteur de coups (après l'avoir défini avec la var associée)
    $("#player").html("A " + player1 + " de jouer !");
    //On reset compteurs et scores
    h = i = scoreP1 = scoreP2 = 0;
    //On lance la fonction partie() au cas où l'utilisateur n'entre rien/du texte pour faire un nb Infinity de parties
    parties();
    //Premier affichage des scores + noms des joueurs
    $("#scores").html("(" + scoreP1 + ") " + player1 + " - " + player2 + " (" + scoreP2 + ")");
});

//Un bouton reset useless pour les feignants 
$("#resetGame").on("click", function () {
    //On accorde l'affichage du nom du joueur avec le compteur de coups
    $("#player").html("A " + player1 + " de jouer !");
    //reset l'intérieur des cases
    $(".caseGo").html("");
    //reset le compteur de parties, compteur de coups et scores
    h = i = scoreP1 = scoreP2 = 0;
    //reset affichage des scores
    $("#scores").html("(" + scoreP1 + ") " + player1 + " - " + player2 + " (" + scoreP2 + ")");
})

//Un bouton reset pour réinitialiser toutes les données de la partie (équivalent à un reload mais sans recharger la page)
$("#resetGame2").on("click", function () {
    //On raffiche le modal pour récupérer les nouvelles infos
    $('#myModal').modal('show');
})
