import { useEffect, useState } from "react";
import { fetchPatientData } from "./services/api";
import PatientProfile from "./components/PatientProfile";
import DiagnosisHistory from "./components/DiagnosisHistory";
import DiagnosticList from "./components/DiagnosticList";
import LabResults from "./components/LabResults";

function App() {
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchPatientData();

      const jessica = data.find(
        (item) => item.name === "Jessica Taylor"
      );

      setPatient(jessica);
    };

    getData();
  }, []);

  if (!patient) return <h2>Loading...</h2>;

  return (
    <div className="dashboard">
      <div className="left-section">
        <PatientProfile patient={patient} />
      </div>

      <div className="middle-section">
        <DiagnosisHistory
          diagnosis_history={patient.diagnosis_history}
        />

        <DiagnosticList
          diagnostic_list={patient.diagnostic_list}
        />
      </div>

      <div className="right-section">
        <LabResults lab_results={patient.lab_results} />
      </div>
    </div>
  );
}

export default App;