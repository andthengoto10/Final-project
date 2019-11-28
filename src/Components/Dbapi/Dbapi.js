import React from 'react'

const db = {
        display:'flex',
        // hight: '1000px'
        height:'-webkit-fill-available',
        'background-color': '#00DFAC',
        width:'fit-content'

}

const monitor = {
    'margin': '10px'
}
export default class DbApi extends React.Component {

    render(){
        return(

            <div className='DB' style={db}>
                
                    <iframe style={monitor} src="http://haltestellenmonitor.vrr.de/monitor/8fdf5af2ff9b13b5f69c9bf82bdf8b16" frameborder="0"></iframe>
                
                    <iframe style={monitor} src="http://haltestellenmonitor.vrr.de/monitor/6b3bd3e2d5d8ed60988f91341bc2bfb3" frameborder="0"></iframe>
                
                    <iframe style={monitor} src="http://haltestellenmonitor.vrr.de/monitor/4472df4258117498ffb7870124088bb0" frameborder="0"></iframe>
               

            </div>
        )
    }
}


// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

// export default class DbApi extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         data: []
//       };
//     }
//     async componentDidMount() {
//       const response = await fetch(` https://openservice-test.vrr.de/static02/XML_STOPFINDER_REQUEST?sessionID=0&requestID=0&language=DE&coordOutputFormat=WGS84&place_sf=Gelsenkirchen&placeState_sf=empty&type_sf=stop&name_sf=Lukaskirche&nameState_sf=empty&itdDateYear=2011&itdDateMonth=10&itdDateDay=24&itdTimeHour=11&itdTimeMinute=9&coordOutputFormatTail=0`);
//       const data = await response.json();
//       console.log(data);
//       this.setState({
//         data
//       });
//     }
  
//     handleClick = (rowKey) => {
//       alert(this.refs.table.getPageByRowKey(rowKey));
//     }
  
//     render() {
//       return (
//         <div>
//           {/* <div className='form-inline'>
//             { `typing your row key -> ` }
//             <input
//               className='form-control'
//               ref='rowKeyInput'
//               onChange={ (e) => {
//                 this.setState( {
//                   text: e.target.value
//                 } );
//               } }
//               value={ this.state.text } />
//             { ' ' }
//             <button
//               className='btn btn-success'
//               onClick={ () => {
//                 this.handleClick(parseInt(this.refs.rowKeyInput.value, 10));
//               } }>
//                 get the page
//             </button>
//           </div> */}
//           <BootstrapTable
//             ref='table'
//             data={ this.state.data }
//             pagination={ true }
//             search={ true }>
//             <TableHeaderColumn dataField='id' isKey={ true }>ID</TableHeaderColumn>
//             <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
//             <TableHeaderColumn dataField='username'>Username</TableHeaderColumn>
//             <TableHeaderColumn dataField='email'>E-mail</TableHeaderColumn>

//           </BootstrapTable>
//         </div>
//      );
//     }
//   }


