import React from 'react';

//screen row component is written as a functional component
//it reeicves and siaplyes (in an input field) a props (property) of value from
//it's parent component

const ScreenRow = (props) => {
    return (
        <div className="screen-row">
             <input type="text" readOnly value={props.value}/>
            </div>
    )
}

//we descirbe the props (property) thatthe parent element is required to pass
//into this component

ScreenRow.propTypes = {
    value: React.PropTypes.string.isRequired
}

export default ScreenRow;