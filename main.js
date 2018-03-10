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

//zodiac click functions
function aries(){
  var aries = {
    rapper: 'Chance the Rapper',
    description: 'Aries is the first sign of the zodiac. Those who are Aries are independent and courageous. They enjoy leading others and bringing excitement into the lives of others. An Aries is enthusiastic and very goal-oriented.'
  }
  document.body.style.background = "linear-gradient(90deg, #333333,  #dd1818)";
  document.getElementById("rapper").innerHTML = aries.rapper;
  document.getElementById("sign").innerHTML = 'Aries';
  document.getElementById("rapInfo").innerHTML = aries.description;
  document.getElementById("rapperImg").innerHTML = '<img src="img/chance.jpg" />';
  music.src = "mp3/noproblem.mp3";
  
  if(isMusicOn){
    music.play();
  }
 
}

function taurus(){
  var taurus = {
    rapper: 'Pusha T',
    description: 'The second sign of the zodiac, those who are a Taurus are solid and fight for what they want. A Taurus is very easy going but can also be stubborn. A Taurus can be procrastinators but also have a good-work ethic.'
  }
  document.body.style.background = "linear-gradient(90deg, #636363,  #a2ab58)";
  document.getElementById("rapper").innerHTML = taurus.rapper;
  document.getElementById("sign").innerHTML = 'Taurus';
  document.getElementById("rapInfo").innerHTML = taurus.description;
  document.getElementById("rapperImg").innerHTML = '<img src="img/pushat.jpg" />';
  music.src = "mp3/untouchable.mp3";
 
  if(isMusicOn){
    music.play();
  }
}

function gemini(){
  var gemini = {
    rapper: 'Kendrick Lamar',
    description: 'Gemini is the third sign of the zodiac. Geminis have many sides and are known for their energy. They are very talkative and are considered social butterflies. A Gemini will always take their lives in the direction they want to go.'
  }
  document.body.style.background = "linear-gradient(90deg, #CAC531,  #F3F9A7)";
  document.getElementById("rapper").innerHTML = gemini.rapper;
  document.getElementById("sign").innerHTML = 'Gemini';
  document.getElementById("rapInfo").innerHTML = gemini.description;
  document.getElementById("rapperImg").innerHTML = '<img src="img/kendrick.jpg" />';
  music.src = "mp3/humble.mp3";
 
  if(isMusicOn){
    music.play();
  }
}

function cancer(){
  var cancer = {
    rapper: '50 Cent',
    description: 'Cancer is the fourth sign of the zodiac. This sign is marked by inconsistency. They enjoy security but also seek adventure. A Cancer is not very predictable and always keep others guessing.'
  }
  document.body.style.background = "linear-gradient(90deg, #7F00FF,  #E100FF)";
  document.getElementById("rapper").innerHTML = cancer.rapper;
  document.getElementById("sign").innerHTML = 'Cancer';
  document.getElementById("rapInfo").innerHTML = cancer.description;
  document.getElementById("rapperImg").innerHTML = '<img src="img/50cent.jpg" />';
  music.src = "mp3/indaclub.mp3";
 
  if(isMusicOn){
    music.play();
  }
}

function leo(){
  var leo = {
    rapper: 'Lil Uzi Vert',
    description: 'Leo is the fifth sign in the zodiac. Leos have high self esteem and are very devoted. They are also very kind and generous. A Leo is known for being hot tempered yet forgiving.'
  }
  document.body.style.background = "linear-gradient(90deg, #ee0979,  #ff6a00)";
  document.getElementById("rapper").innerHTML = leo.rapper;
  document.getElementById("sign").innerHTML = 'Leo';
  document.getElementById("rapInfo").innerHTML = leo.description;
  document.getElementById("rapperImg").innerHTML = '<img src="img/liluzivert.jpg" />';
  music.src = "mp3/xotourlife.mp3";
  
  if(isMusicOn){
    music.play();
  }
}

