import '../assets/css/peopleviewed.css'

const items = [
  "Blue diamond almonds",
  "Angie's Boomchickapop Corn",
  "Salty kettle Corn",
  "Chobani Greek Yogurt",
  "Sweet Vanilla Yogurt",
  "Foster Farms Takeout Crispy wings",
  "Warrior Blend Organic",
  "Chao Cheese Creamy",
  "Chicken meatballs",
  "Blue diamond almonds",
  "Angie's Boomchickapop Corn",
  "Salty kettle Corn",
  "Chobani Greek Yogurt",
  "Sweet Vanilla Yogurt",
  "Foster Farms Takeout Crispy wings",
  "Warrior Blend Organic",
  "Chao Cheese Creamy",
  "Chicken meatballs"
];


const PeopleViewed = () => {
  return (
    <section className='people-viewed'>
      <h2>People are also looking for</h2>
      <div className='card-container'>
        {
          items.map((item,index)=>{
            return (
              <div key={index} className="cards">{item}</div>
            )
          })
        }
      </div>
    </section>
  )
}

export default PeopleViewed