function getCheapestHotel(input) { //DO NOT change the function's name.

    const data = input;
    const tpcliente = input.slice(0, 7);
    const dias = {
        day1: data.slice(19, 22),
        day2: data.slice(35, 38),
        day3: data.slice(-4, -1)
    }
    let LkwoodPrice = 0;
    let BdwoodPrice = 0;
    let RdwoodPrice = 0;

    const Lakewood = {
        weekday: 110,
        weekend: 90
    };
    const Bridgewood = {
        weekday: 160,
        weekend: 60
    };
    const Ridgewood = {
        weekday: 220,
        weekend: 150
    };

    if (tpcliente == 'Rewards') {
        Lakewood.weekday = 80;
        Lakewood.weekend = 80;

        Bridgewood.weekday = 110;
        Bridgewood.weekend = 50;

        Ridgewood.weekday = 100;
        Ridgewood.weekend = 40;
    }


    if (dias.day1 == 'sat' || dias.day1 == 'sun') {
        LkwoodPrice += Lakewood.weekend;
        BdwoodPrice += Bridgewood.weekend;
        RdwoodPrice += Ridgewood.weekend;
    } else {
        LkwoodPrice += Lakewood.weekday;
        BdwoodPrice += Bridgewood.weekday;
        RdwoodPrice += Ridgewood.weekday;
    }
    
    if (dias.day2 == 'sat' || dias.day2 == 'sun') {
        LkwoodPrice += Lakewood.weekend;
        BdwoodPrice += Bridgewood.weekend;
        RdwoodPrice += Ridgewood.weekend;
    } else {
        LkwoodPrice += Lakewood.weekday;
        BdwoodPrice += Bridgewood.weekday;
        RdwoodPrice += Ridgewood.weekday;
    }

    if (dias.day3 == 'sat' || dias.day3 == 'sun') {
        LkwoodPrice += Lakewood.weekend;
        BdwoodPrice += Bridgewood.weekend;
        RdwoodPrice += Ridgewood.weekend;
    } else {
        LkwoodPrice += Lakewood.weekday;
        BdwoodPrice += Bridgewood.weekday;
        RdwoodPrice += Ridgewood.weekday;
    }

    
    if (RdwoodPrice == BdwoodPrice || RdwoodPrice == LkwoodPrice) {
        RdwoodPrice -= 1;
    }if (BdwoodPrice == LkwoodPrice) {
        BdwoodPrice -= 1;
    }


    if (LkwoodPrice < BdwoodPrice && LkwoodPrice < RdwoodPrice) {
        return "Lakewood";
    }
    if (BdwoodPrice < LkwoodPrice && BdwoodPrice < RdwoodPrice) {
        return "Bridgewood";
    }
    if (RdwoodPrice < LkwoodPrice && RdwoodPrice < BdwoodPrice) {
        return "Ridgewood";
    }


}

getCheapestHotel('Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)');

exports.getCheapestHotel = getCheapestHotel
