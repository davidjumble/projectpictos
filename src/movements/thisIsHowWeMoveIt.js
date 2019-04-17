// organised top to bottom based off the UI positions

const movements = {

  plants: {
    plants: { "left": "40%", "top": "9%", "width": "54%" },
    about: { "left": "64%", "top": "20%", "width": "25%" },
    ears: { "left": "54%", "top": "14%", "width": "32%" },
    music: { "left": "60%", "top": "17%", "width": "30%" },
    councils: { "left": "50%", "top": "12%", "width": "24%" },
    butts: { "left": "55%", "top": "17%", "width": "27%" },
    trains: { "left": "68%", "top": "20%", "width": "25%" },
    choirs: { "left": "64%", "top": "10%", "width": "30%" },
    tears: { "left": "49%", "top": "18%", "width": "32%" },
  },
  about: {
    about: { "left": "5%", "top": "12%", "width": "60%" },
    tears: { "left": "15%", "top": "26%", "width": "31%" },
    ears: { "left": "14%", "top": "17%", "width": "31%" },
    music: { "left": "20%", "top": "20%", "width": "30%" },
    plants: { "left": "8%", "top": "20%", "width": "30%" },
    councils: { "left": "20%", "top": "20%", "width": "30%" },
    butts: { "left": "18%", "top": "20%", "width": "30%" },
    trains: { "left": "8%", "top": "20%", "width": "30%" },
    choirs: { "left": "8%", "top": "20%", "width": "28%" },

  },
  choirs: {
    tears: { "left": "45%", "top": "38%", "width": "32%" },
    choirs: { "left": "37%", "top": "25%", "width": "51%" },
    ears: { "left": "37%", "top": "30%", "width": "32%" },
    music: { "left": "42%", "top": "35%", "width": "28%" },
    plants: { "left": "50%", "top": "38%", "width": "30%" },
    councils: { "left": "58%", "top": "30%", "width": "28%" },
    butts: { "left": "40%", "top": "34%", "width": "30%" },
    trains: { "left": "40%", "top": "26%", "width": "25%" },
    about: { "left": "41%", "top": "35%", "width": "27%" },
  },
  councils: {
    councils: { "left": "1%", "top": "35%", "width": "60%" },
    tears: { "left": "9%", "top": "42%", "width": "38%" },
    ears: { "left": "4%", "top": "35%", "width": "35%" },
    music: { "left": "8%", "top": "40%", "width": "40%" },
    plants: { "left": "9%", "top": "40%", "width": "38%" },
    butts: { "left": "9%", "top": "40%", "width": "34%" },
    trains: { "left": "0%", "top": "35%", "width": "35%" },
    choirs: { "left": "5%", "top": "36%", "width": "34%" },
    about: { "left": "4%", "top": "40%", "width": "40%" },
  },
  ears: {
    ears: { "left": "1%", "top": "48%", "width": "55%" },
    tears: { "left": "8%", "top": "60%", "width": "28%" },
    music: { "left": "1%", "top": "58%", "width": "28%", "transform": "rotate(-90deg)" },
    plants: { "left": "19%", "top": "54%", "width": "32%" },
    councils: { "left": "19%", "top": "58%", "width": "34%" },
    butts: { "left": "25%", "top": "53%", "width": "32%" },
    trains: { "left": "4%", "top": "50%", "width": "30%" },
    choirs: { "left": "14%", "top": "50%", "width": "28%" },
    about: { "left": "20%", "top": "54%", "width": "30%" },
  },



  trains: {
    choirs: { "left": "65%", "top": "56%", "width": "37%" },
    about: { "left": "55%", "top": "50%", "width": "37%" },
    plants: { "left": "52%", "top": "56%", "width": "34%" },
    councils: { "left": "60%", "top": "48%", "width": "34%" },
    ears: { "left": "60%", "top": "45%", "width": "34%" },
    trains: { "left": "32%", "top": "40%", "width": "68%" },
    music: { "left": "72%", "top": "55%", "width": "35%", "transform": "rotate(40deg)" },
    butts: { "left": "60%", "top": "50%", "width": "36%" },
    tears: { "left": "63%", "top": "55%", "width": "35%" },
  },

  music: {
    about: { "left": "50%", "top": "65%", "width": "22%" },
    plants: { "left": "46%", "top": "70%", "width": "24%" },
    choirs: { "left": "38%", "top": "60%", "width": "25%" },
    councils: { "left": "52%", "top": "64%", "width": "25%" },
    ears: { "left": "55%", "top": "60%", "width": "24%" },
    trains: { "left": "50%", "top": "67%", "width": "20%" },
    music: { "left": "30%", "top": "54%", "width": "48%" },
    butts: { "left": "52%", "top": "67%", "width": "22%" },
    tears: { "left": "38%", "top": "55%", "width": "22%" },
  },

  butts: {
    tears: { "left": "10%", "top": "76%", "width": "25%" },
    ears: { "left": "10", "top": "85%", "width": "28%" },
    music: { "left": "12%", "top": "82%", "width": "30%" },
    plants: { "left": "18%", "top": "75%", "width": "25%" },
    councils: { "left": "14%", "top": "78%", "width": "25%" },
    trains: { "left": "11%", "top": "70%", "width": "29%" },
    choirs: { "left": "17%", "top": "76%", "width": "29%" },
    butts: { "left": "5%", "top": "74%", "width": "50%" },
    about: { "left": "10%", "top": "72%", "width": "26%" },
  },
  tears: {
    tears: { "left": "35%", "top": "70%", "width": "60%" },
    ears: { "left": "38%", "top": "80%", "width": "30%", "transform": "rotate(-20deg)" },
    music: { "left": "62%", "top": "78%", "width": "30%", "transform": "rotate(-40deg)" },
    plants: { "left": "55%", "top": "82%", "width": "30%", "transform": "rotate(-40deg)" },
    councils: { "left": "44%", "top": "82%", "width": "34%" },
    butts: { "left": "60%", "top": "80%", "width": "30%", "transform": "rotate(-20deg)" },
    trains: { "left": "38%", "top": "79%", "width": "40%" },
    choirs: { "left": "55%", "top": "77%", "width": "34%" },
    about: { "left": "42%", "top": "77%", "width": "34%" },
  },

};

export default movements;