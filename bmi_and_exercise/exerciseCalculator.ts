interface result {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string
    target: number,
    average: number,

}

const calculateExercises = (values: Array<number>, target: number): result => {
    const period = values.length
    const trainingDays = values.filter(day => day !== 0).length

    let sum = 0
    values.map(day => sum += day)
    const avg = sum / period

    let rating
    let ratingDescription
    if (avg >= target) {
        rating = 3
        ratingDescription = 'good job'
    } else if (avg >= (target*0.5)) {
        rating = 2
        ratingDescription = 'not too bad but could be better'
    } else {
        rating = 1
        ratingDescription = 'not good'
    }

    return {
        periodLength: period,
        trainingDays: trainingDays,
        success: avg >= target,
        rating: rating,
        ratingDescription: ratingDescription,
        target: target,
        average: avg
    }
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))
console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 4))
