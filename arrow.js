const movies = [
    {
        movie : 'singam', rating : 8.2
    },
    {
        movie : 'doom', rating : 8.8,
    },
    {
        movie : 'BB', rating : 9.6,
    },
    {
        movie : 'BB2', rating : 9.2,
    },
]

const sorted = movies.sort((a,b) => (a.sort  > b.sort ) ? -1 : 1);
console.table(sorted)