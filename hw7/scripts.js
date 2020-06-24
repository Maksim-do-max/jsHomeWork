let liquid = function (name) {

    this.get = function () {
        this.name = name;
        this.volume = +prompt('Какое количество воды, л');
        this.consumpt = 0.309; 

        if (confirm('Окрыть кран?')) {
            this.firstDate = prompt('В какое время идет вода, в формате 00:00');
            this.secondDate = prompt('В какое время прекращено наполнение, в формате 00:00');
        } else {
            console.log('Кран "' + this.name + '" не открыт');
            return
        };

        this.operation();
    };

    this.operation = function () {

        let getDate = (string) => new Date(0, 0, 0, string.split(':')[0], string.split(':')[1]);
        let different = (getDate(this.secondDate) - getDate(this.firstDate));
        let differentRes,
            hours,
            minuts;
            
        if (different > 0) {
            differentRes = different;
            hours = Math.floor((differentRes % 86400000) / 3600000);
            minuts = Math.round(((differentRes % 86400000) % 3600000) / 60000);
        } else {
            differentRes = Math.abs((getDate(this.firstDate) - getDate(this.secondDate)));
            hours = Math.floor(24 - (differentRes % 86400000) / 3600000);
            minuts = Math.round(60 - ((differentRes % 86400000) % 3600000) / 60000);
        }

        this.totalTime = hours + (minuts / 60)

        this.result = (this.volume / 1000) * this.consumpt * this.totalTime;

        this.show();
    };

    this.show = function () {

        if (this.result > 0) {
            console.log('Кран "' + this.name + '" был открыт - ' + this.totalTime + 'ч, и стоимость израсходованной воды составляет = ' + this.result + 'р.');
        } else {
            console.log('Кран "' + this.name + '" закрыт');
        }
    };
};

let mixer = new liquid('Кухня');
mixer.get();

let mixer2 = new liquid('Ванная');
mixer2.get();