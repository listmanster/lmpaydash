

const zeroPad = (num, places) => String(num).padStart(places, '0')

const isoUTCDate = () => {
    var cd = new Date();
 
    var yyyy = cd.getUTCFullYear();
    var MM = zeroPad(cd.getUTCMonth(), 2);
    var dd = zeroPad(cd.getUTCDay(), 2);
    var hh = zeroPad(cd.getUTCHours(), 2);
    var mm = zeroPad(cd.getUTCMinutes(), 2);
    var ss = zeroPad(cd.getUTCSeconds(), 2);
 
    return `${yyyy}-${MM}-${dd}T${hh}:${mm}:${ss}Z`;
}

module.exports = {
    isoUTCDate: isoUTCDate
}