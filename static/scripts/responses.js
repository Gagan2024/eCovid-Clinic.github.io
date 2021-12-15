function getBotResponse(input) {
    //health assessment
    if (input == "Covid-19 help" || input == "help" || input =="covid") {
        return "Gender M/F";
    } else if (input == "M"|| input == "F") {
        return "Are You Experiencing any of Syemptoms Type 1. 'If fever(99+), cough , tiredness loss of taste or smell, difficulty breathing or shortness of breath, loss of speech or mobility, or confusion,chest pain' Type 2. 'fever(99+), cough,sore throat' Type 3.' Only fever(99+), cough' Type 4. 'None' ";
    } else if (input == "1") {
        return "Seek immediate medical attention you have serious symptoms. Always call before visiting your doctor or health facility By using our Virtual treatment";
    }
    else if (input == "2"){
        return "Mild Symptoms take our virtual treatment at home"
    }
    else if (input == "3"){
        return "No Symptoms just common viral"
    }
    else if (input == "4"){
        return "You are fine!"
    }



    // Simple responses
    if (input == "hello" ) {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later! Stay Healty Stay Safe!";
    } else {
        return "Try asking something else!";
    }
}