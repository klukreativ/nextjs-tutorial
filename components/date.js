import { parseISO, format } from 'date-fns';

// uses pkg to parse, format, and display date
export default function Date({ dateString }) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}