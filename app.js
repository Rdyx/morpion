//On initialise le nom des joueuers ainsi que le nombre de parties qu'on veut jouer et le score
var player1 = prompt("Nom du joueur 1");
var player2 = prompt("Nom du joueur2");
var nbParties = prompt("Combien de parties souhaitez-vous jouer ?");
var scoreP1 = 0;
var scoreP2 = 0;

//On boucle tant que l'utilisateur n'a pas entré un chiffre
function nombreParties(x) {
    for (g = 0; g < 1;) {
        if (isNaN(nbParties)) {
            nbParties = prompt("Il faut mettre un chiffre ! Combien de parties souhaitez-vous jouer ?")
        } else {
            g++
            return nbParties;
        }
    }
}
nombreParties(nbParties);

//On met le nom du joueur qui commence
$("#player").html(player1);
//On affiche les noms et les scores
$("#scores").html(scoreP1 + " " + player1 + " - " + player2 + " " + scoreP2);

//On défini ce qui va apparaître dans les cases
var play1 = "x" //<img src='http://www.i2symbol.com/images/myspace/symbols/heavy_multiplication_x_u2716_icon_256x256.png'/>";
var play2 = "o" //<img src='http://odellya.com/wp-content/uploads/2015/03/SEO-29.png' alt='o'/>";

//On initialise "i" en dehors de la fonction car sinon il sera remis à 0 à chaque clic
i = 0;
//Et on incrémente "i" à chaque clique dans une case en se servant du modulo pour savoir qui doit jouer (tour pair/impair)
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
        return i++
    }
})


//On initialise une sorte de boucle avec un var = 0 qui sera incrémentée pour calculer et s'arrêter une fois le nb de parties atteint
var h = 0;
$(".caseGo").on("click", function () {
    if (h < nbParties) {
        //combinaisons gagnantes (heureusement que c'est un morpion...)
        //combinaison top
        if ($("#00").html() === play1 && $("#01").html() === play1 && $("#02").html() === play1) {
            alert(player1 + " gagne !");
            $(".caseGo").html("");
            $("#scores").html(++scoreP1 + " " + player1 + " - " + player2 + " " + scoreP2);
            h++
            i = 0;
        } else if ($("#00").html() === play2 && $("#01").html() === play2 && $("#02").html() === play2) {
            alert(player2 + " gagne !");
            $(".caseGo").html("");
            $("#scores").html(scoreP1 + " " + player1 + " - " + player2 + " " + ++scoreP2);
            h++
            i = 0;
        }
        //combinaison gauche
        else if ($("#00").html() === play1 && $("#10").html() === play1 && $("#20").html() === play1) {
            alert(player1 + " gagne !");
            $(".caseGo").html("");
            $("#scores").html(++scoreP1 + " " + player1 + " - " + player2 + " " + scoreP2);
            h++
            i = 0;
        } else if ($("#00").html() === play2 && $("#10").html() === play2 && $("#20").html() === play2) {
            alert(player2 + " gagne !");
            $(".caseGo").html("");
            $("#scores").html(scoreP1 + " " + player1 + " - " + player2 + " " + ++scoreP2);
            h++
            i = 0;
        }
        //combinaison droite
        else if ($("#02").html() === play1 && $("#12").html() === play1 && $("#22").html() === play1) {
            alert(player1 + " gagne !");
            $(".caseGo").html("");
            $("#scores").html(++scoreP1 + " " + player1 + " - " + player2 + " " + scoreP2);
            h++
            i = 0;
        } else if ($("#02").html() === play2 && $("#12").html() === play2 && $("#22").html() === play2) {
            alert(player2 + " gagne !");
            $(".caseGo").html("");
            $("#scores").html(scoreP1 + " " + player1 + " - " + player2 + " " + ++scoreP2);
            h++
            i = 0;
        } //combinaison bottom
        else if ($("#20").html() === play1 && $("#21").html() === play1 && $("#22").html() === play1) {
            alert(player1 + " gagne !");
            $(".caseGo").html("");
            $("#scores").html(++scoreP1 + " " + player1 + " - " + player2 + " " + scoreP2);
            h++
            i = 0;
        } else if ($("#20").html() === play2 && $("#21").html() === play2 && $("#22").html() === play2) {
            alert(player2 + " gagne !");
            $(".caseGo").html("");
            $("#scores").html(scoreP1 + " " + player1 + " - " + player2 + " " + ++scoreP2);
            h++
            i = 0;
        }
        //combinaisons de la case centrale (4 directions)
        //top-left > bottom-right
        else if ($("#00").html() === play1 && $("#11").html() === play1 && $("#22").html() === play1) {
            alert(player1 + " gagne !");
            $(".caseGo").html("");
            $("#scores").html(++scoreP1 + " " + player1 + " - " + player2 + " " + scoreP2);
            h++
            i = 0;
        } else if ($("#00").html() === play2 && $("#11").html() === play2 && $("#22").html() === play2) {
            alert(player2 + " gagne !");
            $(".caseGo").html("");
            $("#scores").html(scoreP1 + " " + player1 + " - " + player2 + " " + ++scoreP2);
            h++
            i = 0;
        }
        //top-mid > bottom-mid
        else if ($("#01").html() === play1 && $("#11").html() === play1 && $("#21").html() === play1) {
            alert(player1 + " gagne !");
            $(".caseGo").html("");
            $("#scores").html(++scoreP1 + " " + player1 + " - " + player2 + " " + scoreP2);
            h++
            i = 0;
        } else if ($("#01").html() === play2 && $("#11").html() === play2 && $("#21").html() === play2) {
            alert(player2 + " gagne !");
            $(".caseGo").html("");
            $("#scores").html(scoreP1 + " " + player1 + " - " + player2 + " " + ++scoreP2);
            h++
            i = 0;
        }
        //top-right > bottom-left
        else if ($("#02").html() === play1 && $("#11").html() === play1 && $("#20").html() === play1) {
            alert(player1 + " gagne !");
            $(".caseGo").html("");
            $("#scores").html(++scoreP1 + " " + player1 + " - " + player2 + " " + scoreP2);
            h++
            i = 0;
        } else if ($("#02").html() === play2 && $("#11").html() === play2 && $("#20").html() === play2) {
            alert(player2 + " gagne !");
            $(".caseGo").html("");
            $("#scores").html(scoreP1 + " " + player1 + " - " + player2 + " " + ++scoreP2);
            h++
            i = 0;
        }
        //left-mid > right-mid
        else if ($("#10").html() === play1 && $("#11").html() === play1 && $("#12").html() === play1) {
            alert(player1 + " gagne !");
            $(".caseGo").html("");
            $("#scores").html(++scoreP1 + " " + player1 + " - " + player2 + " " + scoreP2);
            h++
            i = 0;
        } else if ($("#10").html() === play2 && $("#11").html() === play2 && $("#12").html() === play2) {
            alert(player2 + " gagne !");
            $(".caseGo").html("");
            $("#scores").html(scoreP1 + " " + player1 + " - " + player2 + " " + ++scoreP2);
            h++
            i = 0;
        } else if (i > 8) {
            console.log("bah alors")
            alert("Egalité ! On recommence !")
            $(".caseGo").html("");
            h++
            i = 0;
        }
    };
})

