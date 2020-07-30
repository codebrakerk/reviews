// local reviews data
const reviews = [
  {
    id: 1,
    name: "meenakshi",
    job: "web developer",
    img:
      "meena.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "shankar pradhana",
    job: "web designer",
    img:
"shankar.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "harish chinna",
    job: "chef",
    img:
      "harish.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "suresh pradhana ",
    job: "web dev",
    img:"suresh.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  
  
  {
    id: 5,
    name: "Aishu ",
    job: "web dev",
    img:"aishu.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  
  
  {
    id: 6,
    name: "vyshnav ",
    job: "web dev",
    img:"vyshnav.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  
  
  {
    id: 7,
    name: "keshav ",
    job: "web dev",
    img:"keshav.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
  
  
  {
    id: 8,
    name: "viresh ",
    job: "web dev",
    img:"viresh.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
 
  
  
];
const nextBtn=document.querySelector(".next-btn");

const prevBtn=document.querySelector(".prev-btn");
const randomBtn=document.querySelector(".random-btn");
const img=document.getElementById("person-img");

const author=document.getElementById("author");
const job=document.getElementById("job");
const info=document.getElementById("info");
let current=0;
window.addEventListener("DOMContentLoaded",
function(){
  const initial=reviews[current];
  img.src=initial.img;
  author.textContent=initial.name;
  job.textContent=initial.job;
  info.textContent=initial.text;
}
);
function showReview(person){
  const initial=reviews[person];
  img.src=initial.img;
  author.textContent=initial.name;
  job.textContent=initial.job;
  info.textContent=initial.text;
  
};




nextBtn.addEventListener("click",function(){
  current++;
  if(current>reviews.length-1){
    current=0;
  }
  showReview(current);
});
prevBtn.addEventListener("click",function(){
  current--;
  if(current<0){
    current=reviews.length-1;
  }
  showReview(current);
});
randomBtn.addEventListener("click",function(){
  current = Math.floor(Math.random()*reviews.length);
  showReview(current);
});
console.log(reviews.length);
