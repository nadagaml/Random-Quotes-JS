//pure js script

// var qoute = [

//         {'qoute': "You must be the change you wish to see in the world." ,
//         'Auther': "Nelson Mandela" },

//         {'qoute': "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking." ,
//         'Auther': "Steve Jobs" },


//         {'qoute': "The future belongs to those who believe in the beauty of their dreams." ,
//         'Auther': "Eleanor Roosevelt" },

//         {'qoute': "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough." ,
//         'Auther': "Oprah Winfrey" },

//         {'qoute': "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success." ,
//         'Auther': "James Cameron" },

//         {'qoute': "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one." ,
//         'Auther': " John Lennon" },


// ]

// function getQuotes()
// {
//     var num = Math.floor(Math.random()*qoute.length)
//     console.log(num)

//     document.getElementById("quote").innerHTML = qoute[num].qoute;
//     document.getElementById("auther").innerHTML = qoute[num].Auther;

// }



//--------------------------------------------------
// using API


 const quote  =  document.getElementById("quote")
 const auther =  document.getElementById("auther")
const api_url = "https://api.quotable.io/random";

async function getQuotes(url)
{
    const response = await fetch(url)
    var data = await response.json()
    console.log(data)
    quote.innerHTML = data.content
    auther.innerHTML= data.author

}
// getQuotes(api_url)


// share this qoute in tweeter
function tweet()
{
    window.open("https://twitter.com/intent/tweet?text= "+ quote.innerHTML + "---by" + auther.innerHTML , "Tweet Window" , "widht=600 , height=300")
}