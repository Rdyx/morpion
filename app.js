//On initialise le nom des joueuers ainsi que le nombre de parties qu'on veut jouer et le score
var player1 = prompt("Nom du joueur 1");
var player2 = prompt("Nom du joueur2");
var nbParties = prompt("Combien de parties souhaitez-vous jouer ?");
var scoreP1 = 0;
var scoreP2 = 0;
//On boucle tant que l'utilisateur n'a pas entré un chiffre
function parties() {
    while (true) {
        if (isNaN(nbParties) || nbParties == false) {
            nbParties = prompt("Il faut mettre un chiffre ! Combien de parties souhaitez-vous jouer ?")
        } else {
            return false;
        }
    }
};
parties(nbParties);

//On met le nom du joueur qui commence
$("#player").html(player1);
//On affiche les noms et les scores
$("#scores").html(scoreP1 + " " + player1 + " - " + player2 + " " + scoreP2);

//On défini ce qui va apparaître dans les cases
var play1 = '<img src="http://www.i2symbol.com/images/myspace/symbols/heavy_multiplication_x_u2716_icon_256x256.png" alt="x">';
var play2 = '<img src="http://odellya.com/wp-content/uploads/2015/03/SEO-29.png" alt="o">';

//On initialise une sorte de boucle avec un var = 0 qui sera incrémentée pour calculer et s'arrêter une fois le nb de parties atteint
var h = 0;
//Et on incrémente "i" à chaque clique dans une case en se servant du modulo pour savoir qui doit jouer (tour pair/impair)


function verif(a, b, c) {
    if (h < nbParties) {
        //combinaisons gagnantes (heureusement que c'est un morpion...)
        //combinaison top
        if (a == b && a == c) {
            if (a == play1) {
                i = 0;
                h++
                $(".caseGo").html("");
                $("#scores").html(++scoreP1 + " " + player1 + " - " + player2 + " " + scoreP2);
                alert(player1 + " gagne !")
            } else if (a == play2) {
                i = 0;
                h++
                alert(player2 + " gagne !");
                $(".caseGo").html("");
                $("#scores").html(scoreP1 + " " + player1 + " - " + player2 + " " + ++scoreP2);
            }
        }
    } else if (h == nbParties) {
        //Si joueur 1 a un meilleur score
        if (scoreP1 > scoreP2) {
            $(".caseGo").html("");
            h = 0
            i = 0;
            alert(player1 + " gagne la partie avec un score de " + scoreP1 + " ! Vous reprendrez bien un p'tit coup ?");
            scoreP1 = 0;
            scoreP2 = 0;
            nbParties = prompt("Combien de parties souhaitez-vous jouer ?");
            //On relance la function pour être sûr d'avoir un chiffre
            parties(nbParties);
            $("#scores").html(scoreP1 + " " + player1 + " - " + player2 + " " + scoreP2);
        } else if (scoreP1 < scoreP2) {
            $(".caseGo").html("");
            h = 0
            i = 0;
            alert(player2 + " gagne la partie avec un score de " + scoreP2 + " ! Un p'tit whisky pour fêter ça ?");
            scoreP1 = 0;
            scoreP2 = 0;
            nbParties = prompt("Combien de parties souhaitez-vous jouer ?");
            //On relance la function pour être sûrs d'avoir un chiffre
            parties(nbParties);
            $("#scores").html(scoreP1 + " " + player1 + " - " + player2 + " " + scoreP2);
            //Si joueur 1 et joueur 2 on le même score
        } else if (scoreP1 == scoreP2) {
            $(".caseGo").html("");
            h = 0
            i = 0;
            alert("Demn ! " + player1 + " et " + player2 + " n'ont pas réussi à être départagés ! Allez, cul sec pour chacun !");
            scoreP1 = 0;
            scoreP2 = 0;
            nbParties = prompt("Combien de parties souhaitez-vous jouer ?");
            //On relance la function pour être sûrs d'avoir un chiffre
            parties(nbParties);
            $("#scores").html(scoreP1 + " " + player1 + " - " + player2 + " " + scoreP2);
        }
    }
};

//On initialise "i" en dehors de la fonction car sinon il sera remis à 0 à chaque clic
var i = 0;
$(".caseGo").on("click", function () {
    //On défini si la case est vide si X ou O va être ajouté
    if ($(this).html() == "") {
        if (i % 2 === 0) {
            $("#player").html(player1);
            $(this).html(play1);
        } else {
            $("#player").html(player2);
            $(this).html(play2);
        };
        console.log(i)
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
        || verif($("#01").html(), $("#11").html(), $("#12").html())
        //top-right > bottom-left
        || verif($("#02").html(), $("#11").html(), $("#20").html())
        //mid-left > mid-right
        || verif($("#10").html(), $("#11").html(), $("#12").html());
});

//Un bouton reset useless pour les feignants 
$("#resetGame").on("click", function () {
    $(".caseGo").html("");
    h = 0
    i = 0;
    scoreP1 = 0;
    scoreP2 = 0;
    $("#scores").html(scoreP1 + " " + player1 + " - " + player2 + " " + scoreP2);
    alert("Bah alors ?");

})

$("#resetGame2").on("click", function () {
    $(".caseGo").html("");
    h = 0
    i = 0;
    scoreP1 = 0;
    scoreP2 = 0;
    player1 = prompt("Nom du joueur 1");
    player2 = prompt("Nom du joueur2");
    alert("Bah alors ? On s'enjaille !");
    nbParties = prompt("Combien de parties souhaitez-vous jouer ?");
    //On relance la function pour être sûrs d'avoir un chiffre
    parties(nbParties);
    $("#scores").html(scoreP1 + " " + player1 + " - " + player2 + " " + scoreP2);

})