//On vérifie le nombre de partie jouée à chaque click, ok la mémoire va pas kiffer si je fais ce genre de truc souvent...
$(".caseGo").on("click", function () {
    if (h == nbParties) {
        //Si joueur 1 a un meilleur score
        if (scoreP1 > scoreP2) {
            $(".caseGo").html("");
            h = 0
            i = 0;
            alert(player1 + " gagne la partie avec un score de " + scoreP1 + " ! Vous reprendrez bien un p'tit coup ?");
            scoreP1 = 0;
            scoreP2 = 0;
            //Si joueur 2 a un meilleur score
        } else if (scoreP1 < scoreP2) {
            $(".caseGo").html("");
            h = 0
            i = 0;
            alert(player2 + " gagne la partie avec un score de " + scoreP2 + " ! Un p'tit whisky pour fêter ça ?");
            scoreP1 = 0;
            scoreP2 = 0;
            //Si joueur 1 et joueur 2 on le même score
        } else if (scoreP1 == scoreP2) {
            $(".caseGo").html("");
            h = 0
            i = 0;
            alert("Demn ! " + player1 + " et " + player2 + " n'ont pas réussi à être départagés ! Allez, cul sec pour chacun !");
            scoreP1 = 0;
            scoreP2 = 0;
        }
    }
})

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
    nbParties = prompt("Combien de parties souhaitez-vous jouer ?");
    $("#scores").html(scoreP1 + " " + player1 + " - " + player2 + " " + scoreP2);
    alert("Bah alors ? On s'enjaille !");

})

// var player1 = prompt("Nom du joueur 1");
// var player2 = prompt("Nom du joueur2");
// var nbParties = prompt("Combien de parties souhaitez-vous jouer ?");
// // var scoreP1 = 0;
// // var scoreP2 = 0;