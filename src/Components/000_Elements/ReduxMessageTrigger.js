// import React from "react";
// import {connect} from 'react-redux';
//
//
// class ReduxArea extends React.Component {
//   render() {
//
//     // console.log(this.props);
//     return (
//         <div className="ui container grid">
//           <div className="ui row">
//             <div className="column four wide">
//               This does nothing
//             </div>
//           </div>
//         </div>
//     );
//   }
// }
//
// const mapStateToProps = (state) =>{
//   return{
//     messageItem: state.messageItem
//   }
// }
//
// export default connect(mapStateToProps)(ReduxArea);

import React from "react";
import { useSelector } from "react-redux";

const ReduxArea = () => {


    const { messageItem }= useSelector( state => state );
    console.log(messageItem);

    return(
        <div className="ui container grid">
            <div className="ui row">
                <div className="column four wide">
                    This does nothing
                </div>
            </div>
        </div>
    );

};

export default ReduxArea;