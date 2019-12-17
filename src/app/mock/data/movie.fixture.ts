import {AbstractFixture} from "gtools";
import {Movie, movies} from "./movies.data";

export class MovieFixture extends AbstractFixture<Movie> {
    public constructor() {
        super(movies);
    }
}
