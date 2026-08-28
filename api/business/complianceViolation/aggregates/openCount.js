[
    { $match: { resolvedDate: { $exists: false } } },
    { $count: 'count' },
]
