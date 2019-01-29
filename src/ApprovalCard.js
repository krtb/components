import React from 'react';

const ApprovalCard = (props) => {
    console.log(props.children);
    // console.log(props.children); Can use this to see children of this component, that are nested
    return(
        <div className="ui card">
            <div className="content">{props.children}</div>
            <div className="extra-content" >
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    )
}

export default ApprovalCard; 