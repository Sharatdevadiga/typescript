type Movie = {
  readonly title: string;
  otiginalTitle?: string;
  director: string;
  releaseYear: number;
  boxOffice: {
    budget: number;
    grossUs: number;
    grossWorldwide: number;
  };
};

function getProfit(movie: Movie): number {
  return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
}

//
type Movie2 = {
  readonly title: string;
  originalTitle?: string;
  director: string;
  releaseYear: number;
  boxOffice: {
    budget: number;
    grossUS: number;
    grossWorldWide: number;
  };
};

function getProfit2(movie: Movie2): number {
  return movie.boxOffice.grossWorldWide - movie.boxOffice.budget;
}

function getProfit3(movie: Movie2): number {
  const { grossWorldWide, budget } = movie.boxOffice;
  return grossWorldWide - budget;
}
