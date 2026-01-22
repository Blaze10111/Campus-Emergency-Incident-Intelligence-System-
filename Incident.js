let IncidentDatabase = [];

document.getElementById("incidentForm").addEventListener("submit", function(e) {
 e.preventDefault();
 let type = document.getElementById("type").value;
 let description = document.getElementById("description").value;
 let risk = RiskAssessmentEngine(description);

 let incident = {
   id: Date.now(),
   type: type,
   description: description,
   riskLevel: risk,
   status: "Pending"
 };

 IncidentDatabase.push(incident);
 alert("Incident Submitted Successfully");
});

function RiskAssessmentEngine(desc) {
 if (desc.toLowerCase().includes("weapon") || desc.toLowerCase().includes("fire")) return "Critical";
 if (desc.toLowerCase().includes("theft")) return "High";
 return "Medium";
}