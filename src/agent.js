import _superagent from "superagent";
import superagentPromise from "superagent-promise";

const superagent = superagentPromise(_superagent, global.Promise);

const responseBody = (res) => res.body;

const Movie = {};

const Cat = {
  getRandom: () =>
    superagent.get("https://aws.random.cat/meow").then(responseBody),
};

export default {
  Movie,
  Cat,
};
