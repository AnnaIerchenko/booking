import './searchItem.css'

function SearchItem() {
  return (
    <div className='searchItem'>
        <img 
            src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" 
            alt="room" 
            className="siImg" 
        />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m fromm center</span>
            <span className="siTextOp">Free airport taxi</span>
            <span className="siSubtitle">
                Studio Apartment with air conditioning
            </span>
            <span className="siFeatures">
                Entire studio - 1 bathroom - 21m - 1full bed
            </span>
            <span className="siCancelOp">Free canselation</span>
            <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
            <span>Excellent</span> 
            <button>8.9</button>   
            </div>  
            <div className="siDetailTexts">
                <span className="siPrice">$123</span>
                <span className="siTaxOp">Includes taxes and  fees</span>
                <button className="siCheckButton">See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem