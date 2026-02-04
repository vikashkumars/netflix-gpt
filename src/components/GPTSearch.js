import { BG } from "../utils/constant";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (<div>
    <div className="absolute -z-10">
            <img
              src={BG}
              alt="bg"
            />
          </div>
    <GptSearchBar />
    <GptMovieSuggestion/>
  </div>);
};
export default GPTSearch;

