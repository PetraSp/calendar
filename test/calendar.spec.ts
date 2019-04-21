var expect = require('chai').expect;
var Calendar = require('../src/Calendar');
var moment = require("moment");

describe('Calendar', () => {
    afterEach(() => {});
    beforeEach(() => {
    });
    it('Should get month given a month and a year', () => {
        const calendar = new Calendar('November 2017');
        expect(calendar.getMonth()).to.equal('November');
    });
    it('Should get year given a month and a year', () => {
        const calendar = new Calendar('November 2017');
        expect(calendar.getYear()).to.equal('2017');
    });

    it('Should get next month name and year given a month and a year', () => {
        const calendar = new Calendar('December 2017');
        expect(calendar.getNextMonth()).to.equal('January 2018');
    });

    it('Should get prev month name and year given a month and a year', () => {
        const calendar = new Calendar('December 2017');
        expect(calendar.getPrevMonth()).to.equal('November 2017');
    });

    it('is initialized with the current month and year', () => {
        const calendar = new Calendar(moment().format('MMMM YYYY'));
        expect(calendar.getMonth()).to.equal(moment().format('MMMM'));
        expect(calendar.getYear()).to.equal(moment().format('YYYY'));
    });

    it('can be initialized with a custom month and year', () => {
        const calendar = new Calendar('December 2017');
        expect(calendar.getMonth()).to.equal('December');
        expect(calendar.getYear()).to.equal('2017');
    });

    it('should validate the custom date (partial creation, bad month)', () => {
        const calendar = new Calendar('December 2017');
        expect(calendar.getNextMonth()).to.equal('January 2018');
    });

    it('gets number of days', () => {
        const calendar = new Calendar('April 2019');
        expect(calendar.getDaysNumber()).to.equal(30);
    });

    it('get the month weekday start', () => {
        const calendar = new Calendar('April 2019');
        expect(calendar.getMonthWeekdayStart()).to.equal('Monday');
    });
});
