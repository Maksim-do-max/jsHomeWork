let Liquid = function (name) {

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
            console.log(this.name + ' был открыт - ' + this.totalTime + 'ч, и стоимость израсходованной воды составляет = ' + this.result + 'р.');
        } else {
            console.log(this.name + ' закрыт');
        }
    };
};

let liquid = new Liquid('Кухня');


// Задание №10

let Pool = function (volume, status) {
    Liquid.apply(this, arguments);

    this.name = 'Бассейн';
    this.volume = volume || 1000;
    this.consumpt = 0.309;

    this.get = function () {

        if (status == true) {
            this.firstDate = prompt('В какое время идет вода, в формате 00:00');
            this.secondDate = prompt('В какое время прекращено наполнение, в формате 00:00');
        } else {
            console.log('Кран не открыт');
            return;
        };


        this.mode();
    };

    this.mode = function () {

        this.selectMode = +prompt('Введите скорость подачи воды- 1, 2, 3, 4, 5');

        switch (this.selectMode) {
            case 1:
                this.volumeMode = 2;
                break;
            case 2:
                this.volumeMode = 4;
                break;
            case 3:
                this.volumeMode = 6;
                break;
            case 4:
                this.volumeMode = 8;
                break;
            case 5:
                this.volumerMode = 10;
                break;
            default:
                alert('Такого режима не существует, скорость подачи воды на минимальном режиме');
                this.volumeMode = 2;
        }

        this.totalVolume();
    };

    this.totalVolume = function () {

        if (confirm('Включен насос на циркуляцию?')) {
            this.volume = this.volume * this.volumeMode;
            console.log('Насос включен на циркуляцию');
        } else {
            this.volume = 0;
            console.log('Насос выключен ');
        }

        this.operation();
    };

};

let pool = new Pool(prompt('Введите скорость насоса?'), confirm('Включить насос?'));

pool.get();