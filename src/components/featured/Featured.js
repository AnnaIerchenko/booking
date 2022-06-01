import "./featured.css"

function Featured() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img 
                src="https://images.unsplash.com/photo-1572985353481-b9064d14b646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU5fHxkdWJsaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
                alt="dublin" 
                className="featuredImg" />
            <div className="featuredTitle">
                <h1>Dublin</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img 
                src="https://images.unsplash.com/photo-1588993608283-7f0eda4438be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                alt="austin" 
                className="featuredImg" />
            <div className="featuredTitle">
                <h1>Austin</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img 
                src="https://images.unsplash.com/photo-1482987945559-cf71742c8329?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="reno" 
                className="featuredImg" />
            <div className="featuredTitle">
                <h1>Reno</h1>
                <h2>123 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured