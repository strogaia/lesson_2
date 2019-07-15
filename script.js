//допустим у нас есть некоторые данные о сериале "Black Mirror"
name = "Black Mirror"
// сезон 1
// серии и их длительность в минутах
s_01_e01 = 40 
s_01_e02 = 45
s_01_e03 = 40
s_01_e04 = 45
s_01_e05 = 30

// сезон 2
// серии и их длительность в минутах
s_02_e01 = 45 
s_02_e02 = 45
s_02_e03 = 45
s_02_e04 = 45

// Требуется
// 1) при помощи функции Math.round() для округления и при помощи оператора "/"
//   также при помощи оператора "%" - остаток от деления
//   показать в консоли длительность каждого сезона следующим образом:
//   > Series: "Black Mirror"
//   > Season 1  -  3h 20m  
//   > Season 2  -  3h 00m  
season_1_hour = Math.round((s_01_e01 + s_01_e02 + s_01_e03 + s_01_e04 + s_01_e05)/60);
season_1_minut = (s_01_e01 + s_01_e02 + s_01_e03 + s_01_e04 + s_01_e05)%60 ;

season_2_hour = Math.round((s_02_e01 + s_02_e02 + s_02_e03 + s_02_e04)/60);
season_2_minut = (s_02_e01 + s_02_e02 + s_02_e03 + s_02_e04)%60 ;

console.log("Series: " + name);
console.log("Season 1 - " + season_1_hour + "h " + season_1_minut + "m");
console.log("Season 2 - " + season_2_hour + "h " + season_2_minut +"m" );

// 2) с помощью "if/else" показать сезон с большей длительностью используя такой принцип:
//   > "Season 1 is longuer."


if (season_1_hour > season_2_hour){
  console.log("Season 1 is longuer.");
}
else if((season_1_hour = season_2_hour) &&(season_1_minut > season_2_minut)){
  console.log("Season 1 is longuer.");
}
else {
  console.log("Season 2 is longuer.");
  }
