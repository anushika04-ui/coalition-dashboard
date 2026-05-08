function LabResults({ lab_results }) {
  return (
    <div>
      <h3>Lab Results</h3>

      {lab_results.map((result, index) => (
        <div key={index} className="lab-item">
          {result}
        </div>
      ))}
    </div>
  );
}

export default LabResults;3