var cleave = new Cleave('.cleave-input-date', {
    date: true,
    delimter: '/',
    datePattern: ['d', 'm', 'Y']
});

var cleave = new Cleave('.cleave-input-card', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
        
    }
});


var cleave = new Cleave('.cleave-input-prefix', {
    prefix: 'KRM2020',
    delimiter: '-',
    blocks: [7, 4, 4, 4],
    uppercase: true
});