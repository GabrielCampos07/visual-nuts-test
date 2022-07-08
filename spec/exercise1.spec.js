import { showingItems, printingItems } from '../src/exercise1.js';

describe('Visual Nuts Test', function () {

    describe('Visual', function () {
        it('Must return Visual when the input is 3', function () {
            expect(showingItems(3)).toBe('Visual');
        });
        it('Must return Visual when the input is 9', function () {
            expect(showingItems(9)).toBe('Visual');
        });
    });

    describe('Nuts', function () {
        it('Must return Nuts when the input is 5', function () {
            expect(showingItems(5)).toBe('Nuts');
        });
        it('Must return Nuts when the input is 25', function () {
            expect(showingItems(25)).toBe('Nuts');
        });
    });

    describe('Visual Nuts', function () {
        it('Must return Visual Nuts when the input is 15', function () {
            expect(showingItems(15)).toBe('Visual Nuts');
        });
        it('Must return Visual Nuts when the input is 30', function () {
            expect(showingItems(30)).toBe('Visual Nuts');
        });
    });

    describe('Not divided by 3 or 5', function () {
        it('Must return 2 when the input is 2', function () {
            expect(showingItems(2)).toBe(2);
        });
        it('Must return 4 when the input is 4', function () {
            expect(showingItems(4)).toBe(4);
        });
    });

    describe('Numbers is over than 100', function () {
        it('Must return the correct results when the number is over than 100', function () {
            expect(printingItems(500)).toContain('Nuts');
            expect(printingItems(500)).toContain('Visual');
            expect(printingItems(500)).toContain('Visual Nuts');
            expect(printingItems(500)).toContain(jasmine.any(Number));
        })
    })
});