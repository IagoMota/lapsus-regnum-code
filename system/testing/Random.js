class Random {
    Y(height = 0) {
        return Math.floor(Math.random() * (window.innerHeight - height));
    }
    X(width = 0) {
        return Math.floor(Math.random() * (window.innerWidth - width));
    }
}

export default new Random();