function virgo(){
  var virgo = {
    rapper: 'Nas',
    description: 'The sixth sign of the zodiac, Virgo is very mind oriented. They are constantly analyzing and thinking. They enjoy bettering themselves and those around them.'
  }
  document.body.style.background = "linear-gradient(90deg, #0f0c29,  #302b63)";
  document.getElementById("rapper").innerHTML = virgo.rapper;
  document.getElementById("sign").innerHTML = 'Virgo';
  document.getElementById("rapInfo").innerHTML = virgo.description;
  document.getElementById("rapperImg").innerHTML = '<img src="img/nas.jpg" />';
  music.src = "mp3/nystateofmind.mp3";
 
  if(isMusicOn){
    music.play();
  }
}

function libra(){
  var libra = {
    rapper: 'Lil Wayne',
    description: 'The seventh sign of the zodiac, Libras are known for their diplomatic nature. They get along well with everyone and are ambitious. They have very expensive taste and work hard to make money.'
  }
  document.body.style.background = "linear-gradient(90deg, #667db6,  #0082c8)";
  document.getElementById("rapper").innerHTML = libra.rapper;
  document.getElementById("sign").innerHTML = 'Libra';
  document.getElementById("rapInfo").innerHTML = libra.description;
  document.getElementById("rapperImg").innerHTML = '<img src="img/lilwayne.jpg" />';
  music.src = "mp3/amilli.mp3";

  if(isMusicOn){
    music.play();
  }
}

function scorpio(){
  var scorpio = {
    rapper: 'Drake',
    description: 'The eight sign of the zodiac, Scorpios are very intense. They like to question everything and work hard at making sense of things. Scorpios treat others with kindness and loyalty.'
  }
  document.body.style.background = "linear-gradient(90deg, #000000,  #EB5757)";
  document.getElementById("rapper").innerHTML = scorpio.rapper;
  document.getElementById("sign").innerHTML = 'Scorpio';
  document.getElementById("rapInfo").innerHTML = scorpio.description;
  document.getElementById("rapperImg").innerHTML = '<img src="img/drake.jpg" />';
  music.src = "mp3/godsplan.mp3";
 
  if(isMusicOn){
    music.play();
  }
}

function sagittarius(){
  var sagittarius = {
    rapper: 'Jay-Z',
    description: 'The ninth sign of the zodiac, a Sagittarius has a very positive outlook on life. They have vibrant personalities and enjoy meeting new people. They can also be reckless.'
  }
  document.body.style.background = "linear-gradient(90deg, #3494E6,  #EC6EAD)";
  document.getElementById("rapper").innerHTML = sagittarius.rapper;
  document.getElementById("sign").innerHTML = 'Sagittarius';
  document.getElementById("rapInfo").innerHTML = sagittarius.description;
  document.getElementById("rapperImg").innerHTML = '<img src="img/jayz.jpg" />';
  music.src = "mp3/izzo.mp3";
 
  if(isMusicOn){
    music.play();
  }
}

function capricorn(){
  var capricorn = {
    rapper: 'Mac Miller',
    description: 'The 10th sign of the zodiac, those who are Capricorns are marked by their ambitious nature. They have very active minds and always have to be in control of their lives.'
  }
  document.body.style.background = "linear-gradient(90deg, #134E5E,  #71B280)";
  document.getElementById("rapper").innerHTML = capricorn.rapper;
  document.getElementById("sign").innerHTML = 'Capricorn';
  document.getElementById("rapInfo").innerHTML = capricorn.description;
  document.getElementById("rapperImg").innerHTML = '<img src="img/macmiller.jpg" />';
  music.src = "mp3/donaldtrump.mp3";

  if(isMusicOn){
    music.play();
  }
}

