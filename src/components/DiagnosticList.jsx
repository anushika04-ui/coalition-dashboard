function DiagnosticList({ diagnostic_list }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Problem</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {diagnostic_list.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DiagnosticList;