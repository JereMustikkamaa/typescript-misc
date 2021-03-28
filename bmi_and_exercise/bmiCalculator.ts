const limits = (val: number, low: number, high: number): boolean => val >= low && val < high

const calculateBmi = (height_cm: number, weight_kg: number): String => {
    const bmi = weight_kg / ((height_cm/100)^2)
    if (bmi < 15) return 'Very severely underweight'
    else if (limits(bmi, 15, 16)) return 'Severely underweight'
    else if (limits(bmi, 16, 18.5)) return 'Underweight'
    else if (limits(bmi, 18.5, 25)) return 'Normal (healthy weight)'
    else if (limits(bmi, 25, 30)) return 'Overweight'
    else if (limits(bmi, 30, 35)) return 'Obese Class I (Moderately obese)'
    else if (limits(bmi, 35, 40)) return 'Obese Class II (Severely obese)'
    else return 'Obese Class III (Very severely obese)'
}

console.log(calculateBmi(180, 74))