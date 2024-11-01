import moment from 'moment';

/**
 * Checks if the user is new or not (new is a that first entered the site in the last 7 days)
 * @returns true if the user is new, false otherwise
 */
export function isNewUser() {
    let time = null;
    try {
        time = localStorage.getItem('firstEntry');
    }
    catch (e) {
        return 2;
    }
    if (time == null) {
        time = new Date().toISOString();
        localStorage.setItem('firstEntry', time);
        return true;
    }
    const date = moment(time);
    const diff = date.diff(moment(), 'days');
    return diff >= -7;
}   