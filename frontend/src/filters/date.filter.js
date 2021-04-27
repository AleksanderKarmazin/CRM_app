// Filters are functions 


// export default function deteFilter(value, format = 'date') {
//     console.log(value);
//     return value;
// };

export default function deteFilter(value, format = 'date') {

    const options = {}
    if (format.includes('date') ) {
            options.day = '2-digit',
            options.month = 'long',
            options.year = 'numeric'


        } 
    if (format.includes('time') ) {
        options.hour = '2-digit',
        options.minute = '2-digit',
        options.second = '2-digit'


    } 
    return Intl.DateTimeFormat('ru-RU', options).format( new Date(value))
};
