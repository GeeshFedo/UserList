const filterByValue = (objArr, value) => {
    return objArr.filter(o => {
        return Object.keys(o).some(k => {
            if (typeof o[k] === 'string') {
                return o[k].toLowerCase().includes(value.toLowerCase());
            }
            else if (typeof o[k] === 'object' && o[k] !== null && Object.keys(o[k]).length > 0) {
                return Object.values(o[k]).some((v) => {
                    if (typeof v === 'string') {
                        return v.toLowerCase().includes(value.toLowerCase());
                    }
                });
            }
        });
    });
}

export default filterByValue;