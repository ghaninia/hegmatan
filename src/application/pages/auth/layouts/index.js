export default function Wrapper (props) {
    return (
        <div className="sign">
            <div className="container">
                <div className="item">
                    { props?.children }
                </div>
            </div>
        </div>
    );
} 