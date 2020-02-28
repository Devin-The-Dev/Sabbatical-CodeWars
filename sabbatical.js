function sabb(x, val, happ) {
    let score = val + happ;
    let sabbatical = ["s", "a", "b", "t", "i", "c", "l"];
    for (i = 0; i < sabbatical.length; i++) {
        for (j = 0; j < x.length; j++) {
            if (sabbatical[i] === x[j]) {
                score += 1;
            }
        }
    }
    if (score > 22) {
        return "Sabbatical! Boom!";
    } else {
        return "Back to your desk, boy.";
    }
}