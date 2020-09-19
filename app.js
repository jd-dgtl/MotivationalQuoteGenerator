const quotes = [
    {
        quote: `Perseverance is the hard work you do after you get tired of doing the hard work you already did.`
    }, 
    { 
        quote: `Slow progess is still progress. Keep going!`
    },
    {
        quote: `God didn't bring you this far to only bring you this far.`
    },
    {  
        quote: `What is meant for you will not pass you by!`
        
    },
    {
        quote: `You are not defined by your past mistakes.`
    },
    {
        quote: `It's never to late to get it together.`
    },
    {  
        quote: `Direction is so much more important than speed. Many are going nowhere fast.`
    },
    {  
        quote: `You might be overwhelmed but keep on pushing because your prayers are about to happen.`
    },
    {  
        quote: `The best thing you can do is to just try. Even if you're scared. Even if you don't know what the hell you're doing. Something good will always come from trying.`
    },
    { 
        quote: `It's okay not to be okay sometimes.`
    },
    {  
        quote: `Don't let Yesterday take up too much of Today.`
    },
    {  
        quote: `We may encounter many defeats, but we must not be defeated.`
    }, 
    {
        quote: `When you're feeling hopeless, keep on pushing because your life has a great purpose.`
    }, 
    {
        quote: `Even if you fall do not lose hope, you are destined for greatness, keep going on.`
    },
    {
        quote: `Never underestimate or undermine your abilities. You are great!`   
    },
    {
        quote: `Trust the Process. Embrace the Journey.`   
    },
    {
        quote: `Don't let self-doubt stop you from achieving your goals.`   
    },
    {
        quote: `Try to be a rainbow in someone's cloud.`   
    },
    {
        quote: `That move you're scared to make might just be the one.`   
    },
    {
        quote: `Don't be discouraged by the things you're yet to accompish. Congratulate yourself for the mountains you've climbed to get to where you are today.`   
    },
    {
        quote: `Celebrate your small wins: they're your daily reminders of the bigger things yet to come.`   
    },
    {
        quote: `There's no harm in trying again and going after what you want.`   
    },
    {
        quote: `Whatever challenge you're facing isn't permanent; it will pass.`   
    },
    {
        quote: `Delayed does not mean denied. The door will open.`   
    },
    {
        quote: `Keep going. Your breakthrough may just be right around the corner.`   
    },
    {
        quote: `You may not be there yet, but you are closer than you were yesterday.`   
    },
    {
        quote: `Always remember that your present situation is not your final destination. The best is yet to come.`   
    },
]

//New quote button
const quoteBtn = document.getElementById('quote-btn');

//Event Handler
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

quoteBtn.addEventListener('click', () =>{
    let random = Math.floor(Math.random()* quotes.length);
    
    quote.innerHTML = quotes[random].quote;

})