/**
 * Default configuration
 */
const defaultConfig = {
  generators: {
    GeneratorPesel: {
      age: 40,
      birthDate: null,
      sex: "male"
    }
  },
  templates: {
    "default": `<osoba>
    <pesel>\${pesel}</pesel>
    <do>\${dowod}</do>
    <do-seria>\${dowodSeria}</do-seria>
    <do-numer>\${dowodNumer}</do-numer>
    <nip>\${nip}</nip>
    <regon>\${regon}</regon>
  </osoba>`,
  }
};

export default {
  get() {
    return defaultConfig;
  }
};