function aquarius(){
  var aquarius = {
    rapper: 'J. Cole',
     description: 'Aquarius is the 11th sign of the zodiac. Aquarians dont always care what others think about them. They take each opportunity they have and work towards formulating new ideas.'
  }
  document.body.style.background = "linear-gradient(90deg, #0575E6,  #021B79)";
  document.getElementById("rapper").innerHTML = aquarius.rapper;
  document.getElementById("sign").innerHTML = 'Aquarius';
  document.getElementById("rapInfo").innerHTML = aquarius.description;
  document.getElementById("rapperImg").innerHTML = '<img src="img/jcole.jpg" />';
  music.src = "mp3/crookedsmile.mp3";

  if(isMusicOn){
    music.play();
  }
}

function pisces(){
  var pisces = {
    rapper: 'Earl Sweatshirt',
    description: 'Pisces is the 12th and last sign of the zodiac. Those who are Pisces are extremely sensitive and reserved. They like to escape from reality. A Pisces is a very good listener and friend.',
  }
  document.body.style.background = "linear-gradient(90deg, #11998e,  #38ef7d)";
  document.getElementById("rapper").innerHTML = pisces.rapper;
  document.getElementById("sign").innerHTML = 'Pisces';
  document.getElementById("rapInfo").innerHTML = pisces.description;
  document.getElementById("rapperImg").innerHTML = '<img src="img/earl.jpg" />';
  music.src = "mp3/chum.mp3";

  if(isMusicOn){
    music.play();
  }
}




