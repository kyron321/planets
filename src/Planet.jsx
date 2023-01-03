function Planet({ planet_name, type, au_from_sun }) {
  return (
    <div>
      <h2>{planet_name}</h2>
      <section>
        <h3>Planet Facts</h3>
        <p className="info">Type: {type}</p>
        <p>distance from sun: {au_from_sun} AU</p>
      </section>
    </div>
  );
}

export default Planet;
