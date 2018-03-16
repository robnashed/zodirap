//create background music
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
    description: 'Aries is the first sign of the zodiac. Those who are Aries are independent and courageous. They enjoy leading others and bringing excitement into the lives of others. An Aries is enthusiastic and very goal-oriented.',
    background: 'linear-gradient(90deg, #333333,  #dd1818)',
    img: '<img src="img/chance.jpg" />',
    song:'mp3/noproblem.mp3'
  },
  taurus:{
    sign: 'Tarus',
    rapper: 'Pusha T',
    description: 'The second sign of the zodiac, those who are a Taurus are solid and fight for what they want. A Taurus is very easy going but can also be stubborn. A Taurus can be procrastinators but also have a good-work ethic.',
    background: 'linear-gradient(90deg, #636363,  #a2ab58)',
    img: '<img src="img/pushat.jpg" />',
    song:'mp3/untouchable.mp3'
  },
  gemini:{
    sign: 'Gemini',
    rapper: 'Kendrick Lamar',
    description: 'Gemini is the third sign of the zodiac. Geminis have many sides and are known for their energy. They are very talkative and are considered social butterflies. A Gemini will always take their lives in the direction they want to go.',
    background: 'linear-gradient(90deg, #CAC531,  #F3F9A7)',
    img: '<img src="img/kendrick.jpg" />',
    song:'mp3/humble.mp3'
  },
  cancer:{
    sign: 'Cancer',
    rapper: '50 Cent',
    description: 'Cancer is the fourth sign of the zodiac. This sign is marked by inconsistency. They enjoy security but also seek adventure. A Cancer is not very predictable and always keep others guessing.',
    background: 'linear-gradient(90deg, #7F00FF,  #E100FF)',
    img: '<img src="img/50cent.jpg" />',
    song:'mp3/indaclub.mp3'
  },
  leo:{
    sign: 'Leo',
    rapper: 'Lil Uzi Vert',
    description: 'Leo is the fifth sign in the zodiac. Leos have high self esteem and are very devoted. They are also very kind and generous. A Leo is known for being hot tempered yet forgiving.',
    background: 'linear-gradient(90deg, #ee0979,  #ff6a00)',
    img: '<img src="img/liluzivert.jpg" />',
    song:'mp3/xotourlife.mp3'
  },
  virgo:{
    sign: 'Virgo',
    rapper: 'Nas',
    description: 'The sixth sign of the zodiac, Virgo is very mind oriented. They are constantly analyzing and thinking. They enjoy bettering themselves and those around them.',
    background: 'linear-gradient(90deg, #0f0c29,  #302b63)',
    img: '<img src="img/nas.jpg" />',
    song:'mp3/nystateofmind.mp3'
  },
  libra:{
    sign: 'Libra',
    rapper: 'Lil Wayne',
    description: 'The seventh sign of the zodiac, Libras are known for their diplomatic nature. They get along well with everyone and are ambitious. They have very expensive taste and work hard to make money.',
    background: 'linear-gradient(90deg, #667db6,  #0082c8)',
    img: '<img src="img/lilwayne.jpg" />',
    song:'mp3/amilli.mp3'
  },
  scorpio:{
    sign: 'Scorpio',
    rapper: 'Drake',
    description: 'The eight sign of the zodiac, Scorpios are very intense. They like to question everything and work hard at making sense of things. Scorpios treat others with kindness and loyalty.',
    background: 'linear-gradient(90deg, #000000,  #EB5757)',
    img: '<img src="img/drake.jpg" />',
    song:'mp3/godsplan.mp3'
  },
  sagittarius:{
    sign: 'Sagittarius',
    rapper: 'Jay-Z',
    description: 'The ninth sign of the zodiac, a Sagittarius has a very positive outlook on life. They have vibrant personalities and enjoy meeting new people. They can also be reckless.',
    background: 'linear-gradient(90deg, #3494E6,  #EC6EAD)',
    img: '<img src="img/jayz.jpg" />',
    song:'mp3/izzo.mp3'
  },
  capricorn:{
    sign: 'Capricorn',
    rapper: 'Mac Miller',
    description: 'The 10th sign of the zodiac, those who are Capricorns are marked by their ambitious nature. They have very active minds and always have to be in control of their lives.',
    background: 'linear-gradient(90deg, #134E5E,  #71B280)',
    img: '<img src="img/macmiller.jpg" />',
    song:'mp3/donaldtrump.mp3'
  },
  aquarius:{
    sign: 'Aquarius',
    rapper: 'J. Cole',
    description: 'Aquarius is the 11th sign of the zodiac. Aquarians dont always care what others think about them. They take each opportunity they have and work towards formulating new ideas.',
    background: 'linear-gradient(90deg, #0575E6,  #021B79)',
    img: '<img src="img/jcole.jpg" />',
    song:'mp3/crookedsmile.mp3'
  },
  
  pisces:{
    sign: 'Pisces',
    rapper: 'Earl Sweatshirt',
    description: 'Pisces is the 12th and last sign of the zodiac. Those who are Pisces are extremely sensitive and reserved. They like to escape from reality. A Pisces is a very good listener and friend.',
    background: 'linear-gradient(90deg, #11998e,  #38ef7d)',
    img: '<img src="img/earl.jpg" />',
    song:'mp3/chum.mp3'
  }
}

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
}
document.getElementById('pushat').onclick = function(){
  changeZodiac(rappers.taurus);
}
document.getElementById('kendrick').onclick = function(){
  changeZodiac(rappers.gemini);
}
document.getElementById('50cent').onclick = function(){
  changeZodiac(rappers.cancer);
}
document.getElementById('liluzivert').onclick = function(){
  changeZodiac(rappers.leo);
}
document.getElementById('nas').onclick = function(){
  changeZodiac(rappers.virgo);
}
document.getElementById('lilwayne').onclick = function(){
  changeZodiac(rappers.libra);
}
document.getElementById('drake').onclick = function(){
  changeZodiac(rappers.scorpio);
}
document.getElementById('jayz').onclick = function(){
  changeZodiac(rappers.sagittarius);
}
document.getElementById('macmiller').onclick = function(){
  changeZodiac(rappers.capricorn);
}
document.getElementById('jcole').onclick = function(){
  changeZodiac(rappers.aquarius);
}
document.getElementById('earl').onclick = function(){
  changeZodiac(rappers.pisces);
}



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
        cchangeZodiac(rappers.sagittarius);
      } 
      else if ((month == 10 && day >= 22) || (month == 11 && day <= 21)) {
        changeZodiac(rappers.scorpio);
      } 
      else if ((month == 9 && day >= 22) || (month == 10 && day <= 21)) {
        changeZodiac(rappers.libraaquarius);
      } 
      else if ((month == 8 && day >= 23) || (month == 9 && day <= 21)) {
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
      
        if (day == 0 || day > 31 || month > 12 || day < 0){
        rapperName.innerHTML = ' ';
        rapperSign.innerHTML = ' ';
        rapperInfo.innerHTML = ' ';
        rapperImg.innerHTML = ' ';

        
      } 

}


