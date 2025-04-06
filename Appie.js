const btn = document.querySelectorAll(".servic-btn")
const body = document.querySelector("body")
const topBtn = document.querySelector(".bottom-to-top")
const buttons = document.querySelectorAll("btns")
const bars = document.getElementById("bars")
const nav_about = document.querySelector("#about")
const lists = document.querySelectorAll(".about-appie")
const pages = document.querySelectorAll(".about-list")
const closeBtn = document.querySelector(".close-about");
const tabItem = document.querySelectorAll(".tab-icons")
const toggle =  document.querySelector(".toggle")
const onOff =  document.querySelector(".on-off")
const para = document.querySelectorAll(".anual-price")
const showAnswer = document.querySelectorAll(".show-answer");
const allAns = document.querySelectorAll(".Answer");
const slides = document.querySelectorAll(".rating");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
const sliderWrapper = document.querySelector(".slider-wrapper");

let currentIdx = 0;

function showSlider() {
    const offset = -currentIdx * 100;
    sliderWrapper.style.transform = `translateX(${offset}%)`;
  }

rightArrow.addEventListener('click', () => {
    currentIdx--;
    if (currentIdx < 0) currentIdx = slides.length - 1;
    // currentIdx = (currentIdx - 1 + slides.length) % slides.length;
    showSlider();
  });
  
  // ➤ Go backward (loop to last from first)
  leftArrow.addEventListener('click', () => {
    console.log("click");
    
    currentIdx++;
    if (currentIdx >= slides.length) currentIdx = 0 ;
    showSlider();
  });

  
//Go bottom to top
window.onscroll = function () {
    if (body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

};

//Back to top click on any btn
    topBtn.onclick = function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


//About section
lists.forEach((item) => {
    item.addEventListener('click', function () {


        pages.forEach((page) => {
            page.style.display = "none";
        });


        const link = this.closest("li").querySelector(".about-list");
        if (link) {
            link.style.display = "block";
        }

    });
});


//Bar effect
bars.onclick = function () {
    nav_about.style.display = "block";
    console.log();
    
};


//close about section
closeBtn.addEventListener('click', function () {

    pages.forEach((list) => {
        list.style.display = "none";
    });
    nav_about.style.display = "none";
})

//Tab buttons
tabItem.forEach(item => {
    item.addEventListener('click', () => {
    
      tabItem.forEach(icon => 
        icon.classList.remove('active'));
  
       item.classList.add('active');
    });
  });



//Go to next page
btn.forEach((nextPage) => {

    nextPage.onclick = async function () {
        nextPage.style.opacity = "0.5";
        await someAsyncFunction();
        window.location.href = "appiePage2.html";
    }

    async function someAsyncFunction() {
        return new Promise((resolve) => setTimeout(resolve, 1000));
    
    }
})





//Monthly and Yearly price
toggle.addEventListener('click',() => {
    onOff.classList.toggle('switch');

    para.forEach(p => {
        if(onOff.classList.contains('switch')) {
            p.innerText = "/Yearly";
            document.querySelector(".Ist-card").innerHTML = "32";
            document.querySelector(".IInd-card").innerHTML = "116";
            document.querySelector(".IIIrd-card").innerHTML = "227";
          
           }
           else{
                p.innerText = "/month";
                document.querySelector(".Ist-card").innerHTML = "04";
                document.querySelector(".IInd-card").innerHTML = "16";
                document.querySelector(".IIIrd-card").innerHTML = "27";
           }
    })
   
    
})

//Questions
showAnswer.forEach((answerBtn) => {
    answerBtn.addEventListener('click', function () {
     
      allAns.forEach((answer) => {
        answer.style.display = "none";
      });

      showAnswer.forEach(btn => {
        btn.style.backgroundColor = ""; 
       
      });
      answerBtn.style.backgroundColor = "#0746e6";
    
      const ans = this.closest(".question").querySelector(".Answer");
      if (ans) {
        ans.style.display = "block";
      }
    });
  });