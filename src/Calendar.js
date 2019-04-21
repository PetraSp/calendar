var moment = require("moment");

class Calendar {
    constructor(initTime) {
        this.time = initTime;
        this.month = this.time.split(' ')[0];
        this.year = this.time.split(' ')[1];
    }

    getMonth() {
        return this.month;
    }

    getYear() {
        return this.year;
    }

    getPrevMonth() {
        return moment(this.time).subtract(1, 'M').format("MMMM YYYY");
    }

    getNextMonth() {
        return moment(this.time).add(1, 'M').format("MMMM YYYY");
    }

    getDaysNumber() {
        return moment(this.time).daysInMonth();
    }

    getMonthWeekdayStart() {
        console.log(moment(this.time).startOf('month').day());
        return moment(this.time).daysInMonth();
    }
}

module.exports = Calendar;
