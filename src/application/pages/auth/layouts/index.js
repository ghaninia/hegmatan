export default function Wrapper (props) {
    return (
        <div className="sign">
            <div className="item">
                { props?.children }
            </div>
        </div>
    );
} 