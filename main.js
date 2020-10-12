document.getElementById("one").addEventListener("mouseenter",
  function() {
    document.getElementById("one").style.backgroundColor = "orange";
    document.getElementById("two").style.backgroundColor = "orange";
    document.getElementById("three").style.backgroundColor = "orange";
  }, false
);

document.getElementById("two").addEventListener("mouseenter",
  function() {
    document.getElementById("one").style.backgroundColor = "orange";
    document.getElementById("two").style.backgroundColor = "orange";
    document.getElementById("three").style.backgroundColor = "orange";
  }, false
);

document.getElementById("three").addEventListener("mouseenter",
  function() {
    document.getElementById("one").style.backgroundColor = "orange";
    document.getElementById("two").style.backgroundColor = "orange";
    document.getElementById("three").style.backgroundColor = "orange";
  }, false
);

document.getElementById("one").addEventListener("mouseleave",
  function() {
    document.getElementById("one").style.backgroundColor = "yellow";
    document.getElementById("two").style.backgroundColor = "#00ffff";
    document.getElementById("three").style.backgroundColor = "#00FF00";
  }, false
);

document.getElementById("two").addEventListener("mouseleave",
  function() {
    document.getElementById("one").style.backgroundColor = "yellow";
    document.getElementById("two").style.backgroundColor = "#00ffff";
    document.getElementById("three").style.backgroundColor = "#00FF00";
  }, false
);

document.getElementById("three").addEventListener("mouseleave",
  function() {
    document.getElementById("one").style.backgroundColor = "yellow";
    document.getElementById("two").style.backgroundColor = "#00ffff";
    document.getElementById("three").style.backgroundColor = "#00FF00";
  }, false
);


document.getElementById("one").addEventListener("click",
  function() {
    var newPara = document.createElement("p");
    newPara.innerHTML = "Oooh - so close, but no cigar";
    document.getElementById("one").appendChild(newPara);
  })


document.getElementById("two").addEventListener("click",
  function() {
    var newPara = document.createElement("p");
    newPara.innerHTML = "DING DING DING - We have a winner";
    document.getElementById("two").appendChild(newPara);
  })


document.getElementById("three").addEventListener("click",
  function() {
    var newPara = document.createElement("p");
    newPara.innerHTML = "Oops, butter luck next time";
    document.getElementById("three").appendChild(newPara);
  })


document.getElementById("one").addEventListener("click",
  function() {
    var btn = document.createElement("button");
    btn.innerHTML = "START OVER";
    document.getElementById('one').appendChild(btn);
    window.location = "#";
  })

  document.getElementById("two").addEventListener("click",
    function() {
      var btn = document.createElement("button");
      btn.innerHTML = "START OVER";
      document.getElementById('two').appendChild(btn);
      window.location = "#";
    })

    document.getElementById("three").addEventListener("click",
      function() {
        var btn = document.createElement("button");
        btn.innerHTML = "START OVER";
        document.getElementById('three').appendChild(btn);
        window.location = "#";
      })
