

const returnTypedArray = (locale, section) => {
    const texts = {
          contact: {
            pl: ['pięknego', 'użytecznego', 'oryginalnego'],
            en: ['beautiful', 'useful', 'original'],
            de: ['Schönes', 'nützlich', 'original']
        }
    };

    return texts[section][locale];
}
export default returnTypedArray;