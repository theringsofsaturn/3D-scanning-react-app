// BenefitsComp.jsx:
import "./BenefitsComp.css";

function BenefitsComp() {
  // Data for statistics could be sourced from props, state, or a static data file
  const stats = [
    {
      title: "Increase Sales",
      number: "14%",
      description: "by inspiring more customers to visiting your property.",
    },
    {
      title: "Decrease travel time and cost",
      number: "50%",
      description: "by removing the need for site visits.",
    },
    {
      title: "Cut project time",
      number: "30%",
      description: "by letting teams accesing a property anytime - anywhere.",
    },
    {
      title: "Reduce carbon emissions",
      number: "16%",
      description:
        "by eliminating the need for car and plane travel to operate more sustainably.",
    },
  ];

  return (
    <section className="benefits_sec" id="benefits">
      <div>
        <h1 className="heading-text">Benefits</h1>
        <div className="benefits_stats">
          {stats.map((stat, index) => (
            <article key={index} className="stat_card">
              <h2 className="stat_title">{stat.title}</h2>
              <p className="stat_number">{stat.number}</p>
              <p className="stat_description">{stat.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitsComp;
