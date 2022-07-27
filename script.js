const colorsArr = ['4FC1FF', "E8B9AB", 'CB769E', '69995D', 'D2D7DF', '3AA7A3', 'ECA400', '006992', 'AFECE7', '81F499', '890620', 'B6465F', '8ACDEA']




async function dataFetch() {
      try {
            const result = await fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");
            const data = await result.json();
            const quotes = data.quotes.slice(0, 20);
            const quoteIndex = Math.floor(Math.random() * quotes.length);
            const quote = quotes[quoteIndex];
            const colorIndex = Math.floor(Math.random() * colorsArr.length);

            $("section,#new-quote,.icon_div").css("background-color", `#${colorsArr[colorIndex]}`);

            $("#text").html(`<i class="fa-solid fa-quote-left"></i> ${quote.quote}`);
            $("#author").text(`- ${quote.author}`);
            $("#new-quote").click(() => {
                  const colorIndex = Math.floor(Math.random() * colorsArr.length);
                  $("section,#new-quote,.icon_div").css("background-color", `#${colorsArr[colorIndex]}`);
                  const indexNo = Math.floor(Math.random() * quotes.length);
                  const quote = quotes[indexNo];
                  $("#text").html(`<i class="fa-solid fa-quote-left"></i> ${quote.quote}`);
                  $("#author").text(`- ${quote.author}`);
            })

      } catch (error) {
            console.log(error.message)
      }
}
dataFetch();