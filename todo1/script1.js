   var liste = [];

    function add() {
      var val = document.getElementById("input").value;
      var numero = liste.length + 1;
      if (val !== "") {
        liste.push(val);
        let nouvelleLigne = "<tr><td>" + numero + "</td><td>" + val + "</td>" +
                             "<td><button onclick='supprimer(this)'>Supprimer</button> " +
                             "<button onclick='modifier(this)'>Modifier</button></td></tr>";
        document.getElementById("table").innerHTML += nouvelleLigne;
        document.getElementById("input").value = "";
      }
    }

    function supprimer(btn) {
      var ligne = btn.closest('tr');
      ligne.remove();
    }

    function modifier(btn) {
      var cellule = btn.closest('tr').children[1];
      var text = prompt("Modifier :", cellule.textContent);
      if (text !== null && text.trim() !== "") {
        cellule.textContent = text;
      }
    }