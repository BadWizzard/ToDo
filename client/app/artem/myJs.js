  function validate() {
      var site = document.getElementById("site");
      var login = document.getElementById("login");
      var pass = document.getElementById("password");
      var btn = document.getElementsByName('popBtn')[0];
      if (site.value.length != 0 && login.value.length != 0 && pass.value.length != 0) {
          btn.disabled = false;
          btn.style.borderColor = "#2ecc71";
          btn.style.color = "#ffffff";
          btn.style.backgroundColor = "#2ecc71";
      }
      else {
          btn.disabled = true;
          btn.style.borderColor = "#ecf0f1";
          btn.style.color = "#bdc3c7";
          btn.style.backgroundColor = "#ecf0f1";
      }
  }
/*  function addToTable() {
      var values = [document.getElementById('site').value, document.getElementById('login').value, document.getElementById('password').value];
      var tbody = document.getElementsByTagName('tbody')[0];
      var line = document.createElement('tr');
      var td, p;
      for (var i = 0; i < 3; i++) {
          td = document.createElement('td');
          p = document.createElement('p');
          p.innerHTML = values[i];
          td.appendChild(p);
          line.appendChild(td);
      }
      tbody.appendChild(line);
    
  }*/