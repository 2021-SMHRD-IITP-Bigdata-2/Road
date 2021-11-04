ratingToPercent() {
    const score = +this.restaurant.averageScore * 20;
    return score + 1.5;
}