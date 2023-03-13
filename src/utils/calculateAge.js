export default function calculateAge() {
    const date = new Date()
    const birthdayYear = 1983
    const birthdayMonth = 11
    const birthdayDay = 13
    const todayYear = date.getUTCFullYear()
    const todayMonth = date.getMonth() + 1
    const todayDay = date.getDate()


    let myAge = 0
    if (birthdayMonth > todayMonth) {
        myAge = todayYear - birthdayYear - 1
    } else if (birthdayMonth <= todayMonth && birthdayDay <= todayDay ) {
        myAge = todayYear - birthdayYear
    } else if (birthdayMonth === birthdayMonth && birthdayDay > todayDay) {
        myAge = todayYear - birthdayYear - 1
    }

    return myAge
}
