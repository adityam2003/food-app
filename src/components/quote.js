import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
export default function Quote(){
    return(
       <div className="section quote"> 
        <p className="quote-text"><FontAwesomeIcon icon={faQuoteLeft} />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tellus mauris, pretium id enim nec, mollis varius elit. Nullam ut dui aliquet, luctus magna vitae, ultricies felis. Aenean tortor orci, malesuada et condimentum sit amet, blandit a diam.
        </p>
        <p className="quote-author">-"FoodiesHub"</p>
       </div>
    )
}