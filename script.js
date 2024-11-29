// script.js
document.getElementById("calculate").addEventListener("click", function () {
    const university = document.getElementById("university").value;
    const gpa = parseFloat(document.getElementById("gpa").value);
    const volunteerHours = parseInt(document.getElementById("hours").value, 10);
    const extracurricular = document.getElementById("activities").value;
  
    if (isNaN(gpa) || isNaN(volunteerHours) || gpa < 0 || gpa > 4) {
      document.getElementById("result").innerText = "Please enter valid inputs.";
      return;
    }
  
    // Real-world approximate base acceptance data
    const universityData = {
      "University of Toronto": { baseRate: 43, minGPA: 3.8 },
      "McMaster University": { baseRate: 50, minGPA: 3.7 },
      "University of Waterloo": { baseRate: 53, minGPA: 3.6 },
      "Queen's University": { baseRate: 45, minGPA: 3.7 },
      "Western University": { baseRate: 58, minGPA: 3.5 },
      "University of Ottawa": { baseRate: 63, minGPA: 3.4 },
      "York University": { baseRate: 70, minGPA: 3.3 },
      "Carleton University": { baseRate: 70, minGPA: 3.3 },
      "Toronto Metropolitan University (formerly Ryerson)": { baseRate: 73, minGPA: 3.2 },
      "Lakehead University": { baseRate: 80, minGPA: 2.8 },
      "Trent University": { baseRate: 77, minGPA: 3.0 },
      "Wilfrid Laurier University": { baseRate: 65, minGPA: 3.3 },
      "Brock University": { baseRate: 70, minGPA: 3.2 },
      "Nipissing University": { baseRate: 80, minGPA: 2.8 },
      "Algoma University": { baseRate: 85, minGPA: 2.5 },
      "University of Guelph": { baseRate: 65, minGPA: 3.3 },
      "Ontario Tech University": { baseRate: 70, minGPA: 3.2 },
    };
  
    const selectedUniversity = universityData[university];
    if (!selectedUniversity) {
      document.getElementById("result").innerText = "University data not found.";
      return;
    }
  
    let baseRate = selectedUniversity.baseRate;
  
    // GPA weight
    if (gpa >= selectedUniversity.minGPA + 0.3) baseRate += 15;
    else if (gpa >= selectedUniversity.minGPA) baseRate += 10;
    else if (gpa >= selectedUniversity.minGPA - 0.2) baseRate += 5;
    else baseRate -= 15;
  
    // Volunteer hours weight
    if (volunteerHours >= 100) baseRate += 10;
    else if (volunteerHours >= 50) baseRate += 5;
    else baseRate -= 5;
  
    // Extracurricular weight
    if (extracurricular === "High") baseRate += 10;
    else if (extracurricular === "Medium") baseRate += 5;
    else baseRate -= 5;
  
    // Ensure rate is realistic
    const acceptanceRate = Math.min(Math.max(baseRate, 0), 100);
  
    document.getElementById("result").innerText = 
      `Your estimated acceptance rate to ${university} is ${acceptanceRate.toFixed(2)}%.`;
  });
  