
export function cloneDate(date){
    return new Date(date.getTime());
}

export function cloneAsDate(date){
    var d = cloneDate(date);
    d.setHours(0,0,0,0);
    return d;
}


export function getFirstDayOfWeek(){
    var now = new Date();
    return new Date(now.setDate(now.getDate() - now.getDay()))
}

export function getFirstDatyOfMonth(d){
    return new Date(d.getFullYear(), d.getMonth(), 1);
}

export function isEqual(d1, d2){
    return d1 && d2 && d1.getFullYear() === d2.getFullYear()
        && d1.getMonth() && d2.getMonth()
        && d1.getDate() && d2.getDate()
}

