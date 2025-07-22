
  const players = [
    {
      name: "Lionel Messi",
      image: "https://cdn.vox-cdn.com/thumbor/3BQdy_oyEemtF_a_TNkaljA01kA=/0x0:4488x2992/1200x800/filters:focal(0x0:4488x2992)/cdn.vox-cdn.com/uploads/chorus_image/image/46460958/GettyImages-475295100.0.jpg",
      position: "Forward",
      goals: "872+",
      assists: "385+",
      trophies: "42",
      rating: 5,
      club: "Inter Miami",
      clubLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_2SpwTJ4Mg1SNmI5W6Wtk07J6ihx__ZqA2g&s",
      nation: "Argentina",
      flag: "https://flagcdn.com/w40/ar.png"
    },
    {
      name: "Cristiano Ronaldo",
      image: "https://dims.apnews.com/dims4/default/8a7008b/2147483647/strip/true/crop/4499x3000+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Feb%2F18%2Fbc0cbeb4d9217894c93e39432c02%2F790279728e684d70bdc3ed5dd815974e",
      position: "Forward",
      goals: "938+",
      assists: "257+",
      trophies: "34",
      rating: 5,
      club: "Al Nassr",
      clubLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh7Bu1YmpHwys4huwtya6DcVTClisP3HSq7w&s",
      nation: "Portugal",
      flag: "https://flagcdn.com/w40/pt.png"
    },
    {
      name: "Neymar Jr",
      image: "https://s2.dmcdn.net/v/X-NGe1dmY_awd0CPl/x1080",
      position: "Forward",
      goals: "364+",
      assists: "227+",
      trophies: "27",
      rating: 4,
      club: "Santos fc",
      clubLogo: "https://upload.wikimedia.org/wikipedia/commons/1/15/Santos_Logo.png",
      nation: "Brazil",
      flag: "https://flagcdn.com/w40/br.png"
    },
    {
      name: "Kylian Mbappé",
      image: "https://c.ndtvimg.com/2023-12/k1bm4he_kylian-mbappe-afp_625x300_21_December_23.jpg?im=FitAndFill,algorithm=dnn,width=806,height=605",
      position: "Forward",
      goals: "334+",
      assists: "133+",
      trophies: "13",
      rating: 4,
      club: "Real Madrid",
      clubLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png",
      nation: "France",
      flag: "https://flagcdn.com/w40/fr.png"
    },
    {
      name: "Erling Haaland",
      image: "https://media.gettyimages.com/id/1497605945/photo/fc-internazionale-v-manchester-city-fc-uefa-champions-league-final-2022-23.jpg?s=1024x1024&w=gi&k=20&c=5R64hSlSZYvNIIAUT5QjnrVGXVWrxLW_HKT0elkUo40=",
      position: "Striker",
      goals: "259+",
      assists: "57+",
      trophies: "8",
      rating: 4,
      club: "Manchester City",
      clubLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png",
      nation: "Norway",
      flag: "https://flagcdn.com/w40/no.png"
    },
    {
      name: "Kevin De Bruyne",
      image: "https://www.tsn.ca/polopoly_fs/1.1781300!/fileimage/httpImage/image.jpg_gen/derivatives/landscape_620/kevin-de-bruyne.jpg",
      position: "Midfielder",
      goals: "155+",
      assists: "261+",
      trophies: "19",
      rating: 4,
      club: "Manchester City",
      clubLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png",
      nation: "Belgium",
      flag: "https://flagcdn.com/w40/be.png"
    }
  ];

  const gallery = document.getElementById("gallery");
  const modal = document.getElementById("playerModal");

  players.forEach(player => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${player.image}" alt="${player.name}">
      <div class="info">
        <h3>${player.name}</h3>
        <p>${player.position}</p>
        <div class="logos">
          <img src="${player.flag}" title="${player.nation}" alt="nation flag">
          <img src="${player.clubLogo}" title="${player.club}" alt="club logo">
        </div>
      </div>
    `;
    card.onclick = () => openModal(player);
    gallery.appendChild(card);
  });

  function openModal(player) {
    document.getElementById("modalName").innerText = player.name;
    document.getElementById("modalPosition").innerText = player.position;
    document.getElementById("modalGoals").innerText = player.goals;
    document.getElementById("modalAssists").innerText = player.assists;
    document.getElementById("modalTrophies").innerText = player.trophies;
    document.getElementById("modalRating").innerText = '★'.repeat(player.rating);
    document.getElementById("modalClub").innerText = player.club;
    document.getElementById("modalNation").innerText = player.nation;
    modal.style.display = "flex";
  }

  function closeModal() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target === modal) {
      closeModal();
    }
  }
