import { useNavigate } from "react-router-dom";

const GoBack = () => {
    const navigate = useNavigate();
    return (
        <div className="page-title_back" onClick={ () => navigate(-1) } >
            <i className="lni lni-angle-double-right"></i>
        </div>
    );
}

const Page = (props) => {

    const { hasBack , title , description } = props ;

    return (
        <div className="page">
            {
                hasBack || title || description ? (
                    <div className="page-title">
                        { hasBack ? <GoBack /> : null }
                        <div className="page-title_body">
                            { title?.length ? <h1>{title}</h1> : null }
                            { description ? <small>{description}</small> : null }
                        </div>
                    </div>
                ) : null
            }
            <div className="page-body">
                {props.children}
            </div>
        </div>
    );

}

export default Page ;