import React, { useState } from "react";
import "./styles.css";

//database
const AllSeries = {
  Comedy: [
    {
      Title: " Space Jam: A New Legacy (2021) ",
      Description:
        "A rogue artificial intelligence kidnaps the son of famed basketball player LeBron James, who then has to work with Bugs Bunny to win a basketball game.",
      Image:
        "https://m.media-amazon.com/images/M/MV5BZTAzN2ZlZTEtOTA5ZS00MGFjLTliYWMtYTQzYTFlYTIwZDVmXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_UX67_CR0,0,67,98_AL_.jpg",
      Rating: `8.9/10`
    },
    {
      Title: " Atypical ",
      Description:
        "Sam, an 18-year-old on the autism spectrum, decides it's time to find a girlfriend, a journey that sets Sam's mom on her own life-changing path as her son seeks more independence.",
      Image:
        "https://m.media-amazon.com/images/M/MV5BMjNjNThmYTUtMjY2Ni00OGE4LTgzOTItYTgzMDllNDM5NTI5XkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_UX67_CR0,0,67,98_AL_.jpg",
      Rating: `8.1/10`
    },
    {
      Title: " Rick and Morty (2013– )",
      Description:
        "An animated series that follows the exploits of a super scientist and his not-so-bright grandson.",
      Image:
        "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_UX67_CR0,0,67,98_AL_.jpg",
      Rating: `7.4/10`
    }
  ],
  Drama: [
    {
      Title: " The Tomorrow War ",
      Image:
        "https://m.media-amazon.com/images/M/MV5BNTI2YTI0MWEtNGQ4OS00ODIzLWE1MWEtZGJiN2E3ZmM1OWI1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX67_CR0,0,67,98_AL_.jpg",
      Description:
        "A family man is drafted to fight in a future war where the fate of humanity relies on his ability to confront the past.",
      Rating: `9/10`
    },

    {
      Title: " Fear Street: Part Two - 1978",
      Description:
        "Shadyside, 1978. School's out for summer and the activities at Camp Nightwing are about to begin. But when another Shadysider is possessed with the urge to kill, the fun in the sun becomes a gruesome fight for survival.",
      Image:
        "https://m.media-amazon.com/images/M/MV5BOTQxMWNiZmYtOGUzMi00OGU5LTkzMjctYWY4ZmJkZjZiYWI5XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX67_CR0,0,67,98_AL_.jpg",
      Rating: `8.7/10`
    },

    {
      Title: " A Quiet Place Part II",
      Description:
        "Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize the creatures that hunt by sound are not the only threats lurking beyond the sand path.",
      Image:
        "https://m.media-amazon.com/images/M/MV5BMTE2ODU4NDEtNmRjNS00OTk1LTg4NmMtNTAzYzVlNzJmYjgzXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX67_CR0,0,67,98_AL_.jpg",
      Rating: `8.6/10`
    }
  ],

  Crime: [
    {
      Title: " F9: The Fast Saga ",
      Image:
        "https://m.media-amazon.com/images/M/MV5BMjI0NmFkYzEtNzU2YS00NTg5LWIwYmMtNmQ1MTU0OGJjOTMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UX67_CR0,0,67,98_AL_.jpg",
      Description:
        "Cipher enlists the help of Jakob, Dom's younger brother to take revenge on Dom and his team.",
      Rating: `9.5/10`
    },
    {
      Title: " Wrath of Man (2021)",
      Description:
        "The plot follows H, a cold and mysterious character working at a cash truck company responsible for moving hundreds of millions of dollars around Los Angeles each week.",
      Image:
        "https://m.media-amazon.com/images/M/MV5BNGVkOTlhOTktNjZiNS00NDg3LWIxMDAtZTY5Y2E0YjllN2IxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX67_CR0,0,67,98_AL_.jpg",
      Rating: `8.7/10`
    },
    {
      Title: " Nobody (2021)",
      Image:
        "https://m.media-amazon.com/images/M/MV5BMjM5YTRlZmUtZGVmYi00ZjE2LWIyNzAtOWVhMDk1MDdkYzhjXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UX67_CR0,0,67,98_AL_.jpg",
      Description:
        "A bystander who intervenes to help a woman being harassed by a group of men becomes the target of a vengeful drug lord.",
      Rating: `8.4/10`
    }
  ]
};

const genreNames = Object.keys(AllSeries);

export default function App() {
  const [seriesList, setSeriesList] = useState(AllSeries.Crime);

  function genreClickHandler(genre) {
    const series = AllSeries[genre];
    setSeriesList(series);
  }

  function getSeriesPost(series) {
    const title = series.Title;
    const imageUrl = series.Image;
    const desc = series.Description;
    const rating = series.Rating;
    const htmlOfList = (
      <li className="list-item">
        <img alt="poster" src={imageUrl} />
        <div>
          <h3>{title}</h3>
          <p className="description">{desc}</p>
          <p style={{ fontWeight: "bold" }}>{rating}</p>
        </div>
      </li>
    );
    return htmlOfList;
  }

  return (
    <div className="App">
      <h1>Best Movies</h1>
      <p>Checkout best Movies. Select a genre to Enjoy</p>
      <div>
        {genreNames.map((genre) => {
          return (
            <button
              key={genre}
              className="btn"
              onClick={() => genreClickHandler(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>

      <hr />
      <ul className="list">
        {seriesList.map((series) => {
          return getSeriesPost(series);
        })}
      </ul>
    </div>
  );
}
