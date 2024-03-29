const adviceList = [
  'It is easy to sit up and take notice, what\'s difficult is getting up and taking action.',
  "Take one step at a time.",
  "Embrace opportunities for growth.",
  "Learn from your mistakes.",
  "Stay positive in difficult situations.",
  "Prioritize self-care.",
  "What we think, we become.",
  "Absorb what is useful. EDiscard what is not. Add what is uniquely your own.",
  "The only journey is the journey within.",
  "Whatever the mind of man can conceive and believe, it can achieve.",
  "We are what we repeatedly do. Excellence, then, is not an act but a habit.",
  "We must become the change we want to see.",
  "They must often change who would be constant in happiness or wisdom.",
  "Life isn't about finding yourself. Life is about creating yourself.",
  "Between stimulus and response, there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom.",
  "The only journey is the journey within.",
  "Don't let the fear of striking out hold you back.",
  "Do not despise the bottom rungs in the ascent to greatness.",
  "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
  "Collect as precious pearls the words of the wise and virtuous.",
  "Change and growth take place when a person has risked himself and dares to become involved with experimenting with his own life.",
  "Be not afraid of growing slowly; be afraid only of standing still.",
  "A master lives in the world of transformation, not the world of loss and gain.",
  "Never walk away from failure. On the contrary, study it carefully and imaginatively for its hidden assets.",
  "I've always tried to go one step past wherever people expected me to end up.",
  "It is wise to keep in mind that neither success nor failure is ever final.",
  "If you want to increase your success rate, double your failure rate.",
  "If you aren't making any mistakes, it's a sure sign you're playing it too safe.",
  "Every day do something that will inch you closer to a better tomorrow.",
  "Each problem that I solved became a rule, which served afterwards to solve other problems.",
  "Success is a journey, not a destination.",
  "Smooth seas do not make skillful sailors.",
  "Only those who risk going too far can possibly find out how far one can go.",
  "It is a terrible thing to see and have no vision.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "We are all self-made, but only the successful will admit it.",
  "Our attitude toward life determines life\'s attitude toward us.",
  "Definiteness of purpose is the starting point of all achievement.",
  "What you do makes a difference, and you have to decide what kind of difference you want to make.",
  "Stay afraid, but do it anyway. What\'s important is the action. You don\'t have to wait to be confident. Just do it and eventually the confidence will follow.",
  "Strive not to be a success, but rather to be of value.",
  "One can choose to go back toward safety or forward toward growth. Growth must be chosen again and again; fear must be overcome again and again.",
  "The swiftest way to triple your success is to double your investment in personal development.",
  "Don\'t go through life, grow through life.",
  "We can\'t become what we need to be by remaining what we are.",
  "Life\'s challenges are not supposed to paralyze you, they\'re supposed to help you discover who you are.",
  "If there is no struggle, there is no progress.",
  "People who are crazy enough to think they can change the world are the ones who do.",
  "The most difficult thing is the decision to act, the rest is merely tenacity.",
  "I\'ve got a theory that if you give 100% all the time, somehow things will work out in the end.",
  "Do the best you can until you know better. Then when you know better, do better.",
  "I would like to think that all of my successes in life are really just the fruit of my failures.",
  "Recognizing that you are not where you want to be is a starting point to begin changing your life.",
  "Incredible change happens in your life when you decide to take control of what you have power over instead of craving control over what you don’t.",
  "Be patient with yourself. You are growing stronger every day. The weight of the world will become lighter…and you will begin to shine brighter. Don’t give up.",
  "Permit yourself to change your mind when something is no longer working for you.",
  "When you get into a tight place and everything goes against you…never give up then, for that is just the place and time that the tide will turn.",
  "Every strike brings me closer to the next home run.",
  "I\'m a great believer in luck, and I find the harder I work the more I have of it.",
  "Pain, pleasure and death are no more than a process for existence. The revolutionary struggle in this process is a doorway open to intelligence.",
  "Be not afraid of growing slowly; be afraid only of standing still.",
  "You are the one that possesses the keys to your being. You carry the passport to your own happiness.",
  "What we fear doing most is usually what we most need to do.",
  "Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.",
  "It is never too late to be who you might have been.",
  "When the whole world is silent, even one voice becomes powerful.",
  "Once we believe in ourselves, we can risk curiosity, wonder, spontaneous delight, or any experiences that reveals the human spirit.",
  "'First things first' might be a cliche, but it's a useful one that means prioritizing what matters most to you and believing there is no wrong answer.",
  "The will to win, the desire to succeed, the urge to reach your full potential…these are the keys that will unlock the door to personal excellence.",
  "We are products of our past, but we don\'t have to be prisoners of it.” ",
  "If you don\'t make the time to work on creating the life you want, you\'re eventually going to be forced to spend a lot of time dealing with a life you don\'t want.",
  "The tragedy in life doesn\'t lie in not reaching your goal. The tragedy lies in having no goal to reach.",
  "When we\'re growing up there are all sorts of people telling us what to do when really what we need is space to work out who to be.",
  "Be patient with yourself. Self-growth is tender; it\'s holy ground. There\'s no greater investment.",
  "There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.",
  "The power of imagination makes us infinite.",
  "When someone tells me \'no,\' it doesn\'t mean I can\'t do it, it simply means I can\'t do it with them.",
  "Accept responsibility for your life. Know that it is you who will get you where you want to go, no one else.",
  "Someone is sitting in the shade today because someone planted a tree a long time ago.",
  "With self-discipline most anything is possible.",
  "Know thyself means this, that you get acquainted with what you know, and what you can do.",
  "Knowing yourself is the beginning of all wisdom.",
  "Make it thy business to know thyself, which is the most difficult lesson in the world.",
  "No one can see their reflection in running water. It is only in still water that we can see.",
  "Pay no attention to what the critics say; no statue has ever been erected to a critic.",
  "The easiest person to deceive is one's own self.",
  "The most difficult thing in life is to know yourself.",
  "Success often comes to those who dare to act. It seldom goes to the timid who are ever afraid of the consequences.",
  "Successful and unsuccessful people do not vary greatly in their abilities. They vary in their desire to reach their potential.",
  "Successful leaders see the opportunities in every difficulty rather than the difficulty in every opportunity.",
  "Success is not measured by what a man accomplished, but by the opposition he has encountered and the courage with which he has maintained the struggle against overwhelming odds.",
  "Success is not so much what we have, as it is what we are.",
  "Put your heart, mind, intellect, and soul even to your smallest acts. This is the secret of success.",
  "Striving for success without hard work is like trying to harvest where you haven't planted.",
  "Success is doing ordinary things extraordinarily well.",
  "The secret of success is consistency of purpose."
];

function generateAdvice() {
  const advice = document.getElementById("advice");
  const randomAdvice = Math.floor(Math.random() * adviceList.length);
  const randomNumber = Math.floor(Math.random() * 999);

  advice.textContent = adviceList[randomAdvice];

  document.getElementById("quote").style.display = "block";
  document.getElementById("advice-number").innerText = "advice ";
  document.getElementById("number").innerText = "#" + " " + randomNumber;

}