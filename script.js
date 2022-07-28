const colorsArr = [
      '#16a085',
      '#27ae60',
      '#2c3e50',
      '#f39c12',
      '#e74c3c',
      '#9b59b6',
      '#FB6964',
      '#342224',
      '#472E32',
      '#BDBB99',
      '#77B1A9',
      '#73A857'
    ];

async function dataFetch() {
      try {
            const result = await fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");
            const data = await result.json();
            const quotes = data.quotes.slice(0, 20);
            const quoteIndex = Math.floor(Math.random() * quotes.length);
            const quote = quotes[quoteIndex];
            const colorIndex = Math.floor(Math.random() * colorsArr.length);

            $("section,#new-quote,.icon_div").css("background-color", `${colorsArr[colorIndex]}`);

            $("#text").html(`<i class="fa-solid fa-quote-left"></i> ${quote.quote}`);
            $("#author").text(`- ${quote.author}`);
            $("#new-quote").click(() => {
                  const colorIndex = Math.floor(Math.random() * colorsArr.length);
                  $("section,#new-quote,.icon_div").animate({backgroundColor: colorsArr[colorIndex]}, 1000);

                  const indexNo = Math.floor(Math.random() * quotes.length);
                  const quote = quotes[indexNo];
                  $('.text_container').animate({ opacity: 0 }, 500, function () {
                        $(this).animate({ opacity: 1 }, 500);
                        $("#text").html(`<i class="fa-solid fa-quote-left"></i> ${quote.quote}`);
                        $("#author").text(`- ${quote.author}`);
                  });
            })

      } catch (error) {
            console.log(error.message)
      }
}
dataFetch();