import { useEffect } from "react";
import { Typography } from "@mui/material";
import axios from "axios";
import { API_KEY } from "../../helpers/api";
const HomePage = () => {
  let x = 0;
  // 1. useEffect to hook który służy do podpinania się pod konkretny moment cyklu życia komponentu.
  // 2. Cykl życia komponentu:
  // a) zamontowanie (wyświetlenie)
  // b) zmiana jakiejś wartości (moment w którym coś w komponencie się zmienia, np. przychodzi jakiś nowy props lub aktualizuje się stan)
  // c) odmontowanie (komponent znika z ekranu)
  // 3. useEffect przyjmuje 2 argumenty
  // a) funkcja wykonująca się w zadeklarowanym momencie cyklu życia komponentu
  // b) lista dependencji (argument opcjonalny)
  // - brak listy dependencji = UE będzie strzelało cały czas jak zwykła funkcja
  // - lista dependencji pusta = UE będzie strzelało tylko przy pierwszym zamontowaniu
  // - zapełniona lista dependecji = UE będzie strzelało kiedy zmieni się wartość któregoś z elementów listy dependecji
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear(); // 2023
    const month = today.getMonth() + 1; // 1
    const day = today.getDate(); //29

    // W parametrze from ustaw date, tak żeby miesiąc i dzień miały przed dopisane 0 jeżeli są mniejsze od 10.
    // Może nie działać przez strefy czasowe
    axios
      .get(
        `https://newsapi.org/v2/everything?q=world&language=en&sortBy=popularity&from=${"rok"}-${"miesiac"}-${"dzien"}&apiKey=${API_KEY}`
      )
      .then((data) => console.log(data.data.articles));
  }, []);

  return (
    <>
      <Typography
        variant="h2"
        align="center"
        sx={{ fontSize: "2rem", mt: ".8rem" }}
      >
        Today's hottest news
      </Typography>
    </>
  );
};

export default HomePage;
