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
            <h1>Applications</h1>
            <ul className="header">
                <li>Application 1</li>
                <li>Application 2</li>
            </ul>
            <div className="content">
                this is from content
            </div>
        
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
              <ul className="header">{
                  this.props.projects.map(function(c){
                      return (<li>{c.Name} </li>)
                  })}

              </ul>
          </div>
          )
      }
      else{
          return(
              <ProjectLists number={this.props.nums}/>
        )
    }
  }
});




ReactDOM.render(
    <Main nums={num} projects={data} />
    ,
    document.getElementById('main')
);