//this function runs when submit is clicked
function calcTest(){
  //info variables
  var rapperName = document.getElementById("rapper");
  var rapperSign = document.getElementById("sign");
  var rapperInfo = document.getElementById("rapInfo");
  var rapperImg = document.getElementById("rapperImg");
  var input = document.getElementById("input");
  
  
  //zodiac symbol vars in correct order

  var aries = {
    rapper: 'Chance the Rapper',
    description: 'Aries is the first sign of the zodiac. Those who are Aries are independent and courageous. They enjoy leading others and bringing excitement into the lives of others. An Aries is enthusiastic and very goal-oriented.'
  }
  var taurus = {
    rapper: 'Pusha T',
    description: 'The second sign of the zodiac, those who are a Taurus are solid and fight for what they want. A Taurus is very easy going but can also be stubborn. A Taurus can be procrastinators but also have a good-work ethic.'
  }
  var gemini = {
    rapper: 'Kendrick Lamar',
    description: 'Gemini is the third sign of the zodiac. Geminis have many sides and are known for their energy. They are very talkative and are considered social butterflies. A Gemini will always take their lives in the direction they want to go.'
  }
  var cancer = {
    rapper: '50 Cent',
    description: 'Cancer is the fourth sign of the zodiac. This sign is marked by inconsistency. They enjoy security but also seek adventure. A Cancer is not very predictable and always keep others guessing.'
  }
  var leo = {
    rapper: 'Lil Uzi Vert',
    description: 'Leo is the fifth sign in the zodiac. Leos have high self esteem and are very devoted. They are also very kind and generous. A Leo is known for being hot tempered yet forgiving.'
  }
  var virgo = {
    rapper: 'Nas',
    description: 'The sixth sign of the zodiac, Virgo is very mind oriented. They are constantly analyzing and thinking. They enjoy bettering themselves and those around them.'
  }
  var libra = {
    rapper: 'Lil Wayne',
    description: 'The seventh sign of the zodiac, Libras are known for their diplomatic nature. They get along well with everyone and are ambitious. They have very expensive taste and work hard to make money.'
  }
  var scorpio = {
    rapper: 'Drake',
    description: 'The eight sign of the zodiac, Scorpios are very intense. They like to question everything and work hard at making sense of things. Scorpios treat others with kindness and loyalty.'
  }
  var sagittarius = {
    rapper: 'Jay-Z',
    description: 'The ninth sign of the zodiac, a Sagittarius has a very positive outlook on life. They have vibrant personalities and enjoy meeting new people. They can also be reckless.'
  }
  var capricorn = {
    rapper: 'Mac Miller',
    description: 'The 10th sign of the zodiac, those who are Capricorns are marked by their ambitious nature. They have very active minds and always have to be in control of their lives.'
  }
  var aquarius = {
    rapper: 'J. Cole',
     description: 'Aquarius is the 11th sign of the zodiac. Aquarians dont always care what others think about them. They take each opportunity they have and work towards formulating new ideas.'
  }
  var pisces = {
    rapper: 'Earl Sweatshirt',
    description: 'Pisces is the 12th and last sign of the zodiac. Those who are Pisces are extremely sensitive and reserved. They like to escape from reality. A Pisces is a very good listener and friend.',
  }
 
  
    //month and day variables
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;

    //figure out the zodiac symbol
    if((month == 2 && day >= 20) || (month == 3 && day <= 20)) {
        console.log('Pisces');
        rapperName.innerHTML = pisces.rapper;
        rapperSign.innerHTML = 'Pisces';
        rapperInfo.innerHTML = pisces.description;
        rapperImg.innerHTML = '<img src="img/earl.jpg" />';
        document.body.style.background = "linear-gradient(90deg, #11998e,  #38ef7d)";
        music.src = "mp3/chum.mp3";
      
        if(isMusicOn){
          music.play();
        }
        
      } 
      else if ((month == 1 && day >= 21) || (month == 2 && day <= 19)) {
        console.log('Aquarius');
        rapperName.innerHTML = aquarius.rapper;
        rapperSign.innerHTML = 'Aquarius';
        rapperInfo.innerHTML = aquarius.description;
        rapperImg.innerHTML = '<img src="img/jcole.jpg" />';
        document.body.style.background = "linear-gradient(90deg, #0575E6,  #021B79)";
        music.src = "mp3/crookedsmile.mp3";
     
        if(isMusicOn){
          music.play();
        }
        
      } 
      else if ((month == 12 && day >= 22) || (month == 1 && day <= 20)) {
        console.log('Capricorn');
        rapperName.innerHTML = capricorn.rapper;
        rapperSign.innerHTML = 'Capricorn';
        rapperInfo.innerHTML = capricorn.description;
        rapperImg.innerHTML = '<img src="img/macmiller.jpg" />';
        document.body.style.background = "linear-gradient(90deg, #134E5E,  #71B280)";
        music.src = "mp3/donaldtrump.mp3";
       
        if(isMusicOn){
          music.play();
        }
      } 
      else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        console.log('Sagittarius');
        rapperName.innerHTML = sagittarius.rapper;
        rapperSign.innerHTML = 'Sagittarius';
        rapperInfo.innerHTML = sagittarius.description;
        rapperImg.innerHTML = '<img src="img/jayz.jpg" />';
        document.body.style.background = "linear-gradient(90deg, #3494E6,  #EC6EAD)";
        music.src = "mp3/izzo.mp3";
      
        if(isMusicOn){
          music.play();
        }
      } 
      else if ((month == 10 && day >= 22) || (month == 11 && day <= 21)) {
        console.log('Scorpio');
        rapperName.innerHTML = scorpio.rapper;
        rapperSign.innerHTML = 'Scorpio';
        rapperInfo.innerHTML = scorpio.description;
        rapperImg.innerHTML = '<img src="img/drake.jpg" />';
        document.body.style.background = "linear-gradient(90deg, #000000,  #EB5757)";
        music.src = "mp3/godsplan.mp3";
       
        if(isMusicOn){
          music.play();
        }
      } 
      else if ((month == 9 && day >= 22) || (month == 10 && day <= 21)) {
        console.log('Libra');
        rapperName.innerHTML = libra.rapper;
        rapperSign.innerHTML = 'Libra';
        rapperInfo.innerHTML = libra.description;
        rapperImg.innerHTML = '<img src="img/lilwayne.jpg" />';
        document.body.style.background = "linear-gradient(90deg, #667db6,  #0082c8)";
        music.src = "mp3/amilli.mp3";
       
        if(isMusicOn){
          music.play();
        }
      } 
      else if ((month == 8 && day >= 23) || (month == 9 && day <= 21)) {
        console.log('Virgo');
        rapperName.innerHTML = virgo.rapper;
        rapperSign.innerHTML = 'Virgo';
        rapperInfo.innerHTML = virgo.description;
        rapperImg.innerHTML = '<img src="img/nas.jpg" />';
        document.body.style.background = "linear-gradient(90deg, #0f0c29,  #302b63)";
        music.src = "mp3/nystateofmind.mp3";
        
        if(isMusicOn){
          music.play();
        }
      } 
      else if ((month == 7 && day >= 22) || (month == 8 && day <= 22)) {
        console.log('Leo');
        rapperName.innerHTML = leo.rapper;
        rapperSign.innerHTML = 'Leo';
        rapperInfo.innerHTML = leo.description;
        rapperImg.innerHTML = '<img src="img/liluzivert.jpg" />';
        document.body.style.background = "linear-gradient(90deg, #ee0979,  #ff6a00)";
        music.src = "mp3/xotourlife.mp3";
     
        if(isMusicOn){
          music.play();
        }
      } 
      else if ((month == 6 && day >= 21) || (month == 7 && day <= 21)) {
        console.log('Cancer');
        rapperName.innerHTML = cancer.rapper;
        rapperSign.innerHTML = 'Cancer';
        rapperInfo.innerHTML = cancer.description;
        rapperImg.innerHTML = '<img src="img/50cent.jpg" />';
        document.body.style.background = "linear-gradient(90deg, #7F00FF,  #E100FF)";
        music.src = "mp3/indaclub.mp3";
       
        if(isMusicOn){
          music.play();
        }
      } 
      else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        console.log('Gemini');
        rapperName.innerHTML = gemini.rapper;
        rapperSign.innerHTML = 'Gemini';
        rapperInfo.innerHTML = gemini.description;
        rapperImg.innerHTML = '<img src="img/kendrick.jpg" />';
        document.body.style.background = "linear-gradient(90deg, #CAC531,  #F3F9A7)";
        music.src = "mp3/humble.mp3";
        
        if(isMusicOn){
          music.play();
        }
      } 
      else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        console.log('Taurus');
        rapperName.innerHTML = taurus.rapper;
        rapperSign.innerHTML = 'Taurus';
        rapperInfo.innerHTML = taurus.description;
        rapperImg.innerHTML = '<img src="img/pushat.jpg" />';
        document.body.style.background = "linear-gradient(90deg, #636363,  #a2ab58)";
        music.src = "mp3/untouchable.mp3";
       
        if(isMusicOn){
          music.play();
        }
      } 
      else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        console.log('Aries');
        rapperName.innerHTML = aries.rapper;
        rapperSign.innerHTML = 'Aries';
        rapperInfo.innerHTML = aries.description;
        rapperImg.innerHTML = '<img src="img/chance.jpg" />';
        document.body.style.background = "linear-gradient(90deg, #333333,  #dd1818)";
        
        music.src = "mp3/noproblem.mp3";
        
        if(isMusicOn){
          music.play();
        }
        
      } 
      //handle false inputs
      
        if (day == 0 || day > 31 || month > 12 || day < 0){
        rapperName.innerHTML = ' ';
        rapperSign.innerHTML = ' ';
        rapperInfo.innerHTML = ' ';
        rapperImg.innerHTML = ' ';
        //shake animation
        var hasShake = false;
        if(!hasShake){
          console.log('shake!');
          input.classList.add("shake");
          
        }
        if(hasShake){
          console.log('take shake');
          input.classList.toggle("shake");
          
          
          
        }
      } 

}


