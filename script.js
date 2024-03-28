let main = document.getElementById("main-news");  // first section of main
let second = document.getElementById("second-sec"); // second section of first main
let third = document.getElementById("third-sec"); // third section of first main
let fia = document.getElementById("fia"); // news box related to fia
window.addEventListener('resize', function() {
    if (window.innerWidth < 1110) {
      main.classList.add('flex-wrap');
      second.classList.remove('ms-4');
      third.classList.remove('ms-4');
    } else {
      main.classList.remove('flex-wrap');
      second.classList.add('ms-4');
      third.classList.add('ms-4');
    }
  });

  let secondMain = document.getElementById("2nd-main-sec"); // second section of main
  let secNews = document.getElementById("s3n2");
  let thirdMain = document.getElementById("s3");
  let fourthMain = document.getElementById("4th-main-sec"); // fourth section of main
  let fifthMain = document.getElementById("5th-main-sec"); // fifth section
  let seventhMain = document.getElementById("7th-main-sec"); // fifth section
  let ninthMain = document.getElementById("9th-main-sec"); // fifth section
  window.addEventListener('resize', function() {
    if(window.innerWidth < 580){
      secondMain.classList.add("flex-wrap");
      secondMain.classList.remove("justify-content-between");
      secNews.classList.remove("ms-2")
      secNews.classList.add("ms-0")
      secondMain.classList.add("justify-content-center");
      fourthMain.classList.add("flex-wrap");
      fourthMain.classList.remove("justify-content-between");
      fourthMain.classList.add("justify-content-center");
      fifthMain.classList.add("flex-wrap");
      fifthMain.classList.remove("justify-content-between");
      fifthMain.classList.add("justify-content-center");
      seventhMain.classList.add("flex-wrap");
      seventhMain.classList.remove("justify-content-between");
      seventhMain.classList.add("justify-content-center");
      ninthMain.classList.add("flex-wrap");
      ninthMain.classList.remove("justify-content-between");
      ninthMain.classList.add("justify-content-center");
      thirdMain.classList.add("flex-wrap");
    }
    else{
      secondMain.classList.remove("flex-wrap");
      secondMain.classList.remove("justify-content-center");
      secNews.classList.add("ms-2")
      secNews.classList.remove("ms-0")
      secondMain.classList.add("justify-content-between");
      fourthMain.classList.remove("flex-wrap");
      fourthMain.classList.remove("justify-content-center");
      fourthMain.classList.add("justify-content-between");
      fifthMain.classList.remove("flex-wrap");
      fifthMain.classList.remove("justify-content-center");
      fifthMain.classList.add("justify-content-between");
      seventhMain.classList.remove("flex-wrap");
      seventhMain.classList.remove("justify-content-center");
      seventhMain.classList.add("justify-content-between");
      ninthMain.classList.remove("flex-wrap");
      ninthMain.classList.remove("justify-content-center");
      ninthMain.classList.add("justify-content-between");
      thirdMain.classList.remove("flex-wrap");
    }
  });

  let firstColofSec6 = document.getElementById("r1c1");
  let secondColofSec6 = document.getElementById("r1c2");
  let thirdColofSec6 = document.getElementById("r1c3");
  let part1sec8 = document.getElementById("s8p1");
  let part2sec8 = document.getElementById("s8p2");
  let part3sec8 = document.getElementById("s8p3");
  let part4sec8 = document.getElementById("s8p4");
  let part5sec8 = document.getElementById("s8p5");
  let part6sec8 = document.getElementById("s8p6");
  window.addEventListener("resize", ()=>{
    if(window.innerWidth < 580){
      firstColofSec6.classList.remove("col-5");
      firstColofSec6.classList.add("col-12");
      firstColofSec6.classList.add("ms-2");
      secondColofSec6.classList.add("col-12");
      thirdColofSec6.classList.add("col-12");
      part1sec8.classList.add("flex-wrap");
      part2sec8.classList.add("flex-wrap");
      part3sec8.classList.add("flex-wrap");
      part4sec8.classList.add("flex-wrap");
      part5sec8.classList.add("flex-wrap");
      part6sec8.classList.add("flex-wrap");
    }
    else{
      firstColofSec6.classList.remove("col-12");
      firstColofSec6.classList.add("col-5");
      firstColofSec6.classList.remove("ms-2");
      secondColofSec6.classList.remove("col-12");
      thirdColofSec6.classList.remove("col-12");
      part1sec8.classList.remove("flex-wrap");
      part2sec8.classList.remove("flex-wrap");
      part3sec8.classList.remove("flex-wrap");
      part4sec8.classList.remove("flex-wrap");
      part5sec8.classList.remove("flex-wrap");
      part6sec8.classList.remove("flex-wrap");
    }
  })

  let eigthMain = document.getElementById("8th-main-sec"); // eight section
 
  window.addEventListener("resize", ()=>{
    if(window.innerWidth < 1000){
      eigthMain.classList.add("flex-wrap");
      
      
    }
    else{
      eigthMain.classList.remove("flex-wrap");
      
    }
  })

  // let fp1 = document.getElementById("fp-1");
  // window.addEventListener("resize", ()=>{
  //   if(window.innerWidth < 780){
  //     fp1.classList.add("flex-wrap");
      
      
  //   }
  //   else{
  //     fp1.classList.remove("flex-wrap");
      
  //   }
  // })
