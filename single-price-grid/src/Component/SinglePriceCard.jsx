import './style.css';

function SinglePriceGrid(){
    return (
        <div className ="container">
        <section className ="section1">
          <h1>Join our communuty</h1>
          <h2>30-day, hassle-free money back guarantee</h2>
          <p>
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect fot any developers who are serious about honing their
            skills.
          </p>
        </section>
  
        <div className="cont">
          <section className="section2">
            <h3>Monthly subcription</h3>
            <h4><span className="span">$29</span> <h8>per mont</h8></h4>
            <p>full access for less than $1 a day</p>
            <button className="button">sign up</button>
          </section>
          <section className="section3">
            <h6>Why us</h6>
            <p>
              tutorials by industry experts <br />
              peer & espert code review <br />
              coding exercies <br />
              access to our GitHub repos <br />
              community forum <br />
              flashcard decks <br />
              new videos every week
            </p>
          </section>
        </div>
      </div>

)
    
}

export default SinglePriceGrid

