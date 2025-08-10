function resetConf() {
      let colorList = document.getElementById("bgColor");
      let selectedColor = colorList.value;
      document.body.style.backgroundColor = selectedColor;
      let newGreeting = document.getElementById("greet").value;
      let newpara1 = document.getElementById("p1").value;
      if (newGreeting != ""){
        document.getElementById("greeting").textContent = newGreeting;
      }
      else if (newpara1 != ""){
        document.getElementById("parag1").textContent = newpara1;
      }
    }

