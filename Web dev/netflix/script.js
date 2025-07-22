// Simple search simulation
document.getElementById("search").addEventListener("keyup", function (e) {
  const keyword = e.target.value.toLowerCase();
  const posters = document.querySelectorAll(".poster");

  posters.forEach((poster) => {
    const altText = poster.alt.toLowerCase();
    if (altText.includes(keyword)) {
      poster.style.display = "inline-block";
    } else {
      poster.style.display = "none";
    }
  });
});

// Optional: Add left-right scroll (carousel-like effect)
const rows = document.querySelectorAll(".row-posters");
rows.forEach((row) => {
  row.addEventListener("wheel", (e) => {
    e.preventDefault();
    row.scrollLeft += e.deltaY;
  });
});
