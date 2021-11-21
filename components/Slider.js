const Slider = ({ facts }) => {
  return (
    <ul>
      {facts.map((fact, i) => (
        <li key={i}>{fact.fact}</li>
      ))}
    </ul>
  )
}

export default Slider