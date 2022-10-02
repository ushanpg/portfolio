
export default function CheckView(){

document.addEventListener("DOMContentLoaded", () => {

  const squares = document.querySelectorAll(".square");


  // Create the observer:
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("square-transition")
        }else{
          entry.target.classList.remove("square-transition")
        }
          })
  })
    
  squares.forEach(eachSquare => {
    observer.observe(eachSquare);
    })

})
}

