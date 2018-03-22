var music = document.createElement("AUDIO");

//sound toggle function
var isMusicOn = true;
function soundToggle(){
  var soundButton = document.getElementById("soundControl");
  if(isMusicOn){
    isMusicOn = false;
    music.pause();
    soundButton.innerHTML = '<i class="fas fa-volume-off"></i>';
    console.log('music is now off');
  } else if(!isMusicOn){
    isMusicOn = true;
    music.play();
    soundButton.innerHTML = '<i class="fas fa-volume-up"></i>';
    console.log('music is now on');
  }
}

//rapper information
var rappers = {
  aries:{
    sign: 'Aries',
    rapper: 'Chance the Rapper',
    description: 'A natural born leader, you would rather issue out orders then recieve them. You can sometimes be impatient, but you always fight hard for your goals. You have a youthful energy, and you can quickly perform any task.',
    background: 'linear-gradient(90deg, #333333,  #dd1818)',
    img: '<img src="img/chance.jpg" />',
    song:'mp3/noproblem.mp3'
  },
  taurus:{
    sign: 'Tarus',
    rapper: 'Pusha T',
    description: 'You are down to earth and practical. Making money comes easy to you, and you are committed, which can sometimes be seen as stubbornness. Overall, you are hardworking, patient and reliable.',
    background: 'linear-gradient(90deg, #636363,  #a2ab58)',
    img: '<img src="img/pushat.jpg" />',
    song:'mp3/untouchable.mp3'
  },
  gemini:{
    sign: 'Gemini',
    rapper: 'Kendrick Lamar',
    description: 'You are open minded, and a talented artist or writer because of it. You tend to switch from a sociable, friendly personality to a serious one pretty quickly. You are fascinated by the world. ',
    background: 'linear-gradient(90deg, #CAC531,  #F3F9A7)',
    img: '<img src="img/kendrick.jpg" />',
    song:'mp3/humble.mp3'
  },
  cancer:{
    sign: 'Cancer',
    rapper: '50 Cent',
    description: 'You work best on your own, and you are skeptical of strangers. However, you do care deeply for those close to you. When a job needs to get done, you accomplish it with ease. ',
    background: 'linear-gradient(90deg, #7F00FF,  #E100FF)',
    img: '<img src="img/50cent.jpg" />',
    song:'mp3/indaclub.mp3'
  },
  leo:{
    sign: 'Leo',
    rapper: 'Lil Uzi Vert',
    description: 'You love to laugh, and tend to view life in a positive light. Creative and passionate, you can quickly solve the most complex problems, and because of this you are confident.',
    background: 'linear-gradient(90deg, #ee0979,  #ff6a00)',
    img: '<img src="img/liluzivert.jpg" />',
    song:'mp3/xotourlife.mp3'
  },
  virgo:{
    sign: 'Virgo',
    rapper: 'Nas',
    description: 'You are well organized, and obsess over details. Living methodically, you create experiences rather then leave them to chance. However, you have a hard time accepting your feelings.',
    background: 'linear-gradient(90deg, #0f0c29,  #302b63)',
    img: '<img src="img/nas.jpg" />',
    song:'mp3/nystateofmind.mp3'
  },
  libra:{
    sign: 'Libra',
    rapper: 'Lil Wayne',
    description: 'You are known for your diplomatic nature. You are very ambitious, and you get along with nearly everyone. You have an expensive taste, leading you to work hard for money.',
    background: 'linear-gradient(90deg, #667db6,  #0082c8)',
    img: '<img src="img/lilwayne.jpg" />',
    song:'mp3/amilli.mp3'
  },
  scorpio:{
    sign: 'Scorpio',
    rapper: 'Drake',
    description: 'When you have a goal, there is no stopping you. You are incredibly passionate for what you do, and this makes you a great leader. You love to feel and express emotions, but you keep a calm demeanor.',
    background: 'linear-gradient(90deg, #000000,  #EB5757)',
    img: '<img src="img/drake.jpg" />',
    song:'mp3/godsplan.mp3'
  },
  sagittarius:{
    sign: 'Sagittarius',
    rapper: 'Jay-Z',
    description: 'Born with a philosophical nature, you look for meaning in everything. You are incredibly optimistic and have a friendly nature. You put freedom over everything, and are honest in your ways.',
    background: 'linear-gradient(90deg, #3494E6,  #EC6EAD)',
    img: '<img src="img/jayz.jpg" />',
    song:'mp3/izzo.mp3'
  },
  capricorn:{
    sign: 'Capricorn',
    rapper: 'Mac Miller',
    description: 'You know how to make the most out of everything in life. You learn from your mistakes, and use your experiences to get to the top. Loyalty is very important to you. ',
    background: 'linear-gradient(90deg, #134E5E,  #71B280)',
    img: '<img src="img/macmiller.jpg" />',
    song:'mp3/donaldtrump.mp3'
  },
  aquarius:{
    sign: 'Aquarius',
    rapper: 'J. Cole',
    description: 'You are a deep thinker, and you tend to be quiet. However, you see the world as full of opportunities, and you are energetic about the things you do. You love to use your mind, and you get bored easily.',
    background: 'linear-gradient(90deg, #0575E6,  #021B79)',
    img: '<img src="img/jcole.jpg" />',
    song:'mp3/crookedsmile.mp3'
  },
  
  pisces:{
    sign: 'Pisces',
    rapper: 'Earl Sweatshirt',
    description: 'You often find yourself in the company of many different types of people due to your friendly nature. You are incredibly empathic, and you have a naturally deep understanding of life.',
    background: 'linear-gradient(90deg, #11998e,  #38ef7d)',
    img: '<img src="img/earl.jpg" />',
    song:'mp3/chum.mp3'
  }
};

