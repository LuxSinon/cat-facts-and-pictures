const getFact = async () => {
    const response = await fetch('https://catfact.ninja/fact');
    const fact = await response.json();
    document.getElementById('fact').innerHTML = fact.fact;

    };

    document.getElementById('getFact').addEventListener('click', getFact);
    document.getElementById('clearFact').addEventListener('click', async () => {
    document.getElementById('fact').innerHTML = '';

    try {
        const response = await fetch('https://catfact.ninja/fact');
      } catch (error) {
        
        console.log('There was an error', error);
      }
    });

    async function getPicture() {
      const response = await fetch("https://cataas.com/cat");
      const image = await response.blob();
      const picture = document.getElementById("picture");
      picture.src = window.URL.createObjectURL(image);
     }
     function clearPicture() {
      const picture = document.getElementById("picture");
      picture.src = "";
     }



    

    function welcome() {
      var name = document.getElementById("name").value;
      var welcome = "Welcome, " + name + "!";
      document.getElementById("welcome").innerHTML = welcome;
     }

    