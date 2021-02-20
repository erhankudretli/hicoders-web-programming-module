new Cleave('.input-0', {
    creditCard: true,
    onCreditCardTypeChanged: function(type) {
        document.querySelector('.type').innerHTML = type;
    }
});

new Cleave('.input-3', {
    date: true,
    datePattern: ['d', 'm', 'Y'],
    delimiter: '.',
    dateMin: '',
    dateMax: '',
});

new Cleave('.input-4', {
    numeral: true,
    numeralDecimalMark: ',',
    delimiter: '.'
});

new Cleave('.input-1', {
    numeral: true,
    prefix: 'CHF'
});

new Cleave('.input-5', {
    uppercase: true,
    delimiters: ['.', '.', '-'],
    blocks: [3, 3, 3, 2]
});

new Cleave('.input-6', {
    uppercase: true,
    delimiter: '-',
    prefix: 'KEREMAG',
    blocks: [7, 3,5] // or [9]
});

new Cleave('.input-2', {
    numericOnly: true,
    delimiter: '.',
    prefix: 'BE',
    blocks: [5, 3, 3]
});

new Cleave('.input-7', {
    uppercase: true,
    delimiter: '-',
    blocks: [7, 1, 4, 4]
});

new Cleave('.input-8-1', {
    uppercase: true,
    delimiters: [' ', '|', ' ', ' ', '|', ' ', ' ', '|', ' '],
    blocks: [3, 0, 0, 3, 0, 0, 3, 0, 0, 3, 0]
});

new Cleave('.input-8-2', {
    uppercase: true,
    delimiters: [' | ', ' | ', ' | '],
    blocks: [3, 3, 3, 3]
});

new Cleave('.input-9', {
    delimiter: '-',
    blocks: [3, 3, 3],
    delimiterLazyShow: true
});

new Cleave('.input-10', {
    numericOnly: true,
    blocks: [0, 2, 0, 3, 2,2],
    delimiters: ["(", ")", " ", "-"]
});

new Cleave('.input-11', {
    numericOnly: true,
    blocks: [0, 3, 3, 4],
    delimiters: ["(", ") ", "-"]
});
