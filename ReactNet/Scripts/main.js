var num = 1;
var data = [
    {"Name": "Operations Scorecard", "Desc": "First"},
    {"Name": "LTC", "Desc": "second"},
    {"Name": "Reclaim", "Desc": "third"}
];
var ProjectLists = React.createClass({
    render: function() {
        return (
        
        <div className="Container">
            <h1>Projects</h1>
            Project name: <input type="text" /> 
            Project Description: <input type="text" /> 

            <a>back</a>
        </div>
        )
  }
});

var Main = React.createClass({
    render: function() {
        if(this.props.nums == 1){
            return (
        
                <div className="Container">
                    <h1>Projects</h1>
                    <table>
                        <tr>
                            <th> Name </th>
                            <th> Description </th>
                            <th></th>
                        </tr>
               
                        {this.props.projects.map(function(c){
                            return ( 
                                <tr> 
                                        <td>{c.Name}</td>
                                    <td>{c.Desc}</td>
                                    <td> <a href="#" >
                                    <span className="glyphicon glyphicon-remove delete-obj"></span></a></td>
                                </tr>
                                )
                        })}
               
                    </table>
        
                </div>
            )
      }
      else{
          return(
              <ProjectLists number={this.props.nums} />
        )
    }
  }
});


ReactDOM.render(
    <Main nums={num} projects={data} />
    ,
    document.getElementById('main')
);
