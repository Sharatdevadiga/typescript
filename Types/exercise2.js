function getProfit(movie) {
    return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
}
function getProfit2(movie) {
    return movie.boxOffice.grossWorldWide - movie.boxOffice.budget;
}
function getProfit3(movie) {
    var _a = movie.boxOffice, grossWorldWide = _a.grossWorldWide, budget = _a.budget;
    return grossWorldWide - budget;
}
