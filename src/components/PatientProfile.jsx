function PatientProfile({ patient }) {
  return (
    <div className="profile-card">
      <img src={patient.profile_picture} alt={patient.name} />

      <h2>{patient.name}</h2>

      <p>Date Of Birth: {patient.date_of_birth}</p>
      <p>Gender: {patient.gender}</p>
      <p>Phone: {patient.phone_number}</p>
      <p>Emergency Contact: {patient.emergency_contact}</p>
      <p>Insurance: {patient.insurance_type}</p>
    </div>
  );
}

export default PatientProfile;