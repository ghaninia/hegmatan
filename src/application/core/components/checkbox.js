import {uniqueId} from "../classes/documentor";

const Checkbox = (props) => {
    var id = uniqueId() ;
    return (
        <div className="checkbox">
            <input id={id} type="checkbox" {...props} />
            <label htmlFor={id}></label>
        </div>
    );
};

export default Checkbox ;