//changeZodiac function: changes the content on the page to apply to the correct zodiac sign.
function changeZodiac(rapper){
  document.body.style.background = rapper.background;
  document.getElementById("rapper").innerHTML = rapper.rapper;
  document.getElementById("sign").innerHTML = rapper.sign;
  document.getElementById("rapInfo").innerHTML = rapper.description;
  document.getElementById("rapperImg").innerHTML = rapper.img;
//change source of music, then play music if sound is enabled
  music.src = rapper.song;
  if(isMusicOn){
    music.play();
  }
}

//adding click listeners to the buttons and then calling the corresponding funtion
document.getElementById('chance').onclick = function(){
  changeZodiac(rappers.aries);
};
document.getElementById('pushat').onclick = function(){
  changeZodiac(rappers.taurus);
};
document.getElementById('kendrick').onclick = function(){
  changeZodiac(rappers.gemini);
};
document.getElementById('50cent').onclick = function(){
  changeZodiac(rappers.cancer);
};
document.getElementById('liluzivert').onclick = function(){
  changeZodiac(rappers.leo);
};
document.getElementById('nas').onclick = function(){
  changeZodiac(rappers.virgo);
};
document.getElementById('lilwayne').onclick = function(){
  changeZodiac(rappers.libra);
};
document.getElementById('drake').onclick = function(){
  changeZodiac(rappers.scorpio);
};
document.getElementById('jayz').onclick = function(){
  changeZodiac(rappers.sagittarius);
};
document.getElementById('macmiller').onclick = function(){
  changeZodiac(rappers.capricorn);
};
document.getElementById('jcole').onclick = function(){
  changeZodiac(rappers.aquarius);
};
document.getElementById('earl').onclick = function(){
  changeZodiac(rappers.pisces);
};



//this function calculates the user's zodiac sign then runs changeZodiac()
function calcTest(){

    //month and day variables
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;

    //figure out the zodiac symbol
    if((month == 2 && day >= 20) || (month == 3 && day <= 20)) {
        changeZodiac(rappers.pisces);
      } 
      else if ((month == 1 && day >= 21) || (month == 2 && day <= 19)) {
        changeZodiac(rappers.aquarius);
      } 
      else if ((month == 12 && day >= 22) || (month == 1 && day <= 20)) {
        changeZodiac(rappers.capricorn);
      } 
      else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        changeZodiac(rappers.sagittarius);
      } 
      else if ((month == 10 && day >= 22) || (month == 11 && day <= 21)) {
        changeZodiac(rappers.scorpio);
      } 
      else if ((month == 9 && day >= 23) || (month == 10 && day <= 21)) {
        changeZodiac(rappers.libra);
      } 
      else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        changeZodiac(rappers.virgo);
      } 
      else if ((month == 7 && day >= 22) || (month == 8 && day <= 22)) {
        changeZodiac(rappers.leo);
      } 
      else if ((month == 6 && day >= 21) || (month == 7 && day <= 21)) {
        changeZodiac(rappers.cancer);
      } 
      else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        changeZodiac(rappers.gemini);
      } 
      else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        changeZodiac(rappers.taurus);
      } 
      else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        changeZodiac(rappers.aries);
        
      } 
      //handle false inputs
      
        if (day === 0 || day > 31 || month > 12 || day <= 0 || month <= 0){
          document.getElementById("rapper").innerHTML = ' ';
          document.getElementById("sign").innerHTML = ' ';
          document.getElementById("rapperImg").innerHTML = ' ';
          document.getElementById("rapInfo").innerHTML = ' ';
      } 

}
