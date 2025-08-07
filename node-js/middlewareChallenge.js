export function checkWhetherUserAllow(req, res, next) {
    let role = req?.user?.role || 'student';
    let studentAllowedDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    let dayObj = {
        0: 'Monday',
        1: 'Tuesday',
        2: 'Wednesday',
        3: 'Thursday',
        4: 'Friday',
        5: 'Saturday',
        6: 'Sunday'
    }
    let day = new Date().getDay();
    let currentDay = dayObj[day];
    let facultyCurrentDays = [...studentAllowedDays, 'Saturday', 'Sunday'];
    let isAllowedStudents = false;
    let currentHour = new Date().getHours();
    // have access on m to f and time be 11 am to 5 pm
    if (role == 'student' && studentAllowedDays.includes(currentDay) && currentHour >= 11 && currentHour <= 5) {
        isAllowedStudents = true;
        next();
    };

    if (role == "faculty" && facultyCurrentDays.includes(currentDay)) {
        next();
    }

    res.status(401).send('You dont allowed to access library');
}