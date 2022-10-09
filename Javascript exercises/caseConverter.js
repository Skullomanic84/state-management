export const convertCase = (chars) => {
    const changedCharacters = chars.map((c) => {
        if (c.toUpperCase() === c) {
            return c.toLowerCase();
    }else{
        return c.toUpperCase();
    });

    return changedCharacters;
}