import moment from 'moment'

export function convertTimestampToStr(timestamp: number): string {
    return moment.unix(timestamp).format('MMM D, YYYY